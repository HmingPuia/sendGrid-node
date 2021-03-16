require('dotenv').config();
const sgMail=require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY)
const sendEmail=(to, from, subject, text)=>{
    const msg={
        to,
        from,
        subject,
        html:text,
    }
    sgMail.send(msg, function(err, result){
        if(err){
            console.log('Email doest not send');
        }else{
            console.log('Emil send success');
        }
    })
}
module.exports= sendEmail