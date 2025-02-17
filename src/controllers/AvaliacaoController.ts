import { AvaliacaoService } from "@services/AvaliacaoService";
import { FastifyRequest } from "fastify/types/request";
import { FastifyReply } from "fastify/types/reply";

const avaliacaoService = new AvaliacaoService();

export class AvaliacaoController {
  static async criarAvaliacao(req: FastifyRequest, reply: FastifyReply) {
    try {
      const idEstabelecimento = req.body as { idEstabelecimento: string };
      const idCriador = req.usuario.id;
      if (!idCriador) {
        return reply.status(401).send({ message: "Usuário não autenticado" });
      }

      const avaliacaoCriada = await avaliacaoService.criarAvaliacao(idEstabelecimento, idCriador);

      reply.send({ avaliacaoCriada });
    } catch (error) {
      reply.status(400).send({ error: (error as Error).message });
    }
  }
}
