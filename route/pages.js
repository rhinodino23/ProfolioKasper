const express = require("express");
const router = express.Router();
const contacts = require("./models/contact");

router.get("/", (req, res) => {
  res.render("index");
});
router.get("/Contact", (req, res) => {
  res.render("contact");
});
router.get("/Experience", (req, res) => {
  res.render("experience");
});
router.get("/Education", (req, res) => {
  res.render("education");
});
router.get("/Programming_Languges", (req, res) => {
  //console.log("I am running");
  res.render("Programming_Languges");
});

router.post("/submitContact", (req, res) => {
  const contact = new contacts({
    fname: req.body.fname,
    lname: req.body.lname,
    phoneNum: req.body.email,
    email: req.body.email,
    commentSection: req.body.commentSection,
  });

  contacts.collection
    .insertOne(contact)
    .then((result) => {
      res.render("contact");
    })
    .catch((err) => console.log(err));
});

module.exports = router;
