import { IEstabelecimento } from "@interfaces/IEstabelecimento";
import { throwHandledError } from "@utils/throwHandledError";
import { prisma } from "@config/prisma";

export class EstabelecimentoService {
  /**
   * Cria um novo estabelecimento.
   * @param estabelecimento - Os dados do estabelecimento.
   * @returns O estabelecimento criado.
   */
  async criarEstabelecimento(estabelecimento: IEstabelecimento) {
    try {
      return await prisma.estabelecimento.create({
        data: {
          ...estabelecimento,
        },
      });
    } catch (error) {
      throwHandledError("Erro ao criar estabelecimento", error);
    }
  }

  /**
   * Edita um estabelecimento.
   * @param id - O identificador do estabelecimento.
   * @param dados - Os dados do estabelecimento a serem editados (exceto o ativo).
   * @returns O estabelecimento editado.
   */
  async editarEstabelecimento(id: string, dados: Partial<IEstabelecimento>) {
    try {
      return await prisma.estabelecimento.update({
        where: { id },
        data: dados,
      });
    } catch (error) {
      throwHandledError("Erro ao editar estabelecimento", error);
    }
  }

  /**
   * Lista todos os estabelecimentos ativos.
   * @returns Os estabelecimentos ativos.
   */
  async listarEstabelecimentos() {
    try {
      return await prisma.estabelecimento.findMany({
        where: { ativo: true },
      });
    } catch (error) {
      throwHandledError("Erro ao listar estabelecimentos", error);
    }
  }

  /**
   * Desativa/Exclui um estabelecimento.
   * @param id - O identificador do estabelecimento.
   * @param alteradoPor - O identificador do usuário que desativou o estabelecimento.
   * @returns O estabelecimento desativado.
   */
  async desativarEstabelecimento(id: string, alteradoPor: string) {
    try {
      return await prisma.estabelecimento.update({
        where: { id },
        data: {
          ativo: false,
          alteradoPor,
        },
      });
    } catch (error) {
      throwHandledError("Erro ao desativar estabelecimento", error);
    }
  }
}
