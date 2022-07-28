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
router.get('/Programming_Languages', (reg, res) =>{
    res.render('programming_languages')
})

router.post('/submitContact', (req,res) =>{
    const contact = new contacts({
        fname: res.body.fname,
        lname:res.body.lname,
        email:res.body.email,
        commentSection: res.body.commentSection
    });

    contacts.collection.insertOne(contact)
    .then(result => {
        res.render('contact')
    })
    .catch(err => console.log(err));
})

module.exports=router;