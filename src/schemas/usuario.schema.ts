import { z } from "zod";

export const atualizarUsuarioSchema = z.object({
  nome: z.string().min(3, "Nome deve ter no mínimo 3 caracteres").optional(),
  sobrenome: z.string().min(3, "Sobrenome deve ter no mínimo 3 caracteres").optional(),
  cpf: z.string().length(11, "CPF deve ter exatamente 11 dígitos").optional(),
  email: z.string().email("E-mail inválido").optional(),
  instituicao: z.string().optional(),
  tipo: z.enum(["ADMINISTRADOR", "GESTOR", "AVALIADOR"], { message: "Tipo de usuário inválido" }).optional(),
  ativo: z.boolean().optional(),
});

export const atualizarSenhaSchema = z.object({
  senhaAtual: z.string().min(6, "Senha atual deve ter no mínimo 6 caracteres"),
  novaSenha: z.string().min(6, "Nova senha deve ter no mínimo 6 caracteres"),
});

export const atualizarSenhaResponseSchema = z.object({
  message: z.string(),
});

export const listarUsuariosSchema = z.array(
  z.object({
    id: z.string(),
    nome: z.string(),
    sobrenome: z.string(),
    cpf: z.string(),
    email: z.string(),
    instituicao: z.string(),
    tipo: z.enum(["ADMINISTRADOR", "GESTOR", "AVALIADOR"]),
    ativo: z.boolean(),
  }),
);

export const alterarStatusUsuarioSchema = z.object({
  ativo: z.boolean(),
});

export const alterarStatusUsuarioResponseSchema = z.object({
  message: z.string(),
  ativo: z.boolean(),
});

export const alterarTipoUsuarioSchema = z.object({
  message: z.string(),
  novoTipo: z.enum(["ADMINISTRADOR", "GESTOR", "AVALIADOR"]),
});

export const alterarTipoUsuarioResponseSchema = z.object({
  message: z.string(),
  usuario: z.object({
    id: z.string(),
    nome: z.string(),
    sobrenome: z.string(),
    cpf: z.string(),
    email: z.string(),
    instituicao: z.string(),
    tipo: z.enum(["ADMINISTRADOR", "GESTOR", "AVALIADOR"]),
    ativo: z.boolean(),
  }),
});
