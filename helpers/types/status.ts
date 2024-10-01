import { SessionPayload } from "@/lib/types";

interface Response<T> {
  status: 200 | 400 | 500 | 401;
  message?: string;
  rest?: T;
  session?: SessionPayload;
}

export type { Response };
