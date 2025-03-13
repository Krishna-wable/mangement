import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { login } from "../services/api";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const { setUser } = useContext(AuthContext) || {};
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = await login({ email, password });
    if (userData) {
      localStorage.setItem("user", JSON.stringify(userData));
      setUser(userData);
      navigate("/dashboard");
    }
  };

  return (
    <div className="login-container">
      <h2 className="login-title">Login</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="login-input"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="login-input"
        />
        <button className="login-button">Login</button>
      </form>
    </div>
  );
};

export default Login;