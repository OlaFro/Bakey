var express = require("express");
var router = express.Router();
const User = require("../models/UserModel");

router.get("/", (req, res, next) => {
    const city = req.city;
    User.find({city: city, userType: "cafe"}).then(result => {
        res.send(result)
    }).catch((err)=>{res.send(err)})
});

module.exports = router;
