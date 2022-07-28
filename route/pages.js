const express = require('express');
const router = express.Router();

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

module.exports=router;