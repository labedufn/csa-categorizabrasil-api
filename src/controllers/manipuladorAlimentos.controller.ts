import { ManipuladorAlimentosService } from "@services/manipuladorAlimentos.service";
import { IManipuladorAlimentos } from "@interfaces/IManipuladorAlimento";
import { FastifyRequest, FastifyReply } from "fastify";

const manipuladorAlimentosService = new ManipuladorAlimentosService();

export class ManipuladorAlimentosController {
  static async criarManipuladorAlimentos(req: FastifyRequest, reply: FastifyReply) {
    try {
      const { idAvaliacao } = req.params as { idAvaliacao: string };

      const manipuladorAlimentosCriado = await manipuladorAlimentosService.criarManipuladorAlimentos(idAvaliacao, {
        ...(req.body as IManipuladorAlimentos),
        idAvaliacao,
      });

      reply.send({ manipuladorAlimentosCriado });
    } catch (error) {
      reply.status(400).send({ error: (error as Error).message });
    }
  }

  static async buscarManipuladoresAlimentosPorAvaliacao(req: FastifyRequest, reply: FastifyReply) {
    try {
      const { idAvaliacao } = req.params as { idAvaliacao: string };
      const manipuladoresAlimentos =
        await manipuladorAlimentosService.buscarManipuladoresAlimentosPorAvaliacao(idAvaliacao);

      reply.send({ manipuladoresAlimentos });
    } catch (error) {
      reply.status(400).send({ error: (error as Error).message });
    }
  }

  static async buscarManipuladorAlimentosPorId(req: FastifyRequest, reply: FastifyReply) {
    try {
      const { idManipuladorAlimentos } = req.params as { idManipuladorAlimentos: string };
      const manipuladorAlimentos =
        await manipuladorAlimentosService.buscarManipuladorAlimentosPorId(idManipuladorAlimentos);

      reply.send({ manipuladorAlimentos });
    } catch (error) {
      reply.status(400).send({ error: (error as Error).message });
    }
  }

  static async editarManipuladorAlimentos(req: FastifyRequest, reply: FastifyReply) {
    try {
      const { idManipuladorAlimentos } = req.params as { idManipuladorAlimentos: string };
      const manipuladorAlimentosData = req.body as IManipuladorAlimentos;

      const manipuladorAlimentosAtualizado = await manipuladorAlimentosService.editarManipuladorAlimentos(
        idManipuladorAlimentos,
        manipuladorAlimentosData,
      );

      reply.send({ manipuladorAlimentosAtualizado });
    } catch (error) {
      reply.status(400).send({ error: (error as Error).message });
    }
  }

  static async deletarManipuladorAlimentos(req: FastifyRequest, reply: FastifyReply) {
    try {
      const { idManipuladorAlimentos } = req.params as { idManipuladorAlimentos: string };
      await manipuladorAlimentosService.deletarManipuladorAlimentos(idManipuladorAlimentos);

      reply.send({ message: "Manipulador de alimentos deletado com sucesso." });
    } catch (error) {
      reply.status(400).send({ error: (error as Error).message });
    }
  }
}
