/**
 * @module mailer, sends the lost password mail using gmail account of the server
 */
const nodemailer = require('nodemailer');
import config from 'config';

// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: config.get('mailer').email,
    pass: config.get('mailer').password
  }
});

/**
 * Creates the mail to retrieve the password
 * @param {string} to The email address
 * @param {string} link The reset link
 * 
 * @return the mail as an object
 */
const mailOptions = (to, link) => {
  link = `http://${config.get('express').host}:${config.get('express').port}/lostpassword/${link}`;
  return {
    from: '"No Idea 👻" <noideacs3249@gmail.com>', // sender address
    to, // list of receivers
    subject: "Let's retrieve your password ✔", // Subject line
    text: 'Click on this link: ' + link, // plain text body
    html: `<p><b>Click on this <a href="${link}">link</a></b></p></p>or alternatively here ${link}</p>` // html body
  };
};

/**
 * Send mail with defined transport object
 * @param {string} to The email address
 * @param {string} link The reset link 
 * 
 * @return a promise (see sendMail)
 */
export const sendResetLink = (to, link) =>
  transporter.sendMail(mailOptions(to, link));
