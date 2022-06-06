import { Personlization } from "../src/interfaces/sendgrid";

const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

exports.handler = async (event: any, context: any, callback: any) => {
    console.log("Testing if this works")
    const body = JSON.parse(event.body)
    const message = body.message
    // const attachement = 
    // let personilizations: Personlization[] = [{
    //     to: {
    //         email: ""
    //     },
    //     cc: {
    //         email: ""
    //     }
    // }]
    // personilizations[0].cc.email = "toby.bostoen@student.howest.be"
    // personilizations[0].to.email = "toby.bostoen@student.howest.be"

    const mail_to_send = {
        cc: "toby.bostoen@student.howest.be",
        from: "toby.bostoen@student.howest.be",
        subject: 'This is a new test with json in the post',
        text: message,
        html: message
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