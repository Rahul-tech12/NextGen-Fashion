import React, { useEffect, useState } from "react";
import "./SettingsPage.css";
import Sidebar from "../../components/Sidebar";

const SettingsPage = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    photo: "/profile.jpg",
    darkMode: false,
    notifications: true,
    autoSave: true
  });
  const [theme, setTheme] = useState("light");

  useEffect(() => {
  const savedTheme = localStorage.getItem("theme") || "light";
  setTheme(savedTheme);
  document.documentElement.setAttribute("data-theme", savedTheme);
}, []);

const toggleTheme = () => {
  const newTheme = theme === "light" ? "dark" : "light";
  setTheme(newTheme);
  localStorage.setItem("theme", newTheme);
  document.documentElement.setAttribute("data-theme", newTheme);

  // notify components
  window.dispatchEvent(new Event("profileUpdated"));
};

  useEffect(() => {
    const googleData = JSON.parse(localStorage.getItem("user"));
    const profileData = JSON.parse(localStorage.getItem("userProfile"));
    const settingsData = JSON.parse(localStorage.getItem("userSettings"));

    let finalData = {
      ...user,
      email: googleData?.email || "guest@example.com",
      name: googleData?.name || "Guest User",
      photo: googleData?.photo || "/profile.jpg",
    };

    if (profileData) {
      finalData = { ...finalData, ...profileData };
    }

    if (settingsData) {
      finalData = { ...finalData, ...settingsData };
    }

    setUser(finalData);
  }, []);

  const handleToggle = (key) => {
    setUser((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const saveSettings = () => {
    const settingsToSave = {
      darkMode: user.darkMode,
      notifications: user.notifications,
      autoSave: user.autoSave,
    };

    localStorage.setItem("userSettings", JSON.stringify(settingsToSave));

    window.dispatchEvent(new Event("settingsUpdated"));
    alert("Settings updated successfully!");
  };

  return (
    <div className="settings-layout">
      <Sidebar />

      <div className="settings-container">
        <h1>Settings</h1>

        <div className="settings-card">
          <h2>Account</h2>

          <div className="settings-row">
            <img src={user.photo} alt="Profile" className="settings-avatar" />
            <div>
              <p><strong>{user.name}</strong></p>
              <p className="email">{user.email}</p>
            </div>
          </div>
        </div>

        <div className="settings-card">
          <h2>Preferences</h2>

          <div className="settings-option">
  <p>Dark Mode</p>
  <label className="switch">
    <input
      type="checkbox"
      checked={theme === "dark"}
      onChange={toggleTheme}
    />
    <span className="slider round"></span>
  </label>
</div>


          <div className="settings-option">
            <p>Enable Notifications</p>
            <label className="switch">
              <input type="checkbox" checked={user.notifications} onChange={() => handleToggle("notifications")} />
              <span className="slider round"></span>
            </label>
          </div>

          <div className="settings-option">
            <p>Auto-save Changes</p>
            <label className="switch">
              <input type="checkbox" checked={user.autoSave} onChange={() => handleToggle("autoSave")} />
              <span className="slider round"></span>
            </label>
          </div>

          <button className="settings-save-btn" onClick={saveSettings}>
            Save Settings
          </button>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
