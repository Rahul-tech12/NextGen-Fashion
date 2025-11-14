import React from "react";
import "./AdminDashboard.css";

const SettingsSection = () => {

  return (
    <div className="glass-card fade settings-section">
      <h2>Settings</h2>

      {/* Admin Profile */}
      <div className="settings-block">
        <h3>👤 Admin Profile</h3>
        <p><strong>Name:</strong> Super Admin</p>
        <p><strong>Email:</strong> admin@aifashion.com</p>
      </div>

      {/* Security */}
      <div className="settings-block">
        <h3>🔐 Security</h3>

        <button className="save-btn">Change Password</button>
        <button className="danger-btn">Logout</button>
      </div>
    </div>
  );
};

export default SettingsSection;