const { urlencoded } = require("body-parser");
const bodyParser = require("body-parser");
const express = require("express");
const mongoose = require("mongoose");
const route = require('./route/pages')
const app = express();

app.set('view-engine', 'ejs')
app.use(bodyParser.urlencoded({extended: true}));

app.use('/', route);

mongoose.connect("",{userNewURLParser: true, useUnifiedTopology: true})
.then(()=>{
    app.listen(3000,() => {
        console.log("Server is running.")
    })
})