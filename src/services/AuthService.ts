import { prisma } from "../config/prisma";
import { Auth } from "../config/auth";
import bcrypt from "bcryptjs";

export class AuthService {
  async registrarUsuario(data: any) {
    const usuarioExistente = await prisma.usuario.findFirst({
      where: {
        OR: [{ email: data.email }, { cpf: data.cpf }],
      },
    });

    if (usuarioExistente) {
      throw new Error("E-mail ou CPF já cadastrados");
    }

    const hashedPassword = await bcrypt.hash(data.senha, 10);

    const usuario = await prisma.usuario.create({
      data: {
        ...data,
        senha: hashedPassword,
      },
    });

    const { senha, ...usuarioSemSenha } = usuario;
    const token = Auth.gerarToken(usuario.id, usuario.email);

    return { usuario: usuarioSemSenha, token };
  }

  async loginUsuario(emailOuCpf: string, senha: string) {
    const usuario = await prisma.usuario.findFirst({
      where: {
        OR: [{ email: emailOuCpf }, { cpf: emailOuCpf }],
      },
    });

    const erroLogin = new Error("Credenciais inválidas");

    if (!usuario) throw erroLogin;

    const senhaValida = await bcrypt.compare(senha, usuario.senha);
    if (!senhaValida) throw erroLogin;

    const { senha: _, ...usuarioSemSenha } = usuario;
    const token = Auth.gerarToken(usuario.id, usuario.email);

    return { usuario: usuarioSemSenha, token };
  }
}
