import mailProvider from '@/config/mailProvider';
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

  const transporter = nodemailer.createTransport(mailProvider);
  if (req.method === 'POST') {
    transporter.sendMail(message, (err: any, info: any) => {
      if (err) {
        res.status(500).json({
          error: err,
        });
        console.log('🚀 ~ file: contact.tsx:29 ~ res.status ~ err:', err);
      } else {
        res.status(250).json({
          success: `Message delivered to ${info.accepted}`,
        });
      }
    });
  }
}
