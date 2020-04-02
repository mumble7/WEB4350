var express = require("express");
var router = express.Router();
var passport = require("passport");
var User = require("../models/user");

//root route
router.get("/", function (req, res) {
    // res.render("home");
    res.render('index', {
        page: 'index'
    })
});

// show register form
router.get("/register", function (req, res) {
    res.render("register", {
        page: 'register'
    });
});
// handle register login

//show login form
router.get("/login", function (req, res) {
    res.render("login", {
        page: 'login'
    });
});
//handle login logic

// logout route
router.get("/logout", function (req, res) {
    req.logout();

});


module.exports = router;