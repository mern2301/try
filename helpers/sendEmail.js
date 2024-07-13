const nodemailer = require("nodemailer");

async function sendEmail(email,subject,template){
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: "citesmern2301@gmail.com",
          pass: "gconhztlwsirzlbl",
        },
      });

      const info = await transporter.sendMail({
        from: '"OREBI" <citesmern2301@gmail.com>', 
        to: email, 
        subject: subject,
        html: template,
      });
    
}
module.exports = sendEmail