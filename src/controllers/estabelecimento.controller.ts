import { EstabelecimentoService } from "@services/estabelecimento.service";
import { IEstabelecimento } from "@interfaces/IEstabelecimento";
import { FastifyRequest, FastifyReply } from "fastify";

const estabelecimentoService = new EstabelecimentoService();

export class EstabelecimentoController {
  static async criarEstabelecimento(req: FastifyRequest, reply: FastifyReply) {
    try {
      const novoEstabelecimento: IEstabelecimento = {
        ...(req.body as IEstabelecimento),
        alteradoPor: req.usuario.id,
      };

      const estabelecimentoCriado = await estabelecimentoService.criarEstabelecimento(novoEstabelecimento);
      reply.send({ estabelecimentoCriado });
    } catch (error) {
      reply.status(400).send({ error: (error as Error).message });
    }
  }

  static async editarEstabelecimento(req: FastifyRequest, reply: FastifyReply) {
    try {
      const { id: estabelecimentoId } = req.params as { id: string };

      const dadosParaAtualizar: Partial<IEstabelecimento> = {
        ...(req.body as Partial<IEstabelecimento>),
        alteradoPor: req.usuario.id,
      };

      const estabelecimentoAtualizado = await estabelecimentoService.editarEstabelecimento(
        estabelecimentoId,
        dadosParaAtualizar,
      );

      reply.send({ estabelecimentoAtualizado });
    } catch (error) {
      reply.status(400).send({ error: (error as Error).message });
    }
  }

  static async listarEstabelecimentos(_req: FastifyRequest, reply: FastifyReply) {
    try {
      const estabelecimentos = await estabelecimentoService.listarEstabelecimentos();
      reply.send({ estabelecimentos });
    } catch (error) {
      reply.status(400).send({ error: (error as Error).message });
    }
  }

  static async desativarEstabelecimento(req: FastifyRequest, reply: FastifyReply) {
    try {
      const { id: estabelecimentoId } = req.params as { id: string };
      const alteradoPor = req.usuario.id;

      const estabelecimentoDesativado = await estabelecimentoService.desativarEstabelecimento(
        estabelecimentoId,
        alteradoPor,
      );

      reply.send({ estabelecimentoDesativado });
    } catch (error) {
      reply.status(400).send({ error: (error as Error).message });
    }
  }
}
