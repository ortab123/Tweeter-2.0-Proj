import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";
import Spinner from "./Spinner.jsx";

export default function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();

  if (loading) return <Spinner />;

  return user ? children : <Navigate to="/login" replace />;
}
