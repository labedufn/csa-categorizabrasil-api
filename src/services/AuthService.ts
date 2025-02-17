import { throwHandledError } from "@utils/throwHandledError";
import { IUsuario } from "@interfaces/IUsuario";
import { compare, hash } from "bcryptjs";
import { prisma } from "@config/prisma";
import { Auth } from "@config/auth";

export class AuthService {
  /**
   * Registra um novo usuário.
   * @param dadosUsuario - Os dados do usuário.
   * @returns O usuário registrado e o token de autenticação.
   */
  async registrarUsuario(dadosUsuario: IUsuario) {
    try {
      const usuarioExistente = await prisma.usuario.findFirst({
        where: {
          OR: [{ email: dadosUsuario.email }, { cpf: dadosUsuario.cpf }],
        },
      });

      if (usuarioExistente) {
        throw new Error("E-mail ou CPF já cadastrados");
      }

      const hashedPassword = await hash(dadosUsuario.senha, 10);

      const usuario = await prisma.usuario.create({
        data: {
          ...dadosUsuario,
          senha: hashedPassword,
        },
      });

      const { senha, ...usuarioSemSenha } = usuario;
      const token = Auth.gerarToken(usuario.id, usuario.email);

      return { usuario: usuarioSemSenha, token };
    } catch (error) {
      throwHandledError("Erro ao registrar usuário", error);
    }
  }

  /**
   * Realiza o login de um usuário.
   * @param emailOuCpf - O e-mail ou CPF do usuário.
   * @param senha - A senha do usuário.
   * @returns O usuário logado e o token de autenticação.
   */
  async loginUsuario(emailOuCpf: string, senha: string) {
    try {
      const usuario = await prisma.usuario.findFirst({
        where: {
          OR: [{ email: emailOuCpf }, { cpf: emailOuCpf }],
        },
      });

      if (!usuario) {
        throw new Error("Credenciais inválidas");
      }

      const senhaValida = await compare(senha, usuario.senha);

      if (!senhaValida) {
        throw new Error("Credenciais inválidas");
      }

      const { senha: _, ...usuarioSemSenha } = usuario;
      const token = Auth.gerarToken(usuario.id, usuario.email);

      return { usuario: usuarioSemSenha, token };
    } catch (error) {
      throwHandledError("Erro ao realizar login", error);
    }
  }
}
