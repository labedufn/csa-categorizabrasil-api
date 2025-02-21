import { Estabelecimento } from "@models/estabelecimento.model";
import { IEstabelecimento } from "@interfaces/IEstabelecimento";
import { throwHandledError } from "@utils/throwHandledError";

export class EstabelecimentoService {
  /**
   * Cria um novo estabelecimento.
   * @param estabelecimentoData - Os dados do estabelecimento.
   * @returns O estabelecimento criado.
   */
  async criarEstabelecimento(estabelecimentoData: IEstabelecimento) {
    try {
      const novoEstabelecimento = await Estabelecimento.create({
        ...estabelecimentoData,
      });
      return novoEstabelecimento;
    } catch (error) {
      throwHandledError("Erro ao criar estabelecimento", error);
    }
  }

  /**
   * Edita um estabelecimento.
   * @param id - O identificador do estabelecimento.
   * @param dados - Dados parciais do estabelecimento.
   * @returns O estabelecimento editado.
   */
  async editarEstabelecimento(id: string, dados: Partial<IEstabelecimento>) {
    try {
      const estabelecimentoAtualizado = await Estabelecimento.findByIdAndUpdate(id, dados, { new: true });
      return estabelecimentoAtualizado;
    } catch (error) {
      throwHandledError("Erro ao editar estabelecimento", error);
    }
  }

  /**
   * Lista todos os estabelecimentos ativos.
   * @returns Uma lista de estabelecimentos com ativo = true.
   */
  async listarEstabelecimentos() {
    try {
      const estabelecimentosAtivos = await Estabelecimento.find({ ativo: true });
      return estabelecimentosAtivos;
    } catch (error) {
      throwHandledError("Erro ao listar estabelecimentos", error);
    }
  }

  /**
   * Desativa (ou exclui) um estabelecimento.
   * @param id - O identificador do estabelecimento.
   * @param alteradoPor - Identificador do usuário que desativou o estabelecimento.
   * @returns O estabelecimento desativado.
   */
  async desativarEstabelecimento(id: string, alteradoPor: string) {
    try {
      const estabelecimentoDesativado = await Estabelecimento.findByIdAndUpdate(
        id,
        { ativo: false, alteradoPor },
        { new: true },
      );
      return estabelecimentoDesativado;
    } catch (error) {
      throwHandledError("Erro ao desativar estabelecimento", error);
    }
  }
}
