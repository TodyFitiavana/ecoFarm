import * as z from "zod";

const loginformSchema = z.object({
  email: z.string().email({ message: "Email invalide" }).default(""),
  password: z
    .string()
    .min(8, { message: "Le mot de passe doit être au moins 8 caractères" })
    .default(""),
});

const signupformSchema = z.object({
  email: z.string().email({ message: "Email invalide" }),
  password: z
    .string()
    .min(8, { message: "Le mot de passe doit être au moins 8 caractères" }),
  userName: z.string({
    message: "Le nom est obligatoire",
  }),
  mobileNumber: z
    .number({ message: "Le numéro mobile est obligatoire" })
    .default(0),
});

const sendemailFormSchema = z.object({
  email: z.string().email({ message: "Email invalide" }),
});

const otpformSchema = z.object({
  otp: z.string().min(6, { message: "Veuillez entre le code à 6 chiffres" }),
});

type LoginformSchema = z.infer<typeof loginformSchema>;
type SendemailFormSchema = z.infer<typeof sendemailFormSchema>;
type SignupformSchema = z.infer<typeof signupformSchema>;
type OtpformSchema = z.infer<typeof otpformSchema>;

export {
  loginformSchema,
  signupformSchema,
  sendemailFormSchema,
  otpformSchema,
};
export type {
  LoginformSchema,
  SignupformSchema,
  OtpformSchema,
  SendemailFormSchema,
};
