import { AnaliseQualitativaService } from "@services/analiseQualitativa.service";
import { IAnaliseQualitativa } from "@interfaces/IAnaliseQualitativa";
import { FastifyRequest, FastifyReply } from "fastify";
import { Types } from "mongoose";

const analiseQualitativaService = new AnaliseQualitativaService();

export class AnaliseQualitativaController {
  static async criarAnaliseQualitativa(req: FastifyRequest, reply: FastifyReply) {
    try {
      const { idAvaliacao } = req.params as { idAvaliacao: Types.ObjectId };

      const analiseQualitativaCriada = await analiseQualitativaService.criarAnaliseQualitativa(
        idAvaliacao.toString(),
        req.body as IAnaliseQualitativa,
      );

      reply.send({ analiseQualitativaCriada });
    } catch (error) {
      reply.status(400).send({ error: (error as Error).message });
    }
  }

  static async buscarAnaliseQualitativaPorAvaliacao(req: FastifyRequest, reply: FastifyReply) {
    try {
      const { idAvaliacao } = req.params as { idAvaliacao: string };
      const analiseQualitativa = await analiseQualitativaService.buscarAnaliseQualitativaPorAvaliacao(idAvaliacao);

      reply.send({ analiseQualitativa });
    } catch (error) {
      reply.status(400).send({ error: (error as Error).message });
    }
  }

  static async buscarAnaliseQualitativaPorId(req: FastifyRequest, reply: FastifyReply) {
    try {
      const { idAnaliseQualitativa } = req.params as { idAnaliseQualitativa: string };
      const analiseQualitativa = await analiseQualitativaService.buscarAnaliseQualitativaPorId(idAnaliseQualitativa);

      reply.send({ analiseQualitativa });
    } catch (error) {
      reply.status(400).send({ error: (error as Error).message });
    }
  }

  static async editarAnaliseQualitativa(req: FastifyRequest, reply: FastifyReply) {
    try {
      const { idAnaliseQualitativa } = req.params as { idAnaliseQualitativa: string };
      const analiseQualitativa = req.body as IAnaliseQualitativa;

      const analiseQualitativaAtualizada = await analiseQualitativaService.editarAnaliseQualitativa(
        idAnaliseQualitativa,
        analiseQualitativa,
      );

      reply.send({ analiseQualitativaAtualizada });
    } catch (error) {
      reply.status(400).send({ error: (error as Error).message });
    }
  }

  static async deletarAnaliseQualitativa(req: FastifyRequest, reply: FastifyReply) {
    try {
      const { idAnaliseQualitativa } = req.params as { idAnaliseQualitativa: string };
      await analiseQualitativaService.deletarAnaliseQualitativa(idAnaliseQualitativa);

      reply.send({ message: "Análise qualitativa deletada com sucesso." });
    } catch (error) {
      reply.status(400).send({ error: (error as Error).message });
    }
  }
}
