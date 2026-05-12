import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

function escapeHtml(str = "") {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function isValidEmail(email = "") {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { name, email, phone, bookingType, website } = req.body || {};

    // Honeypot: реальный пользователь поле не заполняет
    if (website) {
      return res.status(200).json({ ok: true });
    }

    if (!name || !email || !phone || !bookingType) {
      return res.status(400).json({ error: "Заполните все обязательные поля" });
    }

    if (!isValidEmail(email)) {
      return res.status(400).json({ error: "Некорректный email" });
    }

    if (
      name.length > 100 ||
      email.length > 150 ||
      phone.length > 50 ||
      bookingType.length > 100
    ) {
      return res
        .status(400)
        .json({ error: "Слишком длинное значение в одном из полей" });
    }

    const safeName = escapeHtml(name.trim());
    const safeEmail = escapeHtml(email.trim());
    const safePhone = escapeHtml(phone.trim());
    const safeBookingType = escapeHtml(bookingType.trim());

    const { data, error } = await resend.emails.send({
      from: process.env.MAIL_FROM,
      to: [process.env.MAIL_TO],
      replyTo: safeEmail,
      subject: "Новая заявка с сайта",
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111;">
          <h2>Новая заявка с сайта</h2>
          <p><strong>Имя:</strong> ${safeName}</p>
          <p><strong>Email:</strong> ${safeEmail}</p>
          <p><strong>Телефон:</strong> ${safePhone}</p>
          <p><strong>Тип бронирования:</strong> ${safeBookingType}</p>
        </div>
      `,
    });

    if (error) {
      return res.status(500).json({ error: "Не удалось отправить письмо" });
    }

    return res.status(200).json({ ok: true, id: data?.id });
  } catch (err) {
    return res.status(500).json({ error: "Внутренняя ошибка сервера" });
  }
}
