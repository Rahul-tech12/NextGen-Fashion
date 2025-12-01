import React, { useState, useEffect } from "react";
import { FaHome, FaMagic, FaShoppingCart, FaBox, FaCog, FaChevronUp } from "react-icons/fa";
import "./Sidebar.css";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  const [user, setUser] = useState({
    name: "Rahul Choudhary",
    email: "rahul@gmail.com",
    photo: "/profile.jpg"
  });
  useEffect(() => {
  const savedTheme = localStorage.getItem("theme") || "light";
  document.documentElement.setAttribute("data-theme", savedTheme);
}, []);

  useEffect(() => {
  // Load initial data
  loadUser();

  // 🔥 Listen for profile updates
  window.addEventListener("profileUpdated", loadUser);

  return () => {
    window.removeEventListener("profileUpdated", loadUser);
  };
}, []);

const loadUser = () => {
  const google = JSON.parse(localStorage.getItem("user"));
  const profile = JSON.parse(localStorage.getItem("userProfile"));

  let finalUser = {
    name: google?.name || "Guest User",
    email: google?.email || "guest@example.com",
    photo: google?.photo || "/profile.jpg",
  };

  if (profile) {
    finalUser = { ...finalUser, ...profile };
  }

  setUser(finalUser);
};


  return (
    <aside className="sidebar">

      <h2 className="brand">AI Studio</h2>

      <ul className="nav-menu">
        <li><FaHome /> <Link to="/dashboard">Dashboard</Link></li>
        <li><FaMagic /><Link to="/design">Design Generator</Link></li>
        <li><FaShoppingCart /> <Link to="/cart">Cart</Link></li>
        <li><FaBox /> <Link to="/orders">Orders</Link></li>
      </ul>

      {/* PROFILE SECTION */}
      <div className="sidebar-profile" onClick={() => setOpen(!open)}>
        <img src={user.photo} alt="Profile" className="profile-avatar" />

        <div className="profile-info">
          <p className="profile-name">{user.name}</p>
          <p className="profile-email">{user.email}</p>
        </div>

        <FaChevronUp className="profile-arrow" />
      </div>

      {/* DROPDOWN — OPENING UPWARDS */}
      {open && (
        <div className="profile-dropdown-up">
          <p onClick={() => window.location.href = "/profile"}>View Profile</p>
          <p onClick={() => window.location.href = "/settings"}>Settings</p>
          <p
            className="logout"
            onClick={() => {
              localStorage.removeItem("user");
              window.location.href = "/login";
            }}
          >
            Logout
          </p>
        </div>
      )}
    </aside>
  );
};

export default Sidebar;
