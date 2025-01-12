import React, { useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { addReport } from "../redux/reportSlice";

const AddReport = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !description) {
      alert("Judul dan Deskripsi tidak boleh kosong!");
      return;
    }

    const newReport = {
      title,
      description,
      createdAt: new Date().toISOString(),
    };

    try {
      const response = await axios.post(
        "http://localhost:5000/api/reports",
        newReport,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const addedReport = response.data;
      dispatch(addReport(addedReport));

      setTitle("");
      setDescription("");
    } catch (error) {
      alert(error.response?.data?.message || "Gagal menambahkan laporan.");
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-md shadow-md">
      <h2 className="text-xl font-bold mb-4">Tambah Laporan Baru</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700"
          >
            Judul Laporan
          </label>
          <input
            type="text"
            id="title"
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700"
          >
            Deskripsi Laporan
          </label>
          <textarea
            id="description"
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
        >
          Tambah Laporan
        </button>
      </form>
    </div>
  );
};

export default AddReport;
