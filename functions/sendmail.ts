import { atob, Blob } from "buffer";
import { Personlization } from "../src/interfaces/sendgrid";

const sgMail = require('@sendgrid/mail')

exports.handler = async (event: any, context: any, callback: any) => {

    const { pdf, mail, city, message } = JSON.parse(event.body)

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

    const pdfBlob = b64toBlob(pdf, "application/pdf", 512)

    sgMail.setApiKey(process.env.SENDGRID_API_KEY)

    const mail_to_send = {
        from: "toby.bostoen@student.howest.be",
        to: "toby.bostoen@student.howest.be",
        cc: "robbe.saelens@student.howest.be",
        subject: 'Rapport over de beweegvriendelijkheid van jouw stad of gemeente',
        text: `Beste, \n\n
        Bedankt voor jouw interesse in het rapport over de beweegvriendelijkheid van {Kortrijk} dat de Beweegscan van Vital Cities voor jou heeft gegenereerd. 
        \n
        In het rapport dat je in de bijlage vindt, lees je voor elk van de ambities die je op het vlak van de beweegvriendelijkheid kan nastreven, het oordeel van de bewonders van {kortrijk} (zoals gemeten in de Gemeente- en Stadsmonitor). 
        \n
        Dat oordeel zetten we af tegen het Vlaamse gemiddelde, zodat je in een oogopslag ziet waar jouw stad of gemeente terecht trots op kan zijn (want betere scoort dan het Vlaamse gemiddelde), dan wel wat nog beter kan (want minder goed scoort). 
        \n
        We hopen dat deze inzichten - plus de vele onderzoeksrapporten, tools en cases die we aanreiken in de Beweegscan die je op onze webstek vindt (wwww.vitalcities.be/beweegscan) - jou inspireren. 
        \n\n
        Hartelijke groet, \n 
        Het onderzoeksteam van Vital Cities`,
        html: `Beste, \n\n
        Bedankt voor jouw interesse in het rapport over de beweegvriendelijkheid van {Kortrijk} dat de Beweegscan van Vital Cities voor jou heeft gegenereerd. 
        \n
        In het rapport dat je in de bijlage vindt, lees je voor elk van de ambities die je op het vlak van de beweegvriendelijkheid kan nastreven, het oordeel van de bewonders van {kortrijk} (zoals gemeten in de Gemeente- en Stadsmonitor). 
        \n
        Dat oordeel zetten we af tegen het Vlaamse gemiddelde, zodat je in een oogopslag ziet waar jouw stad of gemeente terecht trots op kan zijn (want betere scoort dan het Vlaamse gemiddelde), dan wel wat nog beter kan (want minder goed scoort). 
        \n
        We hopen dat deze inzichten - plus de vele onderzoeksrapporten, tools en cases die we aanreiken in de Beweegscan die je op onze webstek vindt (wwww.vitalcities.be/beweegscan) - jou inspireren. 
        \n\n
        Hartelijke groet, \n 
        Het onderzoeksteam van Vital Cities`,
        attachments: [{
            filename: 'Beweegscan.pdf',
            content: pdfBlob,
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