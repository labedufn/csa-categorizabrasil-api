import { ManipuladorAlimentos } from "@models/manipuladorAlimentos.model";
import { IManipuladorAlimentos } from "@interfaces/IManipuladorAlimentos";
import { throwHandledError } from "@utils/throwHandledError";
import { Types } from "mongoose";

export class ManipuladorAlimentosService {
  /**
   * Cria um manipulador de alimentos.
   * @param idAvaliacao - O identificador da avaliação relacionado.
   * @param manipuladorAlimentosData - O manipulador de alimentos a ser criado.
   * @returns O manipulador de alimentos criado.
   */
  async criarManipuladorAlimentos(idAvaliacao: Types.ObjectId, manipuladorAlimentosData: IManipuladorAlimentos) {
    try {
      const novoManipulador = await ManipuladorAlimentos.create({
        idAvaliacao,
        informacoes: JSON.stringify(manipuladorAlimentosData),
      });
      return novoManipulador;
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
      const manipuladores = await ManipuladorAlimentos.find({ idAvaliacao });
      return manipuladores;
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
      const manipulador = await ManipuladorAlimentos.findById(idManipuladorAlimentos);
      return manipulador;
    } catch (error) {
      throwHandledError("Erro ao buscar manipulador de alimentos por ID", error);
    }
  }

  /**
   * Edita um manipulador de alimentos.
   * @param idManipuladorAlimentos - O identificador do manipulador de alimentos.
   * @param manipuladorAlimentosData - Os dados do manipulador de alimentos a serem editados.
   * @returns O manipulador de alimentos editado.
   */
  async editarManipuladorAlimentos(idManipuladorAlimentos: string, manipuladorAlimentosData: IManipuladorAlimentos) {
    try {
      const manipuladorAtualizado = await ManipuladorAlimentos.findByIdAndUpdate(
        idManipuladorAlimentos,
        { informacoes: JSON.stringify(manipuladorAlimentosData) },
        { new: true },
      );
      return manipuladorAtualizado;
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
      await ManipuladorAlimentos.findByIdAndDelete(idManipuladorAlimentos);
      return;
    } catch (error) {
      throwHandledError("Erro ao deletar manipulador de alimentos", error);
    }
  }
}
