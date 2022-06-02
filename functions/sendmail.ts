import { builder, Handler } from '@netlify/functions'

const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const myHandler: Handler = async (event, context) => {
    console.log("This is a test for the function")
  const data = JSON.parse(String(event.body))
  const { email, subject } = data
  const body = Object.keys(data).map((k) => {
    return `${k}: ${data[k]}`
  }).join("<br><br>");
  const mail_to_send = {
    to: email,
    from: "toby.bostoen@student.howest.be",
    subject: subject ? subject : 'New Entry from Contact Form',
    html: body,
  };
  try{
    await sgMail.send(mail_to_send)
    return {
      statusCode: 200,
      body: "Message sent successfully"
    }
  } catch(e: any){
    return {
      statusCode: e.code,
      body: e.message
    }
  }
};

const handler = builder(myHandler)

export { handler }