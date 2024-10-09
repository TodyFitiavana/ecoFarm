"use server";

import { cookies } from "next/headers";
import { getIronSession, SessionOptions } from "iron-session";
import { SessionPayload } from "./types";

const sessionOptions: SessionOptions = {
  cookieName: "ecoFarm__cookie",
  password: process.env.SESSION_KEY,
  cookieOptions: {
    secure: process.env.NODE_ENV === "production",
    httpOnly: true,
  },
};

export const getSession = async () => {
  const session = await getIronSession<SessionPayload>(
    cookies(),
    sessionOptions
  );
  return {
    email: session.email,
    expiresAt: session.expiresAt,
    secret: session.secret,
  };
};

export const saveSession = async (session: SessionPayload) => {
  const ironSession = await getIronSession<SessionPayload>(
    cookies(),
    sessionOptions
  );
  ironSession.email = session.email;
  ironSession.expiresAt = session.expiresAt;
  ironSession.secret = session.secret;
  await ironSession.save();
};
