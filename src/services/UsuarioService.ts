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
}
