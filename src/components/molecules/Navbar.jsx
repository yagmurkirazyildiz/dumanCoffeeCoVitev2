import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import dumanlogo from "../media/dumanlogo.jpg";
import "./Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleLoginClick = () => {
    navigate("/login");
  };

  const handleRegisterClick = () => {
    navigate("/register");
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <img src={dumanlogo} alt="Logo" />
          Duman Coffee Co
        </Link>
      </div>
      <div className={`navbar-links ${isOpen ? "open" : ""}`}>
        <Link to="/menuPage" className="nav-link">Menü</Link>
        <button className="nav-button" onClick={handleLoginClick}>Login</button>
        <button className="nav-button" onClick={handleRegisterClick}>Kayıt Ol!</button>
      </div>
      <div className="navbar-toggle" onClick={handleToggle}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  );
}

export default Navbar;
