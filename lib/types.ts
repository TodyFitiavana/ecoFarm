import { JWTPayload } from "jose";

interface SessionPayload extends JWTPayload {
  email: string;
  qr?: string;
  expiresAt: Date;
}

export type { SessionPayload };
