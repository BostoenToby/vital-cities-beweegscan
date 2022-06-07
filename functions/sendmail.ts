import { atob, Blob } from "buffer";
import request from 'request';
import { Personlization } from "../src/interfaces/sendgrid";

const sgMail = require('@sendgrid/mail')

exports.handler = async (event: any, context: any, callback: any) => {

    const { pdf, mail, city } = JSON.parse(event.body)

    sgMail.setApiKey(process.env.SENDGRID_API_KEY)

    const mail_to_send = {
        from: "toby.bostoen@student.howest.be",
        to: mail,
        cc: "robbe.saelens@student.howest.be",
        subject: 'Rapport over de beweegvriendelijkheid van jouw stad of gemeente',
        templateId: 'd-576874eea4064991ba604911edead40f',
        dynamicTemplateData: {
            city: city
        },
        attachments: [{
            filename: 'Beweegscan.pdf',
            content: pdf,
            type: 'application/pdf',
            disposition: 'attachment'
        }]
    }

    try{
        await sgMail.send(mail_to_send).then(() => console.log("Email sent!!!"))

        return{
            statusCode: 200,
            body: JSON.stringify("Message sent successfully")
        }
    } catch(e: any){
        return{
            statusCode: e.code,
            body: JSON.stringify(e.message)
        }
    }
}