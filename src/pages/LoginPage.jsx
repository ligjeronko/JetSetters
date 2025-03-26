import React, { useState } from "react";
import axios from "axios";
import "./LoginPage.css";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await axios.get("http://localhost:3001/users");
      const user = response.data.find(
        (user) => user.email === email && user.password === password
      );

      if (user) {
        alert("You are logged in");
      } else {
        setError("Login failed: Invalid email or password");
      }
    } catch (error) {
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <div className="login-page">
      <div className="container">
        <h2>Login</h2>
        {error && <p className="error-message">{error}</p>}
        <form className="form" onSubmit={handleLogin}>
          <div className="inputBox">
            <input
              type="email"
              placeholder="E-mail Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="inputBox">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Login</button>
        </form>
        {/* Added paragraphs for forgot password and sign up */}
        <p className="forget">
          Forgot password? <a href="#">Click here</a>
        </p>
        <p className="forget">
          Don't have an account? <a href="#">Sign up</a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
