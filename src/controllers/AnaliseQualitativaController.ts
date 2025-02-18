import { AnaliseQualitativaService } from "@services/AnaliseQualitativaService";
import { IAnaliseQualitativa } from "@interfaces/IAnaliseQualitativa";
import { FastifyRequest, FastifyReply } from "fastify";

const analiseQualitativaService = new AnaliseQualitativaService();

export class AnaliseQualitativaController {
  static async criarAnaliseQualitativa(req: FastifyRequest, reply: FastifyReply) {
    try {
      const { idAvaliacao } = req.params as { idAvaliacao: string };

      const analiseQualitativaCriada = await analiseQualitativaService.criarAnaliseQualitativa(idAvaliacao, {
        ...(req.body as IAnaliseQualitativa),
        idAvaliacao,
      });

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
      const analiseQualitativaData = req.body as IAnaliseQualitativa;

      const analiseQualitativaAtualizada = await analiseQualitativaService.editarAnaliseQualitativa(
        idAnaliseQualitativa,
        analiseQualitativaData,
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
