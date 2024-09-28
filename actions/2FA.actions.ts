// actions/2FA.actions.ts
"use server";

import { createSession } from "@/lib/sessions";
import { authenticator } from "otplib";
import QRCode from "qrcode";

const generateQR2FA = async (email: string): Promise<string | null> => {
  const secret = authenticator.generateSecret();

  try {
    const url = await QRCode.toDataURL(
      authenticator.keyuri(email, `EcoFarm: ${email}`, secret)
    );
    console.log(url);
    await createSession(email, "register-session", url); // création de la session
    return url;
  } catch (err) {
    return null;
    throw new Error("Erreur lors de la génération du code QR: ", err);
  }
};

export { generateQR2FA };
