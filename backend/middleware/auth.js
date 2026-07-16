const crypto = require("crypto");

const TOKEN_TTL_MS = 1000 * 60 * 60 * 12;

function getSecret() {
  return process.env.ADMIN_TOKEN_SECRET || "local-dev-admin-secret";
}

function signPayload(payload) {
  return crypto
    .createHmac("sha256", getSecret())
    .update(payload)
    .digest("base64url");
}

function createAdminToken(username) {
  const payload = Buffer.from(JSON.stringify({
    username,
    exp: Date.now() + TOKEN_TTL_MS
  })).toString("base64url");
  const signature = signPayload(payload);
  return `${payload}.${signature}`;
}

function verifyAdminToken(token) {
  if (!token || !token.includes(".")) {
    return null;
  }

  const [payload, signature] = token.split(".");
  if (signature !== signPayload(payload)) {
    return null;
  }

  try {
    const data = JSON.parse(Buffer.from(payload, "base64url").toString("utf8"));
    if (!data.exp || data.exp < Date.now()) {
      return null;
    }
    return data;
  } catch (error) {
    return null;
  }
}

function requireAdmin(req, res, next) {
  const token = req.headers.authorization?.replace(/^Bearer\s+/i, "");
  const admin = verifyAdminToken(token);

  if (!admin) {
    return res.status(401).json({ message: "Admin login required" });
  }

  req.admin = admin;
  next();
}

module.exports = {
  createAdminToken,
  requireAdmin,
  verifyAdminToken
};
