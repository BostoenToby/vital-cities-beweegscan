import { Personlization } from "../src/interfaces/sendgrid";

const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

exports.handler = async (event: any, context: any, callback: any) => {

    const mail_to_send = {
        from: "toby.bostoen@student.howest.be",
        subject: 'This is a new test with json in the post',
        text: `This is a text message, Open this link for the pdf --> ${localStorage["pdf"]}`,
        html: "This is a html message",
    }
    // TODO: fix json error at personalizations --> bad request so probably it's a json error

    try{
        await sgMail.send(mail_to_send).then(() => console.log("Email sent!!!"))

        return{
            statusCode: 200,
            body: "Message sent successfully"
        }
    } catch(e: any){
        return{
            statusCode: e.code,
            body: e.message
        }
    }
}