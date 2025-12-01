import React, { useState, useEffect } from "react";
import "./Auth.css";
import { auth, googleProvider } from "C:/Users/Admin/Desktop/Rahul/NextGen-Fashion/NextGen-Fashion/frontend/src/firebaseConfig.js";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { FaGoogle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  // UI VALIDATION
  useEffect(() => {
    const newErrors = {};

    if (!loginData.email.trim()) {
      newErrors.email = "Email is required";
    }

    if (!loginData.password.trim()) {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);
    setIsValid(Object.keys(newErrors).length === 0); // No errors → form is valid
  }, [loginData]);

  // Manual Login
  const handleLogin = async (e) => {
    e.preventDefault();
e.preventDefault();

  try {
    await signInWithEmailAndPassword(auth, loginData.email, loginData.password);
    navigate("/design");
  } catch (error) {
    let msg = "";

    switch (error.code) {
      case "auth/user-not-found":
        msg = "This email is not registered.";
        break;

      case "auth/wrong-password":
        msg = "Incorrect password. Try again.";
        break;

      case "auth/invalid-email":
        msg = "Please enter a valid email.";
        break;

      case "auth/too-many-requests":
        msg = "Too many attempts! Try again later.";
        break;

      default:
        msg = "Login failed. Please try again.";
    }

    setErrors({ general: msg });
  }
  };

  // Google Login
  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      navigate("/design");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-box">
        <h2>Login</h2>

        <form onSubmit={handleLogin}>

  <div className="input-group">
  <input
    type="email"
    name="email"
    placeholder=" "
    className={errors.email ? "input-error" : ""}
    onChange={handleChange}
  />
  <label>Email</label>
</div>
{errors.email && <p className="error-text">{errors.email}</p>}


  <div className="input-group">
  <input
    type="password"
    name="password"
    placeholder=" "
    className={errors.password ? "input-error" : ""}
    onChange={handleChange}
  />
  <label>Password</label>
</div>
{errors.password && <p className="error-text">{errors.password}</p>}

  <button className="auth-btn" disabled={!isValid}>
    Login
  </button>
</form>

<div className="or">OR</div>

<button className="google-btn" onClick={handleGoogleLogin}>
  <FaGoogle /> Sign in with Google
</button>
        {errors.general && (
  <p className="error-text" style={{ marginTop: "10px" }}>
    {errors.general}
  </p>
)}

      </div>
    </div>
  );
};

export default Login;
