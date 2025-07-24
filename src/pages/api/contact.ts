import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).end();

  const { email, title, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'mintrang8899@gmail.com',
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });

  try {
    await transporter.sendMail({
      from: email,
      to: 'mintrang8899@gmail.com',
      subject: title || `New message from Min's website`,
      text: message,
    });
    res.status(200).json({ ok: true });
  } catch (err) {
    res.status(500).json({ error: 'Send mail failed' });
  }
} 