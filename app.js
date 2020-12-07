const express = require('express');
const port = process.env.PORT || 4000;
const sgMail = require('@sendgrid/mail');
var bodyParser = require('body-parser')
require('dotenv').config() 

let app = express();



app.use(express.static('public'))  
app.use(bodyParser.urlencoded({ extended: true }))
// parse application/json
app.use(bodyParser.json())  

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
 
app.post('/contact', (req,res)=>{ 

    
    // console.log(req.body); 
    // const sgMail = require('@sendgrid/mail');
    // // sgMail.setApiKey('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');
    // sgMail.setApiKey(process.env.SENDGRID_API_KEY) 
    // console.log(process.env.SENDGRID_API_KEY)
    // const msg = {
    // to: 'eswong610@gmail.com',
    // from: 'ewong96@live.ca',
    // subject: 'Sending with Twilio SendGrid is Fun',
    // text: 'and easy to do anywhere, even with Node.js',
    // html: '<strong>and easy to do anywhere, even with Node.js</strong>',
    // }; 
    // //ES6
    // sgMail
    // .send(msg)
    // .then(() => {
    //     res.send('sent email') 
    // })
    // .catch((err)=>{
    //     console.log(err)
    //     res.send('error') 
    // })

   
   
})
 
app.get('/project/:id',(req,res)=>{
    res.sendFile(__dirname + '/views/singleproject.html') 
})

app.listen(port,()=>{
    console.log('started at port 4000')
})