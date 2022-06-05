const sgMail3 = require('@sendgrid/mail');
sgMail3.setApiKey(process.env.SENDGRID_API_KEY);

exports.handler = async (event: any, context: any, callback: any) => {
    console.log("Testing if this works")

    const mail_to_send = {
        to: "toby.bostoen@student.howest.be",
        from: "toby.bostoen@student.howest.be",
        subject: 'This is a test',
        text: 'This was not easy at all'
    }

    try{
        await sgMail3.send(mail_to_send).then(() => console.log("Email sent!!!"))

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