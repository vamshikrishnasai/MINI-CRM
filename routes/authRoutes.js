const express = require("express");
const router = express.router();
const { registration, login } = require("../controllers/authController");

router.post("/register", registration);
router.post("/login", login);

module.exports = router;
