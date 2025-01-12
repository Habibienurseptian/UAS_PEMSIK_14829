import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/");
  };

  return (
    <nav className="bg-blue-600 text-white">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/dashboard" className="text-2xl font-bold">
          MerapiAlert
        </Link>

        {/* Mobile Hamburger Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
        {/* Main Menu for Desktop */}
        <div className="hidden md:flex md:items-center md:ml-auto space-x-6">
          <ul className="flex space-x-6">
            <li>
              <Link
                to="/dashboard"
                className="block py-2 px-4 hover:bg-blue-700 rounded"
                onClick={handleLinkClick}
              >
                Beranda
              </Link>
            </li>
            <li>
              <Link
                to="/add-report"
                className="block py-2 px-4 hover:bg-blue-700 rounded"
                onClick={handleLinkClick}
              >
                Tambah Laporan
              </Link>
            </li>
            <li>
              <Link
                to="/reports"
                className="block py-2 px-4 hover:bg-blue-700 rounded"
                onClick={handleLinkClick}
              >
                Daftar Laporan
              </Link>
            </li>
            <li>
              <button
                onClick={handleLogout}
                className="block py-2 px-4 hover:bg-red-700 rounded"
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-50 md:hidden transform transition-all duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        onClick={toggleMenu}
      >
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } w-64 bg-blue-600 text-white h-full`}
          onClick={(e) => e.stopPropagation()}
        >
          <ul className="flex flex-col space-y-6 p-6">
            <li>
              <Link
                to="/dashboard"
                className="block py-2 px-4 hover:bg-blue-700 rounded"
                onClick={handleLinkClick}
              >
                Beranda
              </Link>
            </li>
            <li>
              <Link
                to="/add-report"
                className="block py-2 px-4 hover:bg-blue-700 rounded"
                onClick={handleLinkClick}
              >
                Tambah Laporan
              </Link>
            </li>
            <li>
              <Link
                to="/reports"
                className="block py-2 px-4 hover:bg-blue-700 rounded"
                onClick={handleLinkClick}
              >
                Daftar Laporan
              </Link>
            </li>
            <li>
              <button
                onClick={handleLogout}
                className="block py-2 px-4 hover:bg-red-700 rounded"
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
