import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { deleteReport, updateReport } from "../redux/reportSlice";
import ReportItem from "./reportItem";
import Modal from "./modal";

const ReportList = () => {
  const dispatch = useDispatch();
  const [editingReport, setEditingReport] = useState(null);
  const [updatedTitle, setUpdatedTitle] = useState("");
  const [updatedDescription, setUpdatedDescription] = useState("");
  const [laporan, setLaporan] = useState([]);

  useEffect(() => {
    const fetchReports = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/reports");
        setLaporan(response.data);
      } catch (error) {
        alert("Gagal memuat laporan.");
      }
    };

    fetchReports();
  }, []);

  const handleEditClick = (report) => {
    setEditingReport(report);
    setUpdatedTitle(report.title);
    setUpdatedDescription(report.description);
  };

  const handleSaveClick = async () => {
    if (updatedTitle && updatedDescription) {
      try {
        const response = await axios.put(
          `http://localhost:5000/api/reports/${editingReport.id}`,
          {
            title: updatedTitle,
            description: updatedDescription,
          }
        );

        if (response.status === 200) {
          dispatch(
            updateReport({
              id: editingReport.id,
              title: updatedTitle,
              description: updatedDescription,
            })
          );
          setEditingReport(null);
          window.location.reload();
        }
      } catch (error) {
        alert("Terjadi kesalahan saat memperbarui laporan.");
      }
    } else {
      alert("Judul dan Deskripsi tidak boleh kosong.");
    }
  };

  const handleDeleteClick = async (reportId) => {
    try {
      const response = await axios.delete(
        `http://localhost:5000/api/reports/${reportId}`
      );

      if (response.status === 200) {
        dispatch(deleteReport(reportId));
        window.location.reload();
      }
    } catch (error) {
      alert("Terjadi kesalahan saat menghapus laporan.");
    }
  };

  return (
    <div className="max-w-7xl mx-auto mt-6 px-4">
      <h2 className="text-2xl font-bold mb-6">Daftar Laporan</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {laporan.map((report) => (
          <ReportItem
            key={report.id}
            report={report}
            onEdit={handleEditClick}
            onDelete={handleDeleteClick}
          />
        ))}
      </div>

      <Modal
        isOpen={editingReport !== null}
        onClose={() => setEditingReport(null)}
        onSave={handleSaveClick}
        updatedTitle={updatedTitle}
        setUpdatedTitle={setUpdatedTitle}
        updatedDescription={updatedDescription}
        setUpdatedDescription={setUpdatedDescription}
      />
    </div>
  );
};

export default ReportList;
