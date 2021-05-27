const mailgun = require('mailgun-js')

const domain = 'sandboxb2048f98dcae40ab930cea7592328eed.mailgun.org'

const mg = mailgun({ apiKey: process.env.MAILGUN_API_KEY, domain })


const sendWelcomeEmail = (email, name) => {
    const data = {
        from: 'girishkaushik44@gmail.com',
        to: email,
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    }
    mg.messages().send(data)
}

const sendCancelEmail = (email, name) => {
    const data = {
        from: 'girishkaushik44@gmail.com',
        to: email,
        subject: 'Sorry to see you go!',
        text: `Goodbye, ${name}. I hope to see you back sometime soon.`
    }
    mg.messages().send(data)
}


module.exports = {
    sendWelcomeEmail,
    sendCancelEmail
}