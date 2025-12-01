import React, { useEffect, useState } from "react";
import "./Profile.css";
import Sidebar from "../../components/Sidebar";

const Profile = () => {
  const [user, setUser] = useState({
    photo: "/profile.jpg",
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    country: "",
    postal: "",
  });

  // Load from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("userProfile");
    const google = localStorage.getItem("user");

    if (saved) setUser(JSON.parse(saved));
    else if (google) {
      const googData = JSON.parse(google);
      setUser((u) => ({
        ...u,
        name: googData.name,
        email: googData.email,
        photo: googData.photo,
      }));
    }
  }, []);

  // Save To LocalStorage
  const handleSave = () => {

  // Save to localStorage
  localStorage.setItem("userProfile", JSON.stringify(user));

  // 🔥 Dispatch event so sidebar updates
  window.dispatchEvent(new Event("profileUpdated"));

  alert("Profile updated successfully!");
};

  // Handle Inputs
  const updateField = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  // Handle Photo Upload
  const uploadPhoto = (e) => {
    const file = e.target.files[0];
    const imgURL = URL.createObjectURL(file);
    setUser({ ...user, photo: imgURL });
  };

  return (
    <div className="profile-layout">
      <Sidebar />

      <div className="profile-container">
        <h1>My Profile</h1>

        <div className="profile-card">
          
          {/* Avatar Section */}
          <div className="avatar-section">
            <img src={user.photo} className="profile-big-avatar" alt="user"/>

            <label className="upload-btn">
              Upload Photo
              <input type="file" onChange={uploadPhoto} accept="image/*" />
            </label>
          </div>

          {/* Form Section */}
          <div className="form-section">

            <div className="form-group">
              <label>Full Name</label>
              <input name="name" value={user.name} onChange={updateField} />
            </div>

            <div className="form-group">
              <label>Phone Number</label>
              <input name="phone" value={user.phone} onChange={updateField} />
            </div>

            <div className="form-group">
              <label>Shipping Address</label>
              <input name="address" value={user.address} onChange={updateField} />
            </div>

            <div className="form-group">
              <label>City</label>
              <input name="city" value={user.city} onChange={updateField} />
            </div>

            <div className="form-group">
              <label>State</label>
              <input name="state" value={user.state} onChange={updateField} />
            </div>

            <div className="form-group">
              <label>Country</label>
              <input name="country" value={user.country} onChange={updateField} />
            </div>

            <div className="form-group">
              <label>Postal Code</label>
              <input name="postal" value={user.postal} onChange={updateField} />
            </div>

            <button className="save-btn" onClick={handleSave}>Save Profile</button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Profile;
