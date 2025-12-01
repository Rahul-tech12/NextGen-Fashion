import React, { useState, useEffect } from "react";
import "./Auth.css";
import { auth, googleProvider } from "C:/Users/Admin/Desktop/Rahul/NextGen-Fashion/NextGen-Fashion/frontend/src/firebaseConfig.js";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { FaGoogle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const [userData, setUserData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  // Input handler
  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  // Real-time validation
  useEffect(() => {
    const newErrors = {};

    if (!userData.email.trim()) newErrors.email = "Email is required";

    if (!userData.password.trim()) {
      newErrors.password = "Password is required";
    } else if (userData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);
    setIsValid(Object.keys(newErrors).length === 0);
  }, [userData]);

  // Manual register
  const handleRegister = async (e) => {
    e.preventDefault();

    if (!isValid) return;

     e.preventDefault();

  try {
    await createUserWithEmailAndPassword(auth, userData.email, userData.password);
    navigate("/login");
  } catch (error) {
    let msg = "";

    switch (error.code) {
      case "auth/email-already-in-use":
        msg = "This email is already registered.";
        break;

      case "auth/invalid-email":
        msg = "Please enter a valid email address.";
        break;

      case "auth/weak-password":
        msg = "Password must be at least 6 characters.";
        break;

      default:
        msg = "Registration failed. Try again.";
    }

    setErrors({ general: msg });
  }
  };

  // Google Register
  const handleGoogleRegister = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      navigate("/login");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-box">
        <h2>Create Account</h2>

        <form onSubmit={handleRegister}>

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
    Register
  </button>
</form>

<div className="or">OR</div>

<button className="google-btn" onClick={handleGoogleRegister}>
  <FaGoogle /> Continue with Google
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

export default Register;
