const express = require('express');
const router = express.Router();

router.get('/', (reg, res) =>{
    res.render('index')
})
router.get('/contact', (reg, res) =>{
    res.render('contact')
})
router.get('/experience', (reg, res) =>{
    res.render('experience')
})
router.get('/education', (reg, res) =>{
    res.render('education')
})
router.get('/programming_languages', (reg, res) =>{
    res.render('programming_languages')
})

module.exports=router;