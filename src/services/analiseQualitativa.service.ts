import { AnaliseQualitativa } from "@models/analiseQualitativa.model";
import { IAnaliseQualitativa } from "@interfaces/IAnaliseQualitativa";
import { throwHandledError } from "@utils/throwHandledError";

export class AnaliseQualitativaService {
  /**
   * Cria uma análise qualitativa.
   * @param idAvaliacao - O identificador da avaliação relacionado.
   * @param analiseQualitativa - A análise qualitativa a ser criada.
   * @returns A análise qualitativa criada.
   */
  async criarAnaliseQualitativa(idAvaliacao: string, analiseQualitativa: IAnaliseQualitativa) {
    try {
      const novaAnalise = await AnaliseQualitativa.create({
        idAvaliacao,
        ...analiseQualitativa.toObject(),
      });
      return novaAnalise;
    } catch (error) {
      throwHandledError("Erro ao criar análise qualitativa", error);
    }
  }

  /**
   * Busca todas as análises qualitativas por avaliação.
   * @param idAvaliacao - O identificador da avaliação.
   * @returns Todas as análises qualitativas encontradas.
   */
  async buscarAnaliseQualitativaPorAvaliacao(idAvaliacao: string) {
    try {
      const analises = await AnaliseQualitativa.find({ idAvaliacao });
      return analises;
    } catch (error) {
      throwHandledError("Erro ao buscar análise qualitativa por avaliação", error);
    }
  }

  /**
   * Busca uma análise qualitativa pelo ID.
   * @param idAnaliseQualitativa - O identificador da análise qualitativa.
   * @returns A análise qualitativa encontrada.
   */
  async buscarAnaliseQualitativaPorId(idAnaliseQualitativa: string) {
    try {
      const analise = await AnaliseQualitativa.findById(idAnaliseQualitativa);
      return analise;
    } catch (error) {
      throwHandledError("Erro ao buscar análise qualitativa por ID", error);
    }
  }

  /**
   * Edita uma análise qualitativa.
   * @param idAnaliseQualitativa - O identificador da análise qualitativa.
   * @param analiseQualitativa - A análise qualitativa a ser editada.
   * @returns A análise qualitativa editada.
   */
  async editarAnaliseQualitativa(idAnaliseQualitativa: string, analiseQualitativa: IAnaliseQualitativa) {
    try {
      const analiseAtualizada = await AnaliseQualitativa.findByIdAndUpdate(
        idAnaliseQualitativa,
        { ...analiseQualitativa.toObject() },
        { new: true },
      );
      return analiseAtualizada;
    } catch (error) {
      throwHandledError("Erro ao editar análise qualitativa", error);
    }
  }

  /**
   * Deleta uma análise qualitativa pelo ID.
   * @param idAnaliseQualitativa - O identificador da análise qualitativa.
   */
  async deletarAnaliseQualitativa(idAnaliseQualitativa: string) {
    try {
      await AnaliseQualitativa.findByIdAndDelete(idAnaliseQualitativa);
      return;
    } catch (error) {
      throwHandledError("Erro ao deletar análise qualitativa", error);
    }
  }
}
