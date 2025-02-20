import { throwHandledError } from "@utils/throwHandledError";
import { IAvaliacao } from "@interfaces/IAvaliacao";
import { prisma } from "@config/prisma";

export class AvaliacaoService {
  /**
   * Cria uma nova avaliação.
   * @param avaliacao - Os dados da avaliação.
   * @param idUsuario - O identificador do usuário que criou a avaliação.
   * @returns A avaliação criada.
   */
  async criarAvaliacao(avaliacao: IAvaliacao, idUsuario: string) {
    try {
      return await prisma.avaliacao.create({
        data: {
          ...avaliacao,
          idCriador: idUsuario,
        },
      });
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
      return await prisma.avaliacao.findMany({
        where: { ativo: true },
      });
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
      return await prisma.avaliacao.update({
        where: { id: idAvaliacao },
        data: { ativo: false },
      });
    } catch (error) {
      throwHandledError("Erro ao desativar avaliação", error);
    }
  }
}
