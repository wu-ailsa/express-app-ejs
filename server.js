const express = require("express");
const app = express();

app.set('view engine','ejs');

app.get('/',(req,res) =>{
    console.log("Here");
    // res.download('img/anderson-rangel-sky.jpg')
    res.render('index')
});

app.listen(3000);