import { throwHandledError } from "@utils/throwHandledError";
import { IUsuario } from "@interfaces/IUsuario";
import { compare, hash } from "bcryptjs";
import { prisma } from "@config/prisma";

export class UsuarioService {
  /**
   * Atualiza dados de um usuário.
   * @param id - Identificador do usuário no banco.
   * @param data - Dados de usuário (parcial, pois nem sempre todos os campos são enviados).
   * @returns O usuário atualizado.
   */
  async atualizarUsuario(id: string, data: Partial<IUsuario>) {
    try {
      const usuario = await prisma.usuario.findUnique({ where: { id } });
      if (!usuario) {
        throw new Error("Usuário não encontrado");
      }

      const usuarioAtualizado = await prisma.usuario.update({
        where: { id },
        data,
      });

      return usuarioAtualizado;
    } catch (error) {
      throwHandledError("Erro ao atualizar usuário", error);
    }
  }

  /**
   * Altera a senha de um usuário.
   * @param id - Identificador do usuário no banco.
   * @param senhaAtual - Senha atual do usuário.
   * @param novaSenha - Nova senha para substituição.
   * @returns Uma mensagem de sucesso caso tudo corra bem.
   */
  async alterarSenha(id: string, senhaAtual: string, novaSenha: string) {
    try {
      const usuario = await prisma.usuario.findUnique({ where: { id } });
      if (!usuario) {
        throw new Error("Usuário não encontrado");
      }

      const senhaValida = await compare(senhaAtual, usuario.senha);
      if (!senhaValida) {
        throw new Error("Senha atual inválida");
      }

      const novaSenhaHash = await hash(novaSenha, 10);

      await prisma.usuario.update({
        where: { id },
        data: { senha: novaSenhaHash },
      });

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
      const usuarios = await prisma.usuario.findMany({ where: { ativo: true } });
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
      const usuarios = await prisma.usuario.findMany({
        where: {
          ativo: true,
          instituicao,
        },
      });
      return usuarios;
    } catch (error) {
      throwHandledError("Erro ao listar usuários por instituição", error);
    }
  }

  /**
   * Obtém um usuário a partir do ID.
   * @param id - Identificador do usuário.
   * @returns O usuário encontrado ou `null` se não existir.
   */
  async obterUsuarioPorId(id: string) {
    try {
      const usuario = await prisma.usuario.findUnique({ where: { id } });
      return usuario;
    } catch (error) {
      throwHandledError("Erro ao obter usuário por ID", error);
    }
  }

  /**
   * Altera o tipo de um usuário (ex.: "ADMINISTRADOR", "GESTOR" ou "AVALIADOR").
   * @param idUsuario - Identificador do usuário no banco.
   * @param novoTipo - Novo tipo de usuário.
   * @returns O usuário atualizado.
   */
  async alterarTipoUsuario(idUsuario: string, novoTipo: "ADMINISTRADOR" | "GESTOR" | "AVALIADOR") {
    try {
      return await prisma.usuario.update({
        where: { id: idUsuario },
        data: { tipo: novoTipo },
      });
    } catch (error) {
      throwHandledError("Erro ao alterar tipo de usuário", error);
    }
  }

  /**
   * Ativa ou desativa um usuário.
   * @param idUsuario - Identificador do usuário no banco.
   * @param ativo - Novo status do usuário.
   * @returns O usuário atualizado.
   */
  async alterarStatusUsuario(idUsuario: string, ativo: boolean) {
    try {
      return await prisma.usuario.update({
        where: { id: idUsuario },
        data: { ativo },
      });
    } catch (error) {
      throwHandledError("Erro ao alterar status do usuário", error);
    }
  }
}
