const express = require('express');
const port = process.env.PORT || 4000;

let app = express();

app.use(express.static('public'))

app.get('/',(req, res)=>{
    res.sendFile(__dirname + '/views/index.html');
})

app.get('/about',(req, res)=>{
    res.sendFile(__dirname + '/views/about.html');
})

app.get('/projects', (req,res)=>{
    res.sendFile(__dirname + '/views/projects.html')
})

app.get('/contact', (req,res)=>{
    res.sendFile(__dirname + '/views/contact.html')
})

app.get('/project/:id',(req,res)=>{
    res.sendFile(__dirname + '/views/singleproject.html')
})

app.listen(port,()=>{
    console.log('started at port 4000')
})