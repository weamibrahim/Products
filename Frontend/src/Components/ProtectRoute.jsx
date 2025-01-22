import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const loggedIn = localStorage.getItem("accessToken") !== null;

  return loggedIn ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
