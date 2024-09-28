import * as z from "zod";

const loginformSchema = z.object({
  email: z.string().email({ message: "Email invalide" }).default(""),
  password: z
    .string()
    .min(8, { message: "Le mot de passe doit être au moins 8 caractères" })
    .default(""),
});

const signupformSchema = z.object({
  email: z.string().email({ message: "Email invalide" }).default(""),
  password: z
    .string()
    .min(8, { message: "Le mot de passe doit être au moins 8 caractères" })
    .default(""),
  name: z
    .string({
      message: "Le nom est obligatoire",
    })
    .default(""),
  mobileNumber: z
    .number({ message: "Le numéro mobile est obligatoire" })
    .default(0),
});

const otpformSchema = z.object({
  otp: z.string().min(6, { message: "Veuillez entre le code" }).default(""),
});

type LoginformSchema = z.infer<typeof loginformSchema>;
type SignupformSchema = z.infer<typeof signupformSchema>;
type OtpformSchema = z.infer<typeof otpformSchema>;

export { loginformSchema, signupformSchema, otpformSchema };
export type { LoginformSchema, SignupformSchema, OtpformSchema };
