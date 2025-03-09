import { z } from "zod";

export const criarAvaliacaoBodySchema = z.object({
  idEstabelecimento: z.string(),
});

export const criarAvaliacaoResponseSchema = z.object({
  avaliacaoCriada: z.object({
    id: z.string(),
    idEstabelecimento: z.string(),
    criadoEm: z.date(),
    alteradoEm: z.date(),
    ativo: z.boolean(),
  }),
});

export const desativarAvaliacaoResponseSchema = z.object({
  avaliacaoDesativada: z.object({
    id: z.string(),
    idEstabelecimento: z.string(),
    criadoEm: z.preprocess((arg) => (arg instanceof Date ? arg.toISOString() : arg), z.string()),
    alteradoEm: z.preprocess((arg) => (arg instanceof Date ? arg.toISOString() : arg), z.string()),
    ativo: z.boolean(),
  }),
});

export const listarAvaliacoesResponseSchema = z.object({
  avaliacoes: z.array(
    z.object({
      id: z.string(),
      idEstabelecimento: z.string(),
      criadoEm: z.preprocess((arg) => (arg instanceof Date ? arg.toISOString() : arg), z.string()),
      alteradoEm: z.preprocess((arg) => (arg instanceof Date ? arg.toISOString() : arg), z.string()),
      idCriador: z.string(),
      ativo: z.boolean(),
      estabelecimento: z.object({
        nome: z.string(),
        cidade: z.string(),
        estado: z.string(),
      }),
    }),
  ),
});
