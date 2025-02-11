import { z } from "zod";

export const criarEstabelecimentoBodySchema = z.object({
  nome: z.string(),
  cnpj: z.string(),
  cnae: z.string(),
  endereco: z.string(),
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
    pessoalOcupado: z.number(),
    numeroRefeicoes: z.number(),
    possuiAlvaraSanitario: z.number(),
    possuiResponsavelBoasPraticas: z.number(),
    dataAlteracao: z.string(),
    alteradoPor: z.string(),
    ativo: z.boolean(),
  }),
});
