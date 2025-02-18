import { ManipuladorAlimentosService } from "@services/ManipuladorAlimentosService";
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
}
