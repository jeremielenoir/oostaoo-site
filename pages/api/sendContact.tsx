import { NextApiRequest, NextApiResponse } from 'next';

import nodemailer from 'nodemailer';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const message = {
    from: process.env.GMAIL_EMAIL_ADDRESS,
    to: 'contact@oostaoo.com',
    subject: req.body.subject,
    text: req.body.message,
    html: `<p>${req.body.message.replace(/\n/g, '<br>')}</p>`,
  };

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.GMAIL_EMAIL_ADDRESS,
      pass: process.env.GMAIL_APP_PASSWORD, // not your password account
    },
  });

  if (req.method === 'POST') {
    transporter.sendMail(message, (err: any, info: any) => {
      if (err) {
        res.status(404).json({
          error: `Connection refused at ${err.address}`,
        });
      } else {
        res.status(250).json({
          success: `Message delivered to ${info.accepted}`,
        });
      }
    });
  }
}
