const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Mock credentials
const mockUser = { email: "test@gmail.com", password: "123456" };

app.post("/api/login", (req, res) => {
  const { email, password } = req.body;
  if (email === mockUser.email && password === mockUser.password) {
    return res.json({ success: true });
  } else {
    return res.json({ success: false, message: "Invalid credentials" });
  }
});

app.listen(5000, () => console.log("Backend running on http://localhost:5000"));