import React, { useState } from "react";
import "./AdminPage.css";
import { useNavigate } from "react-router-dom";
import MenuManagement from "./MenuManagement";

const AdminPage = () => {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState(""); // Aktif sayfa kontrolü

  const handleLogoutClick = () => {
    sessionStorage.removeItem("token"); 
    navigate("/");
  };

  return (
    <div className="admin-container">
      <aside className="sidebar">
        <h2>Duman Kafe Admin</h2>
        <nav>
          <ul>
            <li>
              <a href="#menu" onClick={() => setActiveSection("menu")}>Menü Yönetimi</a>
            </li>
            <li>
              <a href="#users" onClick={() => setActiveSection("users")}>Kullanıcı Yönetimi</a>
            </li>
            <li>
              <a href="#orders" onClick={() => setActiveSection("orders")}>Sipariş Yönetimi</a>
            </li>
            <li>
              <a href="#inventory" onClick={() => setActiveSection("inventory")}>Stok Yönetimi</a>
            </li>
            <li>
              <a href="#settings" onClick={() => setActiveSection("settings")}>Ayarlar</a>
            </li>
          </ul>
        </nav>
        <div className="logoutdiv">
          <button className="logoutbut" onClick={handleLogoutClick}>Çıkış yap!</button>
        </div>
      </aside>
      <main className="content">
        <header className="content-header">
          <h1>Hoş Geldiniz, Yönetici!</h1>
        </header>
        <section className="content-body">
          {activeSection === "menu" && <MenuManagement />}
          {activeSection === "" && <p>Burada yönetim işlemlerini gerçekleştirebilirsiniz.</p>}
          {/* Diğer aktif sayfa içerikleri eklenebilir */}
        </section>
      </main>
    </div>
  );
};

export default AdminPage;
