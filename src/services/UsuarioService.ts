import { prisma } from "../config/prisma";
import bcrypt from "bcryptjs";

export class UsuarioService {
  async atualizarUsuario(id: string, data: any) {
    const usuario = await prisma.usuario.findUnique({ where: { id } });
    if (!usuario) throw new Error("Usuário não encontrado");

    const usuarioAtualizado = await prisma.usuario.update({
      where: { id },
      data,
    });

    return usuarioAtualizado;
  }

  async alterarSenha(id: string, senhaAtual: string, novaSenha: string) {
    const usuario = await prisma.usuario.findUnique({ where: { id } });
    if (!usuario) throw new Error("Usuário não encontrado");

    const senhaValida = await bcrypt.compare(senhaAtual, usuario.senha);
    if (!senhaValida) throw new Error("Senha atual inválida");

    const novaSenhaHash = await bcrypt.hash(novaSenha, 10);

    await prisma.usuario.update({
      where: { id },
      data: { senha: novaSenhaHash },
    });

    return { message: "Senha atualizada com sucesso" };
  }

  async listarUsuarios() {
    const usuarios = await prisma.usuario.findMany({ where: { ativo: true } });
    return usuarios;
  }

  async listarUsuariosPorInstituicao(instituicao: string) {
    const usuarios = await prisma.usuario.findMany({
      where: {
        ativo: true,
        instituicao,
      },
    });
    return usuarios;
  }

  async obterUsuarioPorId(id: string) {
    const usuario = await prisma.usuario.findUnique({ where: { id } });
    return usuario;
  }

  async desativarUsuario(id: string) {
    const usuario = await prisma.usuario.findUnique({ where: { id } });
    if (!usuario) throw new Error("Usuário não encontrado");

    await prisma.usuario.update({
      where: { id },
      data: { ativo: false },
    });

    return { message: "Usuário desativado com sucesso" };
  }
}
