"use server";

import { sendEmail } from "@/lib/mailer";
import { getSession } from "@/lib/sessions";
import { authenticator } from "otplib";
import QRCode from "qrcode";
import { Response } from "@/helpers/types/status";

const generateQR2FA = async <T>(email: string): Promise<Response<T>> => {
  const secret = authenticator.generateSecret();
  const session = await getSession();

  try {
    const otpauthURL = authenticator.keyuri(email, `EcoFarm: ${email}`, secret);
    const url = await QRCode.toDataURL(otpauthURL);

    const htmlContent = `
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>EcoFarm</title>
        <style>
            @import url('https://fonts.cdnfonts.com/css/general-sans');
        </style>
    </head>

    <body style="font-family: 'General Sans', sans-serif; color: #75757A; margin: 0; padding: 0; width: 100%; background-color: #ffffff;">
        <div style="max-width: 600px; margin: auto; padding: 40px">
            <div style="text-align: start;margin-bottom:30px;">
                <h1 style="font-size: 24px; line-height: 1.8em; color: #282828; margin: 0;">Votre code QR pour la création de votre compte EcoFarm</h1>
            </div>
            <p style="font-size: 16px; color: rgba(40, 40, 40, 0.6); margin-bottom: 28px;text-align: start;">Scannez le code QR ci dessous en utilisant une application google authentificator et entrez le code  à 6 chiffres dans la plateforme EcoFarm</p>
            <div style="width: 100%; display: flex; justify-content: start;">
              <img src="${
                url !== "" && url
              }" alt="Code QR" style="margin-bottom: 38px;height: 300px; width: 300px" />
            </div>
        </div>
    </body>
    </html>
    `;

    session.email = email;
    session.secret = secret;

    await sendEmail(
      email,
      "Code QR pour création de compte",
      "Scannez le code QR ci dessous en utilisant une application google authentificator et entrez le code  à 6 chiffres dans la plateforme EcoFarm",
      htmlContent
    );
    await session.save();

    return { status: 200, rest: url as T, message: "Email sent successfully" };
  } catch (err) {
    console.error("Erreur lors de la génération du code QR:", err);
    return { status: 500, message: `Internal server error: ${err}` };
  }
};

const verifyOTP = async <T>(otp: string): Promise<Response<T>> => {
  const session = await getSession();
  try {
    if (!session) {
      return {
        status: 400,
        message: "No session found",
      };
    }

    const { secret } = session;
    const isValid = authenticator.verify({ token: otp, secret });

    if (isValid) {
      session.destroy();
      return {
        status: 200,
        message: "Code validated successfully",
      };
    }

    return {
      status: 400,
      message: "An error when occured when verifying code",
    };
  } catch (err) {
    console.error("Erreur lors de la vérification du code OTP:", err);
    return { status: 500, message: `Internal server error: ${err}` };
  }
};

export { generateQR2FA, verifyOTP };
