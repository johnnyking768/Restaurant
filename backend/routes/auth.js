const express = require("express");
const { createAdminToken, requireAdmin } = require("../middleware/auth");

const router = express.Router();

router.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (
    username !== process.env.ADMIN_USERNAME
    || password !== process.env.ADMIN_PASSWORD
  ) {
    return res.status(401).json({ message: "Invalid admin credentials" });
  }

  res.json({
    token: createAdminToken(username),
    admin: { username }
  });
});

router.get("/me", requireAdmin, (req, res) => {
  res.json({ admin: { username: req.admin.username } });
});

module.exports = router;
