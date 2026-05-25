const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// ✅ API ROUTE
app.get("/api/user", (req, res) => {
  res.json({
    success: true,
    message: "User route working",
    data: {
      name: "Tharun",
      role: "Developer"
    }
  });
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});