import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import LoginPage from "./pages/login";
import Dashboard from "./components/dashboard";
import ProtectedRoute from "./components/protectedRoute";
import RegisterPage from "./pages/register";
import Navbar from "./pages/navbar";
import AddReport from "./components/addReport";
import ReportList from "./components/reportList";

const App = () => {
  return (
    <Router>
      <NavAndRoutes />
    </Router>
  );
};

const NavAndRoutes = () => {
  const location = useLocation();

  const isAuthPage = location.pathname === "/" || location.pathname === "/register";

  return (
    <>
      {!isAuthPage && <Navbar />}
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route path="/add-report" element={<AddReport />} />
        <Route path="/reports" element={<ReportList />} />
      </Routes>
    </>
  );
};

export default App;
