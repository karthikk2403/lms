"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import "boxicons/css/boxicons.min.css"; // Include boxicons
import "./style.css"; // Add your CSS file here

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Replace with actual authentication logic
    if (username === "admin" && password === "admin") {
      router.push("/admin");
    } else {
      alert("Invalid login credentials!");
    }
  };

  return (
    <div className="container">
      <div className="Form login-form">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <div className="input-box">
            <i className="bx bxs-user"></i>
            <label>Username</label>
            <input
              type="text"
              placeholder="Enter Your Username*"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="input-box">
            <i className="bx bxs-lock"></i>
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter Your Password*"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="forgot-section">
            <span>
              <input type="checkbox" /> Remember Me
            </span>
            <span>
              <a href="#">Forgot Password?</a>
            </span>
          </div>
          <button className="btn" type="submit">
            Login
          </button>
        </form>
        <p>Or Sign up using</p>
        <div className="social-media">
          <i className="bx bxl-facebook"></i>
          <i className="bx bxl-google"></i>
          <i className="bx bxl-twitter"></i>
        </div>
        <p className="RegisteBtn RegiBtn">
          <a href="#">Register Now</a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
