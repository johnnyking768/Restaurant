require("dotenv").config();

const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const authRouter = require("./routes/auth");
const ordersRouter = require("./routes/orders");

const app = express();
const port = process.env.PORT || 4000;

app.use(cors({
  origin: true
}));
app.use(express.json({ limit: "1mb" }));

app.get("/api/health", (req, res) => {
  res.json({
    ok: true,
    database: mongoose.connection.readyState === 1 ? "connected" : "connecting"
  });
});

app.use("/api/auth", authRouter);
app.use("/api/orders", ordersRouter);

app.use((error, req, res, next) => {
  console.error(error);
  res.status(error.status || 500).json({
    message: error.message || "Server error"
  });
});

async function start() {
  if (!process.env.MONGODB_URI) {
    throw new Error("MONGODB_URI is missing in backend/.env");
  }

  await mongoose.connect(process.env.MONGODB_URI);
  console.log("MongoDB connected");
  app.listen(port, () => {
    console.log(`Dupz API running on http://localhost:${port}`);
  });
}

start().catch((error) => {
  console.error(error);
  process.exit(1);
});
