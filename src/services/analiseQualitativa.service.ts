import { IAnaliseQualitativa } from "@interfaces/IAnaliseQualitativa";
import { throwHandledError } from "@utils/throwHandledError";
import { prisma } from "@config/prisma";

export class AnaliseQualitativaService {
  /**
   * Cria uma análise qualitativa.
   * @param idAvaliacao - O identificador da avaliação relacionado.
   * @param analiseQualitativa - A análise qualitativa a ser criada.
   * @returns A análise qualitativa criada.
   */
  async criarAnaliseQualitativa(idAvaliacao: string, analiseQualitativa: IAnaliseQualitativa) {
    try {
      return await prisma.analiseQualitativa.create({
        data: {
          idAvaliacao,
          informacoes: JSON.stringify(analiseQualitativa),
        },
      });
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
      return await prisma.analiseQualitativa.findMany({
        where: { idAvaliacao },
      });
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
      return await prisma.analiseQualitativa.findUnique({
        where: { id: idAnaliseQualitativa },
      });
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
      return await prisma.analiseQualitativa.update({
        where: { id: idAnaliseQualitativa },
        data: { informacoes: JSON.stringify(analiseQualitativa) },
      });
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
      await prisma.analiseQualitativa.delete({
        where: { id: idAnaliseQualitativa },
      });
      return;
    } catch (error) {
      throwHandledError("Erro ao deletar análise qualitativa", error);
    }
  }
}
