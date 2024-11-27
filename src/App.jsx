import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import UserPage from "./pages/UserPage";
import MenuPage from "./pages/MenuPage";
import Tarihce from "./pages/Tarihce";
import BizeUlasin from "./pages/BizeUlasin";
import AdminPage from "./pages/AdminPage";
import ManagerPage from "./pages/ManagerPage";
import EmployeePage from "./pages/EmployeePage";
import CustomerPage from "./pages/CustomerPage";
import ProtectedRoute from "./components/ProtectedRoute"; // ProtectedRoute importu

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));

  useEffect(() => {
    const storedToken = localStorage.getItem("token");

    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login setToken={setToken} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/userPage" element={<UserPage />} />
        <Route path="/menuPage" element={<MenuPage />} />
        <Route path="/tarihce" element={<Tarihce />} />
        <Route path="/bize-ulasin" element={<BizeUlasin />} />

        {/* Protected routes */}
        <Route
          path="/adminPage"
          element={
            <ProtectedRoute token={token}>
              <AdminPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/managerPage"
          element={
            <ProtectedRoute token={token}>
              <ManagerPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/employeePage"
          element={
            <ProtectedRoute token={token}>
              <EmployeePage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/customerPage"
          element={
            <ProtectedRoute token={token}>
              <CustomerPage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
