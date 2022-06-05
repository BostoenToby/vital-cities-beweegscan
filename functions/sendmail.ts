const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

exports.handler = async (event: any, context: any, callback: any) => {
    console.log("Testing if this works")
    const body = JSON.parse(event.body)
    const message = body.message
    // const attachement = 

    const mail_to_send = {
        personalizations: [
            {
               cc: [
                   {
                       email: 'sigofoy785@game4hr.com',
                       name: 'testCC'
                   }
               ] 
            }
        ],
        to: "toby.bostoen@student.howest.be",
        from: "toby.bostoen@student.howest.be",
        subject: 'This is a test',
        text: message,
        html: '<strong>This was not easy at all</strong>',
    }

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