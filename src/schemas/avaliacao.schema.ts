import { z } from "zod";

export const criarAvaliacaoBodySchema = z.object({
  idEstabelecimento: z.string(),
});

export const criarAvaliacaoResponseSchema = z.object({
  avaliacaoCriada: z.object({
    id: z.string(),
    idEstabelecimento: z.string(),
    criadoEm: z.preprocess((arg) => (arg instanceof Date ? arg.toISOString() : arg), z.string()),
    alteradoEm: z.preprocess((arg) => (arg instanceof Date ? arg.toISOString() : arg), z.string()),
    ativo: z.boolean(),
  }),
});
