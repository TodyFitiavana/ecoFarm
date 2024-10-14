import { transporter } from "@/helpers/mailerHelper";
import nodemailer from "node-mailer";

const sendEmail = async (
  userEmail: string,
  subject: string,
  text: string,
  html: string
) => {
  const mailOptions = {
    from: `${process.env.NEXT_PUBLIC_EMAIL_SENDER}`,
    to: `${userEmail}`,
    subject,
    text,
    html,
    attachDataUrls: true,
  };

  try {
    await transporter.sendMail(mailOptions);
  } catch (err) {
    throw new Error("Erreur lors de l'envoie de l'email: ", err);
  }
};

export { sendEmail };
