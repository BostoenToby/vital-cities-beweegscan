const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
exports.handler =  async ({event, context, callback}: {event: any, context: any, callback: any}) => {
  const data = JSON.parse(event.body)
  const { email, subject } = data
  const body = Object.keys(data).map((k) => {
    return `${k}: ${data[k]}`
  }).join("<br><br>");
  const mail_to_send = {
    to: "me@rajrajhans.com",
    from: email,
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