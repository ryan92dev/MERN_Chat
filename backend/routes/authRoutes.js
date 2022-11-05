const express = require("express");
const authControllers = require("../controllers/auth/authControllers");
const {
  registerValidator,
  loginValidator,
  validate,
} = require("../middleware/validators");

//Auth Middleware
const authMiddleware = require("../middleware/authMiddleware");

// Router
const router = express.Router();

// Routes
router.post("/register", registerValidator, validate, authControllers.register);
router.post("/login", loginValidator, validate, authControllers.login);
router.post("/logout", authControllers.logout);
router.post("/logout-all", authControllers.logoutAll);

router.get("/refresh-token", authControllers.refreshToken);

// Protected route
router.get("/protected", authMiddleware, (req, res) => {
  res.json({ msg: "You are authorized to see this" });
});

module.exports = router;
