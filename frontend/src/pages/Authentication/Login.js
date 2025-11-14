import React, { useState } from "react";
import { auth, googleProvider } from "../firebaseConfig";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import "./Auth.css";
import { FaGoogle } from "react-icons/fa";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });

  // Manual input
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Manual Login
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, form.email, form.password);
      alert("Login Successful!");
    } catch (err) {
      alert(err.message);
    }
  };

  // Google Login
  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      alert("Google Login Successful!");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-box">

        <h2>Login to Your Account</h2>

        <form onSubmit={handleLogin}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            onChange={handleChange}
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            onChange={handleChange}
          />

          <button type="submit" className="auth-btn">Login</button>
        </form>

        <div className="or">OR</div>

        <button className="google-btn" onClick={handleGoogleLogin}>
          <FaGoogle /> Sign In with Google
        </button>

      </div>
    </div>
  );
};

export default Login;
