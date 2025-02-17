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
    const gestorCriado = await prisma.gestores.create({
      data: {
        idAvaliacao,
        informacoes: JSON.stringify(gestor),
      },
    });

    return gestorCriado;
  }
}
