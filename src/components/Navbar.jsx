import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUserCircle, FaBars, FaTimes } from "react-icons/fa";
import "../styles/Navbar.css"; // ✅ Make sure this import is present

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <h1 className="logo">🚀 Dashboard</h1>

      {/* Desktop Links */}
      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        <li><Link to="/settings">Settings</Link></li>
        <li className="logout" onClick={() => navigate("/")}>Logout</li>
      </ul>

      {/* Profile Icon */}
      <FaUserCircle className="profile-icon" />

      {/* Mobile Menu Icon */}
      <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>
    </nav>
  );
}
