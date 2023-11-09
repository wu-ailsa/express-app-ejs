const express = require("express");
const app = express();

app.set('view engine','ejs');
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}));
app.use(express.json())

app.get('/', (req,res) =>{
    //res.download('img/anderson-rangel-sky.jpg')
    res.render("index",{text: "Sample text response: World"})
});

const userRouter = require('./routes/users')
// const postRouter = require('./routes/posts')

app.use('/users',userRouter)
// app.use('/posts',postRouter)



app.listen(3000);