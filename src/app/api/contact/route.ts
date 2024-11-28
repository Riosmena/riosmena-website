import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, topic, message } = body;

    if (!name || !email || !topic || !message) {
      return NextResponse.json(
        { error: "Por favor, complete todos los campos." },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      secure: true,
      tls: {
        rejectUnauthorized: false,
      },
    });

    const mailOptions = {
      from: `"${name}" <${email}>`,
      to: process.env.DESTINATION_EMAIL,
      subject: topic,
      text: `De: ${email}\n\n` + `${message}`,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Correo enviado exitosamente." });
  } catch (error) {
    return NextResponse.json(
      { error: "Hubo un error al enviar el correo." },
      { status: 500 }
    );
  }
}
