import { throwHandledError } from "@utils/throwHandledError";
import { IGestor } from "@interfaces/IGestor";
import { prisma } from "@config/prisma";

export class GestorService {
  /**
   * Cria um novo Gestor.
   * @param idAvaliacao - O identificador da avaliação relacionado.
   * @param gestor - Os dados do gestor, conforme a interface IGestor.
   * @returns O gestor criado no banco de dados.
   */
  async criarGestor(idAvaliacao: string, gestor: IGestor) {
    try {
      return await prisma.gestores.create({
        data: {
          idAvaliacao,
          informacoes: JSON.stringify(gestor),
        },
      });
    } catch (error) {
      throwHandledError("Erro ao criar gestor", error);
    }
  }

  /**
   * Editar um Gestor.
   * @param idGestor - O identificador do gestor.
   * @param gestor - Os dados do gestor, conforme a interface IGestor.
   * @returns O gestor atualizado no banco de dados.
   */
  async editarGestor(idGestor: string, gestor: IGestor) {
    try {
      return await prisma.gestores.update({
        where: { id: idGestor },
        data: { informacoes: JSON.stringify(gestor) },
      });
    } catch (error) {
      throwHandledError("Erro ao editar gestor", error);
    }
  }

  /**
   * Busca um Gestor pelo ID.
   * @param idGestor - O identificador do gestor.
   * @returns O gestor encontrado.
   */
  async buscarGestorPorId(idGestor: string) {
    try {
      return await prisma.gestores.findUnique({
        where: { id: idGestor },
      });
    } catch (error) {
      throwHandledError("Erro ao buscar gestor por ID", error);
    }
  }

  /**
   * Deleta um Gestor pelo ID.
   * @param idGestor - O identificador do gestor.
   */
  async deletarGestor(idGestor: string) {
    try {
      await prisma.gestores.delete({
        where: { id: idGestor },
      });
      return; // ou apenas 'return' sem valor
    } catch (error) {
      throwHandledError("Erro ao deletar gestor", error);
    }
  }

  /**
   * Busca todos os Gestores de uma Avaliação.
   * @param idAvaliacao - O identificador da avaliação.
   * @returns Todos os gestores encontrados.
   */
  async buscarGestoresPorAvaliacao(idAvaliacao: string) {
    try {
      return await prisma.gestores.findMany({
        where: { idAvaliacao },
      });
    } catch (error) {
      throwHandledError("Erro ao buscar gestores por avaliação", error);
    }
  }
}
