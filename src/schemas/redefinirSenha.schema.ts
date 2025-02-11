import { z } from "zod";

export const requestRedefinirSenhaBodySchema = z.object({
  email: z.string().email(),
});

export const requestRedefinirSenhaResponseSchema = z.object({
  message: z.string(),
});

export const redefinirSenhaBodySchema = z.object({
  token: z.string(),
  novaSenha: z.string().min(6),
});

export const redefinirSenhaResponseSchema = z.object({
  message: z.string(),
});
