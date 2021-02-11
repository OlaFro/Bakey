var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.post("/register", (req, res, next) => {
  res.send("registration");
});

router.post("/login", (req, res, next) => {
  res.send("login");
});

router.get("/logout", (req, res, next) => {
  res.send("logout");
});

router.put("/update", (req, res, next) => {
  res.send("settings");
});

module.exports = router;
