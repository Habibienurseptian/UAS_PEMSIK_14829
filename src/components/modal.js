import React from "react";

const Modal = ({
  isOpen,
  onClose,
  onSave,
  updatedTitle,
  setUpdatedTitle,
  updatedDescription,
  setUpdatedDescription,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-md shadow-lg max-w-lg w-full">
        <h3 className="text-lg font-bold mb-4">Edit Laporan</h3>
        <div className="mb-4">
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700"
          >
            Judul
          </label>
          <input
            type="text"
            id="title"
            value={updatedTitle}
            onChange={(e) => setUpdatedTitle(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700"
          >
            Deskripsi
          </label>
          <textarea
            id="description"
            value={updatedDescription}
            onChange={(e) => setUpdatedDescription(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="flex justify-end gap-2">
          <button
            onClick={onSave}
            className="bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700"
          >
            Simpan
          </button>
          <button
            onClick={onClose}
            className="bg-gray-400 text-white py-2 px-4 rounded-md hover:bg-gray-500"
          >
            Batal
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
