import { IManipuladorAlimentos } from "@interfaces/IManipuladorAlimento";
import { throwHandledError } from "@utils/throwHandledError";
import { prisma } from "@config/prisma";

export class ManipuladorAlimentosService {
  /**
   * Cria um novo Gestor.
   * @param idAvaliacao - O identificador da avaliação relacionado.
   * @param gestor - Os dados do gestor, conforme a interface IGestor.
   * @returns O gestor criado no banco de dados.
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
