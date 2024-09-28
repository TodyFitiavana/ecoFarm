import "server-only";
import { JWTPayload, SignJWT, jwtVerify } from "jose";
import { SessionPayload } from "./types";
import { cookies } from "next/headers";

const secretKey = process.env.NEXT_PUBLIC_SESSION_KEY;
const encodedKey = new TextEncoder().encode(secretKey);

const encrypt = async (payload: SessionPayload) => {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("1d")
    .sign(encodedKey);
};

const decrypt = async (session: string | undefined = "") => {
  if (!session) {
    throw new Error("Pas de jeton de session");
  }

  const { payload } = await jwtVerify(session, encodedKey, {
    algorithms: ["HS256"],
  });

  return payload;
};

const createSession = async (
  email: string,
  sessionName: string,
  url: string
) => {
  try {
    const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
    const session = await encrypt({ email, expiresAt, qr: url });

    cookies().set(sessionName, session, {
      httpOnly: true,
      secure: true,
      expires: expiresAt,
      sameSite: "lax",
      path: "*",
    });
  } catch (err) {
    throw new Error(err);
  }
};

const getSession = async (
  sessionName: string
): Promise<SessionPayload | null> => {
  const sessionCookie = cookies().get(sessionName);
  if (!sessionCookie) {
    throw new Error("Pas de session-cookie");
  }

  try {
    const payload = await decrypt(sessionCookie.value);
    return payload as SessionPayload;
  } catch (err) {
    throw new Error(err);
  }
};

export { encrypt, decrypt, createSession, getSession };
