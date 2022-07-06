const express = require('express')
const path =  require('path')
const app = express()

app.use(express.static('./public'))

const PORT = process.env.PORT || 8080;

app.get('/',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./index/index.html'))
})

app.get('/home',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./index/index.html'))
})

app.get('/education',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./Education_page/education.html'))
})

app.listen(PORT,()=>{
    console.log("Server Up and runnig");
})

module.exports = app;