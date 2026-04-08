import React, { useState } from "react";
import "./App.css";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(
        "https://netflix-login-500p.onrender.com/api/login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
        }
      );

      const data = await res.json();
      if (data.success) setMessage("Login Successful 🎉");
      else setMessage(data.message || "Login Failed ❌");
    } catch (error) {
      setMessage("Server Error 🚨");
      console.error(error);
    }
  };

  return (
    <div className="container">
      <h2>Netflix Login Demo</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
      {message && <div className="message">{message}</div>}

      <div className="demo-credentials">
        <p>
          Demo Credentials: <br />
          Email: <b>test@gmail.com</b> <br />
          Password: <b>123456</b>
        </p>
      </div>
    </div>
  );
}

export default App;
