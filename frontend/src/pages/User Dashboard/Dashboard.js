import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import Sidebar from "../../components/Sidebar";

const Dashboard = () => {
  const [user, setUser] = useState({ name: "" });

  useEffect(() => {
    const google = JSON.parse(localStorage.getItem("user"));
    const profile = JSON.parse(localStorage.getItem("userProfile"));

    let username = google?.name || "User";

    if (profile?.name) username = profile.name;

    setUser({ name: username });
  }, []);

  return (
    <div className="dashboard-layout">
      <Sidebar />

      <div className="dashboard-container">
        <h1>Welcome back, {user.name} 👋</h1>
        <p className="subtitle">Here’s an overview of your activity</p>

        {/* STATS CARDS */}
        <div className="stats-grid">
          <div className="stat-card">
            <h3>Total Orders</h3>
            <p className="stat-number">12</p>
          </div>

          <div className="stat-card">
            <h3>Pending Orders</h3>
            <p className="stat-number">3</p>
          </div>

          <div className="stat-card">
            <h3>AI Generations</h3>
            <p className="stat-number">18</p>
          </div>

          <div className="stat-card">
            <h3>Items in Cart</h3>
            <p className="stat-number">4</p>
          </div>
        </div>

        {/* RECENT ORDERS */}
        <div className="section">
          <h2>Recent Orders</h2>
          <div className="orders-list">
            <div className="order-row">
              <p>AI Hoodie – Neon Glow</p>
              <span className="badge delivered">Delivered</span>
            </div>

            <div className="order-row">
              <p>Cyber Jacket – Blue Pulse</p>
              <span className="badge shipped">Shipped</span>
            </div>

            <div className="order-row">
              <p>AI Sneakers – White Edition</p>
              <span className="badge pending">Pending</span>
            </div>
          </div>
        </div>

        {/* RECENT AI GENERATIONS */}
        <div className="section">
          <h2>Recent AI Designs</h2>
          <div className="image-row">
            <img src="/register.png" alt="AI Design" />
            <img src="/register.png" alt="AI Design" />
            <img src="/register.png" alt="AI Design" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
