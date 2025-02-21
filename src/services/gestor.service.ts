import { throwHandledError } from "@utils/throwHandledError";
import { Gestor } from "@models/gestor.model";
import { IGestor } from "@interfaces/IGestor";
import { Types } from "mongoose";

export class GestorService {
  /**
   * Cria um novo gestor.
   * @param idAvaliacao - O identificador da avaliação relacionado.
   * @param gestor - Os dados do gestor, conforme a interface IGestor.
   * @returns O gestor criado no banco de dados.
   */
  async criarGestor(idAvaliacao: Types.ObjectId, gestor: IGestor) {
    try {
      const novoGestor = await Gestor.create({
        idAvaliacao,
        informacoes: JSON.stringify(gestor),
      });
      return novoGestor;
    } catch (error) {
      throwHandledError("Erro ao criar gestor", error);
    }
  }

  /**
   * Busca todos os gestores de uma avaliação.
   * @param idAvaliacao - O identificador da avaliação.
   * @returns Todos os gestores encontrados.
   */
  async buscarGestoresPorAvaliacao(idAvaliacao: string) {
    try {
      const gestoresEncontrados = await Gestor.find({ idAvaliacao });
      return gestoresEncontrados;
    } catch (error) {
      throwHandledError("Erro ao buscar gestores por avaliação", error);
    }
  }

  /**
   * Busca um gestor pelo ID.
   * @param idGestor - O identificador do gestor.
   * @returns O gestor encontrado.
   */
  async buscarGestorPorId(idGestor: string) {
    try {
      const gestorEncontrado = await Gestor.findById(idGestor);
      return gestorEncontrado;
    } catch (error) {
      throwHandledError("Erro ao buscar gestor por ID", error);
    }
  }

  /**
   * Edita um gestor.
   * @param idGestor - O identificador do gestor.
   * @param gestor - Os dados do gestor, conforme a interface IGestor.
   * @returns O gestor atualizado no banco de dados.
   */
  async editarGestor(idGestor: string, gestor: IGestor) {
    try {
      const gestorAtualizado = await Gestor.findByIdAndUpdate(
        idGestor,
        { informacoes: JSON.stringify(gestor) },
        { new: true },
      );
      return gestorAtualizado;
    } catch (error) {
      throwHandledError("Erro ao editar gestor", error);
    }
  }

  /**
   * Deleta um gestor pelo ID.
   * @param idGestor - O identificador do gestor.
   */
  async deletarGestor(idGestor: string) {
    try {
      await Gestor.findByIdAndDelete(idGestor);
      return;
    } catch (error) {
      throwHandledError("Erro ao deletar gestor", error);
    }
  }
}
