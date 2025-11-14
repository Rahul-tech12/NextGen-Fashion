import React, { useState } from "react";
import "./DesignWithAI.css";
import { FaHome, FaMagic, FaShoppingCart, FaCog } from "react-icons/fa";
import Sidebar from "../../components/Sidebar";

const DesignWithAI = () => {
  const [prompt, setPrompt] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Prompt submitted:\n" + prompt);
  };

  return (
    <div className="prompt-layout">

      {/* Sidebar */}
      <Sidebar />

      {/* Main Panel */}
      <main className="prompt-container">
        <h1>Prompt Generator</h1>
        <p className="description">
          Enter your text prompt below and generate AI-powered outputs.
        </p>

        <form className="prompt-form" onSubmit={handleSubmit}>
          <textarea
            placeholder="Write your prompt here..."
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            required
          />

          <button type="submit" className="generate-btn">Generate</button>
        </form>

        <div className="output-box">
          <h3>Generated Output</h3>
          <p className="placeholder-text">Your AI results will appear here...</p>
        </div>
      </main>

    </div>
  );
};

export default DesignWithAI;
