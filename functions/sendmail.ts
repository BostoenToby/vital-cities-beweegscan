import { atob, Blob } from "buffer";
import request from 'request';
import { Personlization } from "../src/interfaces/sendgrid";

const sgMail = require('@sendgrid/mail')

exports.handler = async (event: any, context: any, callback: any) => {

    const { pdf, pdfUrl, mail, city, message } = JSON.parse(event.body)

    function b64toBlob(b64Data: string, contentType: any, sliceSize: any) {
        contentType = contentType || '';
        sliceSize = sliceSize || 512;

        var byteCharacters = atob(b64Data);
        var byteArrays = [];

        for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
            var slice = byteCharacters.slice(offset, offset + sliceSize);

            var byteNumbers = new Array(slice.length);
            for (var i = 0; i < slice.length; i++) {
                byteNumbers[i] = slice.charCodeAt(i);
            }

            var byteArray = new Uint8Array(byteNumbers);

            byteArrays.push(byteArray);
        }

        var blob = new Blob(byteArrays, { type: contentType });
        return blob;
    }

    sgMail.setApiKey(process.env.SENDGRID_API_KEY)

    const mail_to_send = {
        from: "toby.bostoen@student.howest.be",
        to: "toby.bostoen@student.howest.be",
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