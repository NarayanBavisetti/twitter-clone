const express = require("express");
const User = require("../models/user");
const router = express.Router();
const passport = require("passport");

//to get the signup form
router.get("/register", (req, res) => {
  res.render("auth/signup");
});

//to register the user
router.post("/register", async (req, res) => {
  const user = {
    firstName: req.body.firstname,
    lastName: req.body.lastname,
    email: req.body.email,
    username: req.body.username,
  };
  const newUser = await User.register(user, req.body.password);
  res.status(200).send(newUser);

  // console.log(req.body)
  // res.send("Success");
});

//login
router.get("/login", (req, res) => {
  res.render("auth/login");
});

router.post(
  "/login",
  passport.authenticate("local", {
    failureRedirect: "/login",
  }),(req, res) => {
    res.render("home");
  }
  
);

router.get("/logout",((req,res) => {
    req.logout();
    res.render("auth/login")
}))

module.exports = router;
