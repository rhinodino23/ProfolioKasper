const express = require('express');
const router = express.Router();
const contacts = require('./models/contact')

router.get('/', (reg, res) =>{
    res.render('index')
})
router.get('/Contact', (reg, res) =>{
    res.render('contact')
})
router.get('/Experience', (reg, res) =>{
    res.render('experience')
})
router.get('/Education', (reg, res) =>{
    res.render('education')
})
router.get('/Programming_Languges', (reg, res) =>{
    console.log("I am running")
    res.render('Programming_Languges')
})

router.post('/submitContact', (req,res) =>{
    const contact = new contacts({
        fname: req.body.fname,
        lname:req.body.lname,
        phoneNum:req.body.email,
        email:req.body.email,
        commentSection: req.body.commentSection
    });

    contacts.collection.insertOne(contact)
    .then(result => {
        res.render('contact')
    })
    .catch(err => console.log(err));
})

module.exports=router;