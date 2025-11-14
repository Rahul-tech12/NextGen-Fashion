import React, { useState } from "react";
import ProductsSection from "./ProductsSection.js";
import SettingsSection from "./SettingsSection.js";
import "./AdminDashboard.css";
import {
  FaTachometerAlt,
  FaShoppingBag,
  FaUsers,
  FaBoxOpen,
  FaCog,
} from "react-icons/fa";
import OrdersSection from "./OrdersSection.js";

const AdminDashboard = () => {
  const [activeMenu, setActiveMenu] = useState("Orders");

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <h2 className="logo">NextGen- Custom Clothing</h2>
        <ul>
          <li
            className={activeMenu === "Orders" ? "active" : ""}
            onClick={() => setActiveMenu("Orders")}
          >
            <FaShoppingBag /> Orders
          </li>
          <li
            className={activeMenu === "Products" ? "active" : ""}
            onClick={() => setActiveMenu("Products")}
          >
            <FaBoxOpen /> Products
          </li>
          <li
            className={activeMenu === "Settings" ? "active" : ""}
            onClick={() => setActiveMenu("Settings")}
          >
            <FaCog /> Settings
          </li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <h1>{activeMenu}</h1>

{activeMenu === "Products" && (
  <ProductsSection />
)}
{activeMenu === "Settings" && <SettingsSection />}



        {activeMenu === "Orders" && (
          <OrdersSection />
        )}
        
      </main>
    </div>
  );
};

export default AdminDashboard;