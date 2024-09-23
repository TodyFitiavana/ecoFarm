import * as z from "zod";

const loginformSchema = z.object({
  email: z.string().email({ message: "Email invalide" }),
  password: z
    .string()
    .min(8, { message: "Le mot de passe doit être au moins 8 caractères" }),
});

type LoginformSchema = z.infer<typeof loginformSchema>;

export { loginformSchema };
export type { LoginformSchema };
