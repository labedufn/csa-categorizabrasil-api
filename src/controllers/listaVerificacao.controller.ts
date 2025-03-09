import { ListaVerificacaoService } from "@services/listaVerificacao.service";
import { IAnaliseQualitativa } from "@interfaces/IAnaliseQualitativa";
import { IListaVerificacao } from "@interfaces/IListaVerificacao";
import { FastifyRequest, FastifyReply } from "fastify";
import { Types } from "mongoose";

const listaVerificacaoService = new ListaVerificacaoService();

export class ListaVerificacaoController {
  static async criarListaVerificacao(req: FastifyRequest, reply: FastifyReply) {
    try {
      const { idAvaliacao } = req.params as { idAvaliacao: Types.ObjectId };

      const listaVerificacaoCriada = await listaVerificacaoService.criarListaVerificacao(
        idAvaliacao.toString(),
        req.body as IListaVerificacao,
      );

      reply.send({ listaVerificacaoCriada });
    } catch (error) {
      reply.status(400).send({ error: (error as Error).message });
    }
  }

  static async buscarListaVerificacaoPorAvaliacao(req: FastifyRequest, reply: FastifyReply) {
    try {
      const { idAvaliacao } = req.params as { idAvaliacao: string };
      const listaVerificacao = await listaVerificacaoService.buscarListaVerificacaoPorAvaliacao(idAvaliacao);

      reply.send({ listaVerificacao });
    } catch (error) {
      reply.status(400).send({ error: (error as Error).message });
    }
  }

  static async buscarListaVerificacaoPorId(req: FastifyRequest, reply: FastifyReply) {
    try {
      const { idListaVerificacao } = req.params as { idListaVerificacao: string };
      const listaVerificacao = await listaVerificacaoService.buscarListaVerificacaoPorId(idListaVerificacao);

      reply.send({ listaVerificacao });
    } catch (error) {
      reply.status(400).send({ error: (error as Error).message });
    }
  }

  static async editarListaVerificacao(req: FastifyRequest, reply: FastifyReply) {
    try {
      const { idListaVerificacao } = req.params as { idListaVerificacao: string };
      const listaVerificacao = req.body as IListaVerificacao;

      const listaVerificacaoAtualizada = await listaVerificacaoService.editarListaVerificacao(
        idListaVerificacao,
        listaVerificacao,
      );

      reply.send({ listaVerificacaoAtualizada });
    } catch (error) {
      reply.status(400).send({ error: (error as Error).message });
    }
  }

  static async deletarListaVerificacao(req: FastifyRequest, reply: FastifyReply) {
    try {
      const { idListaVerificacao } = req.params as { idListaVerificacao: string };
      await listaVerificacaoService.deletarListaVerificacao(idListaVerificacao);

      reply.send({ message: "Lista de verificação deletada com sucesso." });
    } catch (error) {
      reply.status(400).send({ error: (error as Error).message });
    }
  }
}
