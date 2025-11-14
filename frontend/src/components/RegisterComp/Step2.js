import React from "react";

const Step2 = ({ formData, setFormData, nextStep, prevStep }) => {
  return (
    <div className="form-step">
      <h2>Step 2: Shipping Address</h2>
      <input
        type="text"
        placeholder="Address Line 1"
        value={formData.address1}
        onChange={(e) => setFormData({ ...formData, address1: e.target.value })}
      />
      <input
        type="text"
        placeholder="Address Line 2"
        value={formData.address2}
        onChange={(e) => setFormData({ ...formData, address2: e.target.value })}
      />
      <input
        type="text"
        placeholder="City"
        value={formData.city}
        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
      />
      <input
        type="text"
        placeholder="Postal Code"
        value={formData.zip}
        onChange={(e) => setFormData({ ...formData, zip: e.target.value })}
      />

      <div style={{ marginTop: "10px" }}>
        <button onClick={prevStep}>Back</button>
        <button onClick={nextStep}>Next</button>
      </div>
    </div>
  );
};

export default Step2;
