interface Response<T> {
  status: 200 | 400 | 500 | 401;
  message?: string;
  rest?: T;
}

export type { Response };
