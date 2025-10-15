import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = true; // change to false to test redirect

  return isAuthenticated ? children : <Navigate to="/" replace />;
};

export default ProtectedRoute;
