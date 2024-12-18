import { Navigate } from "react-router-dom";

function ProtectedRoute({ token, children }) {
  console.log("TOKEN", token);
  if (!token) {
    // Token yoksa login sayfasına yönlendir
    return <Navigate to="/login" replace />;
  }
  return children;
}

export default ProtectedRoute;
