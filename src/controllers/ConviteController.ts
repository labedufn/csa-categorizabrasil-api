// src/controllers/ConviteController.ts
import { conviteCreateSchema, conviteResponseSchema } from "../schemas/convite.schema";
import { ConviteService } from "../services/ConviteService";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

const conviteService = new ConviteService();

export class ConviteController {
  static async enviarConvite(req: FastifyRequest, reply: FastifyReply) {
    try {
      const { email, instituicao, tipo } = req.body as z.infer<typeof conviteCreateSchema>;

      const criadorId = req.usuario?.id;
      if (!criadorId) {
        return reply.status(401).send({ message: "Usuário não autenticado" });
      }

      let finalInstituicao: string;

      if (req.usuario.tipo === "GESTOR") {
        if (!req.usuario.instituicao) {
          return reply.status(400).send({ message: "Instituição do gestor não encontrada" });
        }
        finalInstituicao = req.usuario.instituicao;
      } else if (req.usuario.tipo === "ADMINISTRADOR") {
        if (!instituicao) {
          return reply.status(400).send({ message: "Campo 'instituicao' é obrigatório para administradores" });
        }
        finalInstituicao = instituicao;
      } else {
        return reply.status(403).send({ message: "Acesso negado" });
      }

      const link = await conviteService.enviarConvite(criadorId, email, finalInstituicao, tipo);
      reply.send({ link });
    } catch (error) {
      reply.status(500).send({ message: (error as Error).message });
    }
  }
}
