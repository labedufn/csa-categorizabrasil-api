import { throwHandledError } from "@utils/throwHandledError";
import { Usuario } from "@models/usuario.model";
import { IUsuario } from "@interfaces/IUsuario";
import { compare, hash } from "bcryptjs";

export class UsuarioService {
  /**
   * Atualiza dados de um usuário.
   * @param id - Identificador do usuário.
   * @param data - Dados parciais do usuário.
   * @returns O usuário atualizado.
   */
  async atualizarUsuario(id: string, data: Partial<IUsuario>) {
    try {
      const user = await Usuario.findById(id);
      if (!user) {
        throw new Error("Usuário não encontrado");
      }
      const updatedUser = await Usuario.findByIdAndUpdate(id, data, { new: true });
      return updatedUser;
    } catch (error) {
      throwHandledError("Erro ao atualizar usuário", error);
    }
  }

  /**
   * Altera a senha de um usuário.
   * @param id - Identificador do usuário.
   * @param senhaAtual - Senha atual do usuário.
   * @param novaSenha - Nova senha para substituição.
   * @returns Uma mensagem de sucesso.
   */
  async alterarSenha(id: string, senhaAtual: string, novaSenha: string) {
    try {
      const user = await Usuario.findById(id);
      if (!user) {
        throw new Error("Usuário não encontrado");
      }

      const senhaValida = await compare(senhaAtual, user.senha);
      if (!senhaValida) {
        throw new Error("Senha atual inválida");
      }

      const novaSenhaHash = await hash(novaSenha, 10);
      await Usuario.findByIdAndUpdate(id, { senha: novaSenhaHash });

      return { message: "Senha atualizada com sucesso" };
    } catch (error) {
      throwHandledError("Erro ao alterar senha do usuário", error);
    }
  }

  /**
   * Lista usuários ativos.
   * @returns Uma lista de usuários com `ativo = true`.
   */
  async listarUsuarios() {
    try {
      const usuarios = await Usuario.find({ ativo: true });
      return usuarios;
    } catch (error) {
      throwHandledError("Erro ao listar usuários", error);
    }
  }

  /**
   * Lista usuários por instituição (apenas ativos).
   * @param instituicao - Instituição desejada.
   * @returns Usuários filtrados por instituição.
   */
  async listarUsuariosPorInstituicao(instituicao: string) {
    try {
      const usuarios = await Usuario.find({ ativo: true, instituicao });
      return usuarios;
    } catch (error) {
      throwHandledError("Erro ao listar usuários por instituição", error);
    }
  }

  /**
   * Busca um usuário por ID.
   * @param id - Identificador do usuário.
   * @returns O usuário encontrado ou `null` se não existir.
   */
  async buscarUsuarioPorId(id: string) {
    try {
      const usuario = await Usuario.findById(id);
      return usuario;
    } catch (error) {
      throwHandledError("Erro ao buscar usuário por ID", error);
    }
  }

  /**
   * Altera o tipo de um usuário (ex.: "ADMINISTRADOR", "GESTOR" ou "AVALIADOR").
   * @param idUsuario - Identificador do usuário.
   * @param novoTipo - Novo tipo de usuário.
   * @returns O usuário atualizado.
   */
  async alterarTipoUsuario(idUsuario: string, novoTipo: "ADMINISTRADOR" | "GESTOR" | "AVALIADOR") {
    try {
      const updatedUser = await Usuario.findByIdAndUpdate(idUsuario, { tipo: novoTipo }, { new: true });
      return updatedUser;
    } catch (error) {
      throwHandledError("Erro ao alterar tipo de usuário", error);
    }
  }

  /**
   * Ativa ou desativa um usuário.
   * @param idUsuario - Identificador do usuário.
   * @param ativo - Novo status do usuário.
   * @returns O usuário atualizado.
   */
  async alterarStatusUsuario(idUsuario: string, ativo: boolean) {
    try {
      const updatedUser = await Usuario.findByIdAndUpdate(idUsuario, { ativo }, { new: true });
      return updatedUser;
    } catch (error) {
      throwHandledError("Erro ao alterar status do usuário", error);
    }
  }
}
