import { GestorService } from "@services/GestorService";
import { FastifyRequest, FastifyReply } from "fastify";
import { IGestor } from "@interfaces/IGestor";

const gestorService = new GestorService();

export class GestorController {
  static async criarGestor(req: FastifyRequest, reply: FastifyReply) {
    try {
      const { idAvaliacao } = req.params as { idAvaliacao: string };

      const gestorData = req.body as Omit<IGestor, "idAvaliacao">;

      const gestorCompleto: IGestor = {
        ...gestorData,
        idAvaliacao,
      };

      const gestorCriado = await gestorService.criarGestor(idAvaliacao, gestorCompleto);
      reply.send({ gestorCriado });
    } catch (error) {
      reply.status(400).send({ error: (error as Error).message });
    }
  }
}
