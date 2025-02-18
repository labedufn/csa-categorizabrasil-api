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
}
