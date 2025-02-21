import { throwHandledError } from "@utils/throwHandledError";
import { normalizeDocument } from "@utils/normalizeDocument";
import { Usuario } from "@models/usuario.model";
import { IUsuario } from "@interfaces/IUsuario";
import { compare, hash } from "bcryptjs";
import { Auth } from "@config/auth";

export class AuthService {
  /**
   * Registra um novo usuário.
   * @param dadosUsuario - Os dados do usuário.
   * @returns O usuário registrado e o token de autenticação.
   */
  async registrarUsuario(dadosUsuario: IUsuario) {
    try {
      const usuarioExistente = await Usuario.findOne({
        $or: [{ email: dadosUsuario.email }, { cpf: dadosUsuario.cpf }],
      });

      if (usuarioExistente) {
        throw new Error("E-mail ou CPF já cadastrados");
      }

      const hashedPassword = await hash(dadosUsuario.senha, 10);

      const novoUsuario = await Usuario.create({
        ...dadosUsuario,
        senha: hashedPassword,
      });

      const usuarioSemSenha = normalizeDocument(novoUsuario);
      const token = Auth.gerarToken(novoUsuario._id.toString(), novoUsuario.email);

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
      const usuarioEncontrado = await Usuario.findOne({
        $or: [{ email: emailOuCpf }, { cpf: emailOuCpf }],
      });

      if (!usuarioEncontrado) {
        throw new Error("Credenciais inválidas");
      }

      if (!usuarioEncontrado.ativo) {
        throw new Error("Usuário desativado. Entre em contato com um administrador.");
      }

      const senhaValida = await compare(senha, usuarioEncontrado.senha);

      if (!senhaValida) {
        throw new Error("Credenciais inválidas");
      }

      const usuarioSemSenha = normalizeDocument(usuarioEncontrado);
      const token = Auth.gerarToken(usuarioEncontrado._id.toString(), usuarioEncontrado.email);

      return { usuario: usuarioSemSenha, token };
    } catch (error) {
      throwHandledError("Erro ao realizar login", error);
    }
  }
}
