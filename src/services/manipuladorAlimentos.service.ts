import { IManipuladorAlimentos } from "@interfaces/IManipuladorAlimento";
import { throwHandledError } from "@utils/throwHandledError";
import { prisma } from "@config/prisma";

export class ManipuladorAlimentosService {
  /**
   * Cria um manipulador de alimentos.
   * @param idAvaliacao - O identificador da avaliação relacionado.
   * @param manipuladorAlimentos - O manipulador de alimentos a ser criado.
   * @returns O manipulador de alimentos criado.
   */
  async criarManipuladorAlimentos(idAvaliacao: string, manipuladorAlimentos: IManipuladorAlimentos) {
    try {
      return await prisma.manipuladorAlimentos.create({
        data: {
          idAvaliacao,
          informacoes: JSON.stringify(manipuladorAlimentos),
        },
      });
    } catch (error) {
      throwHandledError("Erro ao criar manipulador de alimentos", error);
    }
  }

  /**
   * Busca todos os manipuladores de alimentos por avaliação.
   * @param idAvaliacao - O identificador da avaliação.
   * @returns Todos os manipuladores de alimentos encontrados.
   */
  async buscarManipuladoresAlimentosPorAvaliacao(idAvaliacao: string) {
    try {
      return await prisma.manipuladorAlimentos.findMany({
        where: { idAvaliacao },
      });
    } catch (error) {
      throwHandledError("Erro ao buscar manipuladores de alimentos por avaliação", error);
    }
  }

  /**
   * Busca um manipulador de alimentos pelo ID.
   * @param idManipuladorAlimentos - O identificador do manipulador de alimentos.
   * @returns O manipulador de alimentos encontrado.
   */
  async buscarManipuladorAlimentosPorId(idManipuladorAlimentos: string) {
    try {
      return await prisma.manipuladorAlimentos.findUnique({
        where: { id: idManipuladorAlimentos },
      });
    } catch (error) {
      throwHandledError("Erro ao buscar manipulador de alimentos por ID", error);
    }
  }

  /**
   * Edita um manipulador de alimentos.
   * @param idManipuladorAlimentos - O identificador do manipulador de alimentos.
   * @param manipuladorAlimentos - O manipulador de alimentos a ser editado.
   * @returns O manipulador de alimentos editado.
   */
  async editarManipuladorAlimentos(idManipuladorAlimentos: string, manipuladorAlimentos: IManipuladorAlimentos) {
    try {
      return await prisma.manipuladorAlimentos.update({
        where: { id: idManipuladorAlimentos },
        data: { informacoes: JSON.stringify(manipuladorAlimentos) },
      });
    } catch (error) {
      throwHandledError("Erro ao editar manipulador de alimentos", error);
    }
  }

  /**
   * Deleta um manipulador de alimentos pelo ID.
   * @param idManipuladorAlimentos - O identificador do manipulador de alimentos.
   */
  async deletarManipuladorAlimentos(idManipuladorAlimentos: string) {
    try {
      await prisma.gestores.delete({
        where: { id: idManipuladorAlimentos },
      });
      return;
    } catch (error) {
      throwHandledError("Erro ao deletar manipulador de alimentos", error);
    }
  }
}
