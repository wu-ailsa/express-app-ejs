const express = require("express");
const app = express();

app.set('view engine','ejs');
app.use(logger)

app.get('/',(req,res) =>{
    //res.download('img/anderson-rangel-sky.jpg')
    res.render("index",{text: "Sample text response: World"})
});

const userRouter = require('./routes/users')
// const postRouter = require('./routes/posts')

app.use('/users',userRouter)
// app.use('/posts',postRouter)

function logger(req, res, next){
    console.log(req.originalUrl)
    next()
}

app.listen(3000);