const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const bodyParser = require("body-parser");
const User = require("../model/user.js");

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

//signup
router.post("/api/user/signup", function(req, res) {
  var saltRounds = 0;
  console.log(req.body);
  bcrypt.hash(req.body.password, saltRounds, function(err, hash) {
    if (err) {
      return res.status(500).json({ error: err });
    } else {
      const new_user = new User({
        FirstName: "John",
        LastName: "West",
        Email: req.body.email,
        Password: hash,
        Role: "developer"
      });

      new_user
        .save()
        .then(function(result) {
          console.log(result);
          res.status(200).json({ success: "New user has been created" });
        })
        .catch(error => {
          console.log("Catch Signup Error");
          res.status(500).json({ error: err });
        });
    }
  });
});

//check if the user’s email exists or not.
//If not then return 401 unauthorized access.
//If email is there then check the password with bcrypted database password
//if match found then welcome to the JWT auth else 401 unauthorized access.
router.post("/api/user/signin", function(req, res) {
  User.findOne({ Email: req.body.email })
    .then(function(user) {
      bcrypt.compare(req.body.password, user.Password, function(err, result) {
        if (err) {
          return res.status(401).json({ failed: "Unauthorized Access" });
        }
        if (result) {
          console.log(result);
          return res.status(200).json({ success: "Welcome!" });
        }
      });
    })
    .catch(error => {
      console.log("Catch Signin Error");
      res.status(500).json({ error: error });
    });
});

//Save
router.post("/api/user", function(req, res, next) {
  User.create(req.body, function(err, user) {
    if (err) return next(err);
    res.json(user);
  });
});

//Get all
router.get("/api/user", function(req, res, next) {
  User.find(function(err, user) {
    if (err) return next(err);
    res.json(user);
  });
});

//Get by id
router.get("/api/user/:id", function(req, res, next) {
  User.findById(req.params.id, function(err, user) {
    if (err) return next(err);
    res.json(user);
  });
});

//Update by id
router.put("/api/user/:id", function(req, res, next) {
  User.findByIdAndUpdate(req.params.id, req.body, function(err, user) {
    if (err) return next(err);
    res.json(user);
  });
});

//Delete by id
router.delete("/api/user/:id", function(req, res, next) {
  User.findByIdAndDelete(req.params.id, req.body, function(err, user) {
    if (err) return next(err);
    res.json(user);
  });
});

module.exports = router;
