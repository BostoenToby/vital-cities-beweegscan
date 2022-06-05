// const sgMail = require('@sendgrid/mail');
// sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// exports.handler = async (event: any, context: any, callback: any) => {
//     console.log("Testing if this works")
//     const data = JSON.parse(event.body)
//     const { email, subject } = data

//     const body = Object.keys(data).map((k) => {
//         return `${k}: ${data[k]}`
//       }).join("<br><br>");

//     const mail_to_send = {
//         to: "toby.bostoen@student.howest.be",
//         from: "toby.bostoen@student.howest.be",
//         subject: subject? subject: 'This is a test',
//         text: 'This was not easy at all',
//         html: body
//     }

//     try{
//         await sgMail.send(mail_to_send).then(() => console.log("Email sent!!!"))

//         return{
//             statusCode: 200,
//             body: "Message sent successfully"
//         }
//     } catch(e: any){
//         return{
//             statusCode: e.code,
//             body: e.message
//         }
//     }
// }