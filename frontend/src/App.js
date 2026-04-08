import React, { useState } from "react";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // ✅ Use your Render backend URL
      const res = await fetch(
        "https://netflix-login-500p.onrender.com/api/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );

      const data = await res.json();

      if (data.success) {
        setMessage("Login Successful 🎉");
      } else {
        setMessage(data.message || "Login Failed ❌");
      }
    } catch (error) {
      setMessage("Server Error 🚨");
      console.error(error);
    }
  };

  return (
    <div
      style={{
        maxWidth: "400px",
        margin: "50px auto",
        textAlign: "center",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h2>Netflix Login Demo</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            display: "block",
            width: "100%",
            margin: "10px 0",
            padding: "10px",
            fontSize: "16px",
          }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            display: "block",
            width: "100%",
            margin: "10px 0",
            padding: "10px",
            fontSize: "16px",
          }}
        />
        <button
          type="submit"
          style={{
            padding: "10px 20px",
            marginTop: "10px",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          Login
        </button>
      </form>
      {message && <p style={{ marginTop: "20px" }}>{message}</p>}

      <div style={{ marginTop: "30px", fontSize: "14px", color: "#555" }}>
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
