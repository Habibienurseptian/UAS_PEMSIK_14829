import React from "react";

const Card = ({ title, description, date }) => {
  return (
    <div className="bg-white shadow-md rounded-md p-4 mb-4">
      <h2 className="text-lg font-bold">{title}</h2>
      <p className="text-sm text-gray-700">{description}</p>
      <p className="text-xs text-gray-500 mt-2">Tanggal: {date}</p>
    </div>
  );
};

export default Card;
