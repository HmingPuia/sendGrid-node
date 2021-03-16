const path=require('path');
const express= require('express');
const app= express();
const sendEmail=require('./utils/sendEmail')
app.use(express.urlencoded({extended:false}));
app.use('/public', express.static(path.join(__dirname,'public')));
app.set('view engine','ejs')
app.get('/',(req,res)=>{
    res.render('contact');
})

app.get('/sent',(req,res)=>{
    res.render('sent')
})

app.post('/sendemail',(req,res)=>{
    const{name, surname, email}=req.body;
    const from ="sawmasn7@gmail.com";
    const to="puiavulmawi@gmail.com";
    const subject="New contact request"

    const output= `
    <p>You have a new contact request</p>
    <h1>Contact detail</h1>
    <ul>
    <li>Name: ${name}</li>
    <li>Surname: ${surname}</li>
    <li>Email: ${email}</li>
    </ul>
    `;
    sendEmail(to, from, subject, output);
    res.redirect('/sent')

})

const PORT= process.env.PORT || 5000;
app.listen(PORT,()=>console.log(`Server running on port ${PORT}`))
