import { Personlization } from "../src/interfaces/sendgrid";

const sgMail = require('@sendgrid/mail')

exports.handler = async (event: any, context: any, callback: any) => {

    const { pdf } = JSON.parse(event.body)
    sgMail.setApiKey(process.env.SENDGRID_API_KEY)

    const mail_to_send = {
        from: "toby.bostoen@student.howest.be",
        to: "toby.bostoen@student.howest.be",
        cc: "robbe.saelens@student.howest.be",
        subject: 'Rapport over de beweegvriendelijkheid van jouw stad of gemeente',
        text: `Beste, 
        
        Bedankt voor jouw interesse in het rapport over de beweegvriendelijkheid van {Kortrijk} dat de Beweegscan van Vital Cities voor jou heeft gegenereerd. 
        
        In het rapport dat je in de bijlage vindt, lees je voor elk van de ambities die je op het vlak van de beweegvriendelijkheid kan nastreven, het oordeel van de bewonders van {kortrijk} (zoals gemeten in de Gemeente- en Stadsmonitor). 
        
        Dat oordeel zetten we af tegen het Vlaamse gemiddelde, zodat je in een oogopslag ziet waar jouw stad of gemeente terecht trots op kan zijn (want betere scoort dan het Vlaamse gemiddelde), dan wel wat nog beter kan (want minder goed scoort). 
        
        We hopen dat deze inzichten - plus de vele onderzoeksrapporten, tools en cases die we aanreiken in de Beweegscan die je op onze webstek vindt (wwww.vitalcities.be/beweegscan) - jou inspireren. 
        
        ${pdf} 
        Hartelijke groet, 
        Het onderzoeksteam van Vital Cities`,
        html: `Beste, 
        
        Bedankt voor jouw interesse in het rapport over de beweegvriendelijkheid van {Kortrijk} dat de Beweegscan van Vital Cities voor jou heeft gegenereerd. 
        
        In het rapport dat je in de bijlage vindt, lees je voor elk van de ambities die je op het vlak van de beweegvriendelijkheid kan nastreven, het oordeel van de bewonders van {kortrijk} (zoals gemeten in de Gemeente- en Stadsmonitor). 
        
        Dat oordeel zetten we af tegen het Vlaamse gemiddelde, zodat je in een oogopslag ziet waar jouw stad of gemeente terecht trots op kan zijn (want betere scoort dan het Vlaamse gemiddelde), dan wel wat nog beter kan (want minder goed scoort). 
        
        We hopen dat deze inzichten - plus de vele onderzoeksrapporten, tools en cases die we aanreiken in de Beweegscan die je op onze webstek vindt (wwww.vitalcities.be/beweegscan) - jou inspireren. 
        
        ${pdf} 
        Hartelijke groet, 
        Het onderzoeksteam van Vital Cities`
    }
    // TODO: fix json error at personalizations --> bad request so probably it's a json error

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