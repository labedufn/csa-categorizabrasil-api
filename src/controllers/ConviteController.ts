// src/controllers/ConviteController.ts
import { conviteCreateSchema } from "../schemas/convite.schema";
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

      const link = await conviteService.enviarConvite(criadorId, email, instituicao, tipo);
      reply.send({ link });
    } catch (error) {
      reply.status(500).send({ message: (error as Error).message });
    }
  }
}
