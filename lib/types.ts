import { JWTPayload } from "jose";

interface SessionPayload {
  email: string;
  expiresAt: Date;
  secret: string;
}

export type { SessionPayload };
