import { z } from "zod";

type LoginSchema = typeof loginForm;
export type Email = z.infer<typeof email>;
export type Password = z.infer<typeof password>;
export type LoginFormError = z.inferFlattenedErrors<LoginSchema>;
export type LoginFormData = z.infer<LoginSchema>;

const email = z
  .string({
    required_error: "Email obrigatório",
    description: "Email",
  })
  .email({ message: "Email inválido" });

const password = z
  .string({
    required_error: "Senha obrigatório",
    description: "Senha",
  })
  .min(8, { message: "Senha muito curta" })
  .max(255, { message: "Senha muito longa" });

export const loginForm = z.object({
  email,
  password,
});
