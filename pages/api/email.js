export default function (req, res) {
        let nodemailer = require('nodemailer')
        const transporter = nodemailer.createTransport({
          port: 465,
          host: "smtp.gmail.com",
          auth: {
            user: 'aandh.firm@gmail.com',
            pass: 'reguqlkyqgoeyekx',
          },
          secure: true,
        })
        // console.log(req.body)
        const mailData = {
          from: 'aandh.firm@gmail.com',
          to: 'funncartstore@gmail.com',
          subject: `Message From Funncart Order Bot`,
          text: req.body[0][0],
          html: `<div>${req.body[0][0]} Ordered By ${req.body[1]} ( ${req.body[2]})</div>`
        }
        transporter.sendMail(mailData, function (err, info) {
          if(err)
            console.log(err)
          else
            console.log(info)
        })
        res.status(200)
      }
  
