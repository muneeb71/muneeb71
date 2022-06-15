const nodemailer = require('nodemailer')
const sgTransport = require('nodemailer-mailgun-transport')

/**
 * Sends email
 * @param {Object} data - data
 * @param {boolean} callback - callback
 */
const sendEmail = async (data = {}, callback) => {
  
  let transporter = "";

  if(process.env.MAIL_SMTP_SERVER === 'sendgrid'){
    transporter = nodemailer.createTransport(sgTransport(
      {
        auth: {
          api_user: process.env.MAIL_USERNAME,
          api_key: process.env.MAIL_PASSWORD
        },
        service: 'SendGrid',
        port: process.env.MAIL_PORT
      }
    ))
  }else if (process.env.MAIL_SMTP_SERVER === 'mailtrap'){
    transporter = nodemailer.createTransport(
      {
        auth: {
          user: process.env.MAIL_USERNAME,
          pass: process.env.MAIL_PASSWORD
        },
        host: process.env.MAIL_HOST,
        port: process.env.MAIL_PORT
      }
    )
  }

  /*const auth = {
    auth: {
      user: process.env.MAIL_USERNAME,
      pass: process.env.MAIL_PASSWORD
    },
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT
  }
  const transporter = nodemailer.createTransport(sgTransport(auth))
  */

  /*if(process.env.MAIL_SMTP_SERVER === 'sendgrid'){
    const auth = {
      auth: {
        api_user: process.env.MAIL_USERNAME,
        api_key: process.env.MAIL_PASSWORD
      },
      service: 'SendGrid',
      port: process.env.MAIL_PORT
    }
    const transporter = nodemailer.createTransport(sgTransport(auth))
  }else if (process.env.MAIL_SMTP_SERVER === 'mailtrap'){
    const auth = {
      auth: {
        user: process.env.MAIL_USERNAME,
        pass: process.env.MAIL_PASSWORD
      },
      host: process.env.MAIL_HOST,
      port: process.env.MAIL_PORT
    }
    const transporter = nodemailer.createTransport(auth)
  }*/

  const mailOptions = {
    from: `${process.env.APP_NAME} <${process.env.MAIL_FROM_ADDRESS}>`,
    to: `${data.user.name} <${data.user.email}>`,
    subject: data.subject,
    html: data.htmlMessage
  }
  transporter.sendMail(mailOptions, (err) => {
    if (err) {
      return callback(false)
    }
    return callback(true)
  })

}

module.exports = { sendEmail }
