import React from "react";

const Step1 = ({ formData, setFormData, nextStep }) => {
  return (
    <div className="form-step">
      <h2>Step 1: Basic Info</h2>
      <input
        type="text"
        placeholder="Full Name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      />
      <input
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />
      <input
        type="password"
        placeholder="Password"
        value={formData.password}
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
      />
      <button onClick={nextStep}>Next</button>
    </div>
  );
};

export default Step1;
