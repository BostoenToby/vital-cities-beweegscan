const client = require('@sendgrid/mail')

const {
    SENDGRID_API_KEY,
    SENDGRID_FROM_EMAIL,
} = process.env;

exports.handler = async function (event, context, callback) {
    console.log(event)
    const body = JSON.parse(event.body);
    const message = body.message
    client.setApiKey(SENDGRID_API_KEY)

    const data = {
        to: 'sigofoy785@game4hr.com',
        from: 'toby.bostoen@student.howest.be',
        subject: `This is a test`,
        html: `This is the message: ${message}`
    }

    try {
        await client.send(data)
        return {
            statusCode: 200,
            body: 'Message sent'
        }
    } catch(err){
        return {
            statusCode: err.code,
            body: JSON.stringify({ msg: err.message })
        }
    }
}