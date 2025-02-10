import { z } from "zod";

export const conviteCreateSchema = z.object({
  email: z.string().email({ message: "Email inválido" }),
  instituicao: z.string().optional(),
  tipo: z.enum(["ADMINISTRADOR", "GESTOR", "AVALIADOR"], {
    errorMap: () => ({ message: "Tipo inválido" }),
  }),
});

export const conviteResponseSchema = z.object({
  link: z.string(),
});
