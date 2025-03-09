import { throwHandledError } from "@utils/throwHandledError";
import { Avaliacao } from "@models/avaliacao.model";
import { IAvaliacao } from "@interfaces/IAvaliacao";
import { Types } from "mongoose";

export class AvaliacaoService {
  /**
   * Cria uma nova avaliação.
   * @param avaliacao - Os dados da avaliação.
   * @param idUsuario - O identificador do usuário que criou a avaliação.
   * @returns A avaliação criada.
   */
  async criarAvaliacao(idEstabelecimento: Types.ObjectId, idUsuario: string) {
    try {
      const novaAvaliacao = await Avaliacao.create({
        idEstabelecimento,
        idCriador: idUsuario,
      });
      const avaliacaoCriada = {
        id: novaAvaliacao._id.toString(),
        idEstabelecimento: novaAvaliacao.idEstabelecimento.toString(),
        criadoEm: novaAvaliacao.criadoEm,
        alteradoEm: novaAvaliacao.alteradoEm,
        ativo: novaAvaliacao.ativo,
      };
      return avaliacaoCriada;
    } catch (error) {
      throwHandledError("Erro ao criar avaliação", error);
    }
  }

  /**
   * Lista todas as avaliações ativas.
   * @returns As avaliações ativas.
   */
  async listarAvaliacoes() {
    try {
      const avaliacoesAtivas = await Avaliacao.find({ ativo: true });
      return avaliacoesAtivas;
    } catch (error) {
      throwHandledError("Erro ao listar avaliações", error);
    }
  }

  /**
   * Desativa uma avaliação.
   * @param idAvaliacao - O identificador da avaliação.
   * @returns A avaliação desativada.
   */
  async desativarAvaliacao(idAvaliacao: string) {
    try {
      const avaliacaoDesativada = await Avaliacao.findByIdAndUpdate(idAvaliacao, { ativo: false }, { new: true });
      return avaliacaoDesativada;
    } catch (error) {
      throwHandledError("Erro ao desativar avaliação", error);
    }
  }
}
