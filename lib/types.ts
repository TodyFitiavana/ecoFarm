import { JWTPayload } from "jose";

interface SessionPayload extends JWTPayload {
  email: string;
  expiresAt: Date;
}

export type { SessionPayload };
