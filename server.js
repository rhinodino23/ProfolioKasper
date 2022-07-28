//const { urlencoded } = require("body-parser");
require("dotenv").config()
const bodyParser = require("body-parser");
const express = require("express");
const mongoose = require("mongoose");
const route = require('./route/pages')
const path = require('path')
const app = express();

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname,'Windows')))
app.use('/', route);

mongoose.connect(process.env.MOONGOO,{useNewURLParser: true, useUnifiedTopology: true})
.then(()=>{
    app.listen(3000,() => {
        console.log("Server is running.")
    })
})