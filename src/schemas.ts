import { z } from "zod";

export const usuarioSchema = z.object({
    id: z.string(),
    nome: z.string(),
    email: z.string().email(),
});

export const criarUsuarioSchema = z.object({
    nome: z.string().min(1, "Nome é obrigatório"),
    email: z.string().email("E-mail inválido"),
});