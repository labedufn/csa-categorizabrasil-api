import { GestorService } from "@services/GestorService";
import { FastifyRequest, FastifyReply } from "fastify";
import { IGestor } from "@interfaces/IGestor";

const gestorService = new GestorService();

export class GestorController {
  static async criarGestor(req: FastifyRequest, reply: FastifyReply) {
    try {
      const { idAvaliacao } = req.params as { idAvaliacao: string };

      const gestorCriado = await gestorService.criarGestor(idAvaliacao, {
        ...(req.body as IGestor),
        idAvaliacao,
      });

      reply.send({ gestorCriado });
    } catch (error) {
      reply.status(400).send({ error: (error as Error).message });
    }
  }

  static async buscarGestoresPorAvaliacao(req: FastifyRequest, reply: FastifyReply) {
    try {
      const { idAvaliacao } = req.params as { idAvaliacao: string };
      const gestores = await gestorService.buscarGestoresPorAvaliacao(idAvaliacao);

      reply.send({ gestores });
    } catch (error) {
      reply.status(400).send({ error: (error as Error).message });
    }
  }

  static async buscarGestorPorId(req: FastifyRequest, reply: FastifyReply) {
    try {
      const { idGestor } = req.params as { idGestor: string };
      const gestor = await gestorService.buscarGestorPorId(idGestor);

      reply.send({ gestor });
    } catch (error) {
      reply.status(400).send({ error: (error as Error).message });
    }
  }

  static async editarGestor(req: FastifyRequest, reply: FastifyReply) {
    try {
      const { idGestor } = req.params as { idGestor: string };
      const gestorData = req.body as IGestor;

      const gestorAtualizado = await gestorService.editarGestor(idGestor, gestorData);

      reply.send({ gestorAtualizado });
    } catch (error) {
      reply.status(400).send({ error: (error as Error).message });
    }
  }

  static async deletarGestor(req: FastifyRequest, reply: FastifyReply) {
    try {
      const { idGestor } = req.params as { idGestor: string };
      await gestorService.deletarGestor(idGestor);

      reply.send({ message: "Gestor deletado com sucesso." });
    } catch (error) {
      reply.status(400).send({ error: (error as Error).message });
    }
  }
}
