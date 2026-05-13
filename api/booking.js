import dotenv from "dotenv";
import { Resend } from "resend";

dotenv.config({ path: ".env.local" });

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

  if (!process.env.RESEND_API_KEY) {
    return res.status(500).json({ error: "RESEND_API_KEY is missing" });
  }

  if (!process.env.MAIL_FROM) {
    return res.status(500).json({ error: "MAIL_FROM is missing" });
  }

  if (!process.env.MAIL_TO) {
    return res.status(500).json({ error: "MAIL_TO is missing" });
  }

  try {
    const { name, email, phone, bookingType, website } = req.body || {};

    if (website) {
      return res.status(200).json({ ok: true });
    }

    const rawName = String(name || "").trim();
    const rawEmail = String(email || "").trim();
    const rawPhone = String(phone || "").trim();
    const rawBookingType = String(bookingType || "").trim();

    if (!rawName || !rawEmail || !rawPhone || !rawBookingType) {
      return res.status(400).json({ error: "Заполните все обязательные поля" });
    }

    if (!isValidEmail(rawEmail)) {
      return res.status(400).json({ error: "Некорректный email" });
    }

    if (
      rawName.length > 100 ||
      rawEmail.length > 150 ||
      rawPhone.length > 50 ||
      rawBookingType.length > 100
    ) {
      return res
        .status(400)
        .json({ error: "Слишком длинное значение в одном из полей" });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    const { data, error } = await resend.emails.send({
      from: process.env.MAIL_FROM,
      to: [process.env.MAIL_TO],
      replyTo: rawEmail,
      subject: "Новая заявка с сайта",
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111;">
          <h2>Новая заявка с сайта</h2>
          <p><strong>Имя:</strong> ${escapeHtml(rawName)}</p>
          <p><strong>Email:</strong> ${escapeHtml(rawEmail)}</p>
          <p><strong>Телефон:</strong> ${escapeHtml(rawPhone)}</p>
          <p><strong>Тип бронирования:</strong> ${escapeHtml(rawBookingType)}</p>
        </div>
      `,
    });

    if (error) {
      console.error("RESEND ERROR:", error);
      return res.status(500).json({
        error: error.message || "Ошибка отправки письма",
      });
    }

    return res.status(200).json({
      ok: true,
      id: data?.id,
    });
  } catch (err) {
    console.error("BOOKING API ERROR:", err);

    return res.status(500).json({
      error: err?.message || "Внутренняя ошибка сервера",
    });
  }
}
