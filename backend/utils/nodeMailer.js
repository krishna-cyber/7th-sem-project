/** @format */

const nodemailer = require("nodemailer");

const sendEmail = async ({ sender, receiver, subject, message }) => {
  console.log({ sender, receiver, subject, message });
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      auth: {
        user: "jared.denesik@ethereal.email",
        pass: "9UAQwA2XxkTSm4Y2vA",
      },
    });

    const mailOptions = {
      from: sender,
      to: receiver,
      subject: subject,
      text: message,
    };

    const info = transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
        //if error occurs send response to the client
        return {
          message: "Email could not be sent",
          statusCode: 500,
        };
      } else {
        console.log("Email sent: " + info.response);
        //if email is sent successfully send response to the client
        return {
          message: "Email sent",
          statusCode: 200,
        };
      }
    });
    return info;
  } catch (error) {
    console.log(error);
    return {
      message: "Email could not be sent",
      statusCode: 500,
    };
  }
};

module.exports = sendEmail;
