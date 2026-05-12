import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { name, email, phone, bookingType } = req.body;

    if (!name || !email || !phone || !bookingType) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const { error } = await resend.emails.send({
      from: process.env.MAIL_FROM,
      to: process.env.MAIL_TO,
      replyTo: email,
      subject: "Новая заявка с сайта",
      html: `
        <h2>Новая заявка</h2>
        <p><strong>Имя:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Телефон:</strong> ${phone}</p>
        <p><strong>Тип бронирования:</strong> ${bookingType}</p>
      `,
    });

    if (error) {
      return res.status(500).json({ error: "Email send failed" });
    }

    return res.status(200).json({ ok: true });
  } catch (err) {
    return res.status(500).json({ error: "Server error" });
  }
}
