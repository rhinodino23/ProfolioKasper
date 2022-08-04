const express = require("express");
const router = express.Router();
const contacts = require("./models/contact");

router.get("/", (req, res) => {
  res.render("index");
});
router.get("/contact", (req, res) => {
  res.render("contact");
});
router.get("/experience", (req, res) => {
  res.render("experience");
});
router.get("/education", (req, res) => {
  res.render("education");
});
router.get("/programminglanguages", (req, res) => {
  res.render("programminglanguages");
});

router.post("/submitContact", (req, res) => {
  const contact = new contacts({
    fname: req.body.fname,
    lname: req.body.lname,
    phoneNum: req.body.phoneNum,
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
