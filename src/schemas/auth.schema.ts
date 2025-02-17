import { z } from "zod";

export const loginSchema = z.object({
  emailOuCpf: z.string().min(3, "Informe um e-mail ou CPF válido"),
  senha: z.string().min(6, "Senha deve ter no mínimo 6 caracteres"),
});

export const loginResponseSchema = z.object({
  usuario: z.object({
    id: z.string(),
    nome: z.string(),
    sobrenome: z.string(),
    cpf: z.string(),
    email: z.string().email(),
    instituicao: z.string(),
    tipo: z.enum(["ADMINISTRADOR", "GESTOR", "AVALIADOR"], { message: "Tipo de usuário inválido" }),
    ativo: z.boolean(),
  }),
  token: z.string(),
});

export const registrarSchema = z.object({
  nome: z.string().min(3, "Nome deve ter no mínimo 3 caracteres"),
  sobrenome: z.string().min(3, "Sobrenome deve ter no mínimo 3 caracteres"),
  cpf: z.string().length(11, "CPF deve ter exatamente 11 dígitos"),
  email: z.string().email("E-mail inválido"),
  senha: z.string().min(6, "Senha deve ter no mínimo 6 caracteres"),
  instituicao: z.string(),
  tipo: z.enum(["ADMINISTRADOR", "GESTOR", "AVALIADOR"]),
});

export const registrarComConviteSchema = registrarSchema.omit({ email: true, instituicao: true, tipo: true }).extend({
  conviteToken: z.string(),
});
