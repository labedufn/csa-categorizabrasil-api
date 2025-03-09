import { AvaliacaoService } from "@services/avaliacao.service";
import { FastifyRequest, FastifyReply } from "fastify";
import { Types } from "mongoose";

const avaliacaoService = new AvaliacaoService();

export class AvaliacaoController {
  static async criarAvaliacao(req: FastifyRequest, reply: FastifyReply) {
    try {
      const { idEstabelecimento } = req.body as { idEstabelecimento: string };
      const idCriador = req.usuario?.id;

      if (!idCriador) {
        return reply.status(401).send({ message: "Usuário não autenticado" });
      }

      const avaliacaoCriada = await avaliacaoService.criarAvaliacao(new Types.ObjectId(idEstabelecimento), idCriador);
      return reply.send({ avaliacaoCriada });
    } catch (error) {
      return reply.status(400).send({ error: (error as Error).message });
    }
  }

  static async desativarAvaliacao(req: FastifyRequest, reply: FastifyReply) {
    try {
      const { id } = req.params as { id: string };
      const avaliacaoDesativada = await avaliacaoService.desativarAvaliacao(id);

      return reply.send({ avaliacaoDesativada });
    } catch (error) {
      return reply.status(400).send({ error: (error as Error).message });
    }
  }

  static async listarAvaliacoes(_req: FastifyRequest, reply: FastifyReply) {
    try {
      const avaliacoes = await avaliacaoService.listarAvaliacoes();
      return reply.send({ avaliacoes });
    } catch (error) {
      return reply.status(400).send({ error: (error as Error).message });
    }
  }
}
