import React from "react";

const Step3 = ({ formData, prevStep, handleSubmit }) => {
  return (
    <div className="form-step">
      <h2>Step 3: Review & Submit</h2>

      <p><strong>Name:</strong> {formData.name}</p>
      <p><strong>Email:</strong> {formData.email}</p>
      <p><strong>Address:</strong> {formData.address1}, {formData.address2}</p>
      <p><strong>City:</strong> {formData.city}</p>
      <p><strong>Postal Code:</strong> {formData.zip}</p>

      <div style={{ marginTop: "10px" }}>
        <button onClick={prevStep}>Back</button>
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default Step3;
