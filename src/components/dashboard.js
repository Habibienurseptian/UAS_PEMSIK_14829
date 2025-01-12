import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setReports } from "../redux/reportSlice";
import Card from "./card";

const Dashboard = () => {
  const dispatch = useDispatch();
  const reports = useSelector((state) => state.report.reports);

  useEffect(() => {
    const fetchReports = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/reports");
        const data = await response.json();
        dispatch(setReports(data));
      } catch (error) {
        console.error("Error fetching reports:", error);
      }
    };

    fetchReports();
  }, [dispatch]);

  return (
    <div className="p-6 bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Laporan Kebencanaan</h1>
      <div className="space-y-4">
        {reports.length > 0 ? (
          reports.map((report) => (
            <div key={report.id} className="relative">
              <Card
                title={report.title}
                description={report.description}
                date={new Date(report.createdAt).toLocaleString()}
              />
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">
            Tidak ada laporan tersedia.
          </p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
