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
});

export const editarEstabelecimentoBodySchema = criarEstabelecimentoBodySchema.partial();

export const editarEstabelecimentoResponseSchema = z.object({
  estabelecimentoAtualizado: z.object({
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
    ativo: z.boolean(),
  }),
});

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
    alteradoPor: z.string(),
    ativo: z.boolean(),
  }),
);

export const desativarEstabelecimentoBodySchema = z.object({
  ativo: z.boolean(),
});

export const desativarEstabelecimentoResponseSchema = z.object({
  message: z.string(),
});
