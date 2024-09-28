// actions/2FA.actions.ts
"use server";

import { sendEmail } from "@/lib/mailer";
import { createSession } from "@/lib/sessions";
import { authenticator } from "otplib";
import QRCode from "qrcode";

const generateQR2FA = async (email: string): Promise<string | null> => {
  const secret = authenticator.generateSecret();

  try {
    const otpauthURL = authenticator.keyuri(email, `EcoFarm: ${email}`, secret);
    const url = await QRCode.toDataURL(otpauthURL);

    console.log("URL du code QR:", url);

    const htmlContent = `
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Lôkaly</title>
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

    await createSession(email, "register-session", url); // création de la session
    await sendEmail(
      email,
      "Code QR pour création de compte",
      "Scannez le code QR ci dessous en utilisant une application google authentificator et entrez le code  à 6 chiffres dans la plateforme EcoFarm",
      htmlContent
    );
    return url;
  } catch (err) {
    console.error("Erreur lors de la génération du code QR:", err);
    throw new Error("Erreur lors de la génération du code QR: " + err.message);
  }
};

export { generateQR2FA };
