import { ListaVerificacao } from "@models/listaVerificacao.model";
import { IListaVerificacao } from "@interfaces/IListaVerificacao";
import { throwHandledError } from "@utils/throwHandledError";

export class ListaVerificacaoService {
  /**
   * Cria uma lista de verificação.
   * @param idAvaliacao - O identificador da avaliação relacionado.
   * @returns A lista de verificação criada.
   */
  async criarListaVerificacao(idAvaliacao: string, listaVerificacao: IListaVerificacao) {
    try {
      const novaListaVerificacao = await ListaVerificacao.create({
        idAvaliacao,
        listaVerificacao: listaVerificacao.toObject(),
      });
      return novaListaVerificacao;
    } catch (error) {
      throwHandledError("Erro ao criar lista de verificação", error);
    }
  }

  /**
   * Busca todas as listas de verificação por avaliação.
   * @param idAvaliacao - O identificador da avaliação.
   * @returns Todas as listas de verificação encontradas.
   */
  async buscarListaVerificacaoPorAvaliacao(idAvaliacao: string) {
    try {
      const listasVerificacao = await ListaVerificacao.find({ idAvaliacao });
      return listasVerificacao;
    } catch (error) {
      throwHandledError("Erro ao buscar lista verificação por avaliação", error);
    }
  }

  /**
   * Busca uma lista de verificação pelo ID.
   * @param idListaVerificacao - O identificador da lista de verificação.
   * @returns A lista de verificação encontrada.
   */
  async buscarListaVerificacaoPorId(idListaVerificacao: string) {
    try {
      const listaVerificacao = await ListaVerificacao.findById(idListaVerificacao);
      return listaVerificacao;
    } catch (error) {
      throwHandledError("Erro ao buscar lista verificação por ID", error);
    }
  }

  /**
   * Edita uma lista de verificação.
   * @param idListaVerificacao - O identificador da lista de verificação.
   * @param listaVerificacao - A lista de verificação a ser editada.
   * @returns A lista de verificação editada.
   */
  async editarListaVerificacao(idListaVerificacao: string, listaVerificacao: IListaVerificacao) {
    try {
      const listaVerificacaoAtualizada = await ListaVerificacao.findByIdAndUpdate(
        idListaVerificacao,
        { listaVerificacao: listaVerificacao.toObject() },
        { new: true },
      );
      return listaVerificacaoAtualizada;
    } catch (error) {
      throwHandledError("Erro ao editar lista de Verificação", error);
    }
  }

  /**
   * Deleta uma lista de verificação pelo ID.
   * @param idListaVerificacao - O identificador da lista de verificação.
   */
  async deletarListaVerificacao(idListaVerificacao: string) {
    try {
      await ListaVerificacao.findByIdAndDelete(idListaVerificacao);
      return;
    } catch (error) {
      throwHandledError("Erro ao deletar lista de verificação", error);
    }
  }
}
