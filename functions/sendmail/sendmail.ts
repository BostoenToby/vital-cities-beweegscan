const client = require('@sendgrid/mail')

const {
    SENDGRID_API_KEY,
    SENDGRID_FROM_EMAIL,
} = process.env;

exports.handler = async function (event: any, context: any, callback: Function) {
    const { name, email, subject, message } = JSON.parse(event.body);
    client.setApiKey(SENDGRID_API_KEY)

    const data = {
        to: 'sigofoy785@game4hr.com',
        from: SENDGRID_FROM_EMAIL,
        subject: `${subject}`,
        html: message
    }

    try {
        await client.send(data)
        return {
            statusCode: 200,
            body: 'Message sent'
        }
    } catch(err: any){
        return {
            statusCode: err.code,
            body: JSON.stringify({ msg: err.message })
        }
    }
}