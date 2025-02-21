import { z } from "zod";

export const criarEstabelecimentoBodySchema = z.object({
  nome: z.string(),
  cnpj: z.string(),
  cnae: z.string(),
  endereco: z.string(),
  cidade: z.string(),
  estado: z.string(),
  pessoalOcupado: z.number(),
  numeroRefeicoes: z.number(),
  possuiAlvaraSanitario: z.number(),
  possuiResponsavelBoasPraticas: z.number(),
});

export const criarEstabelecimentoResponseSchema = z.object({
  estabelecimentoCriado: z.object({
    id: z.string(),
    nome: z.string(),
    cnpj: z.string(),
    cnae: z.string(),
    endereco: z.string(),
    cidade: z.string(),
    estado: z.string(),
    pessoalOcupado: z.number(),
    numeroRefeicoes: z.number(),
    possuiAlvaraSanitario: z.number(),
    possuiResponsavelBoasPraticas: z.number(),
    alteradoPor: z.string(),
  }),
});

export const editarEstabelecimentoBodySchema = criarEstabelecimentoBodySchema.partial();

export const editarEstabelecimentoResponseSchema = z
  .object({
    message: z.string(),
    estabelecimentoAtualizado: z
      .object({
        id: z.string(),
        nome: z.string(),
        cnpj: z.string(),
        cnae: z.string(),
        endereco: z.string(),
        cidade: z.string(),
        estado: z.string(),
        pessoalOcupado: z.number(),
        numeroRefeicoes: z.number(),
        possuiAlvaraSanitario: z.number(),
        possuiResponsavelBoasPraticas: z.number(),
        alteradoEm: z.preprocess((arg) => (arg instanceof Date ? arg.toISOString() : arg), z.string()),
        alteradoPor: z.string(),
        ativo: z.boolean(),
      })
      .passthrough(),
  })
  .passthrough();

export const listarEstabelecimentosResponseSchema = z.array(
  z.object({
    id: z.string(),
    nome: z.string(),
    cnpj: z.string(),
    cnae: z.string(),
    endereco: z.string(),
    cidade: z.string(),
    estado: z.string(),
    pessoalOcupado: z.number(),
    numeroRefeicoes: z.number(),
    possuiAlvaraSanitario: z.number(),
    possuiResponsavelBoasPraticas: z.number(),
    alteradoEm: z.preprocess((arg) => (arg instanceof Date ? arg.toISOString() : arg), z.string()),
    alteradoPor: z.string(),
    ativo: z.boolean(),
  }),
);

export const desativarEstabelecimentoBodySchema = z.object({
  ativo: z.boolean().optional(),
});

export const desativarEstabelecimentoResponseSchema = z.object({
  message: z.string(),
});
