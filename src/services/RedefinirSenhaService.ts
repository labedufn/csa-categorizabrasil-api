import { generatePasswordResetEmailTemplate } from "../templates/redefinirSenha.template";
import { EmailService } from "./EmailService";
import { prisma } from "../config/prisma";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

export class RedefinirSenhaService {
  private emailService = new EmailService();

  /**
   * Solicita a redefinição de senha:
   * - Procura o usuário pelo e‑mail.
   * - Gera um token JWT válido por 15 minutos e o armazena no modelo RedefinirSenha.
   * - Constrói o link de redefinição.
   * - Envia o e‑mail utilizando o EmailService.
   */
  async solicitarRedefinirSenha(email: string): Promise<void> {
    const usuario = await prisma.usuario.findUnique({ where: { email } });
    if (!usuario) return;

    const secret = process.env.JWT_SECRET || "supersecret";
    const token = jwt.sign({ usuarioId: usuario.id }, secret, { expiresIn: "15m" });
    const expiraEm = new Date(Date.now() + 15 * 60 * 1000);

    await prisma.redefinirSenha.create({
      data: {
        token,
        usuarioId: usuario.id,
        expiraEm,
      },
    });

    const frontendUrl = process.env.BASE_URL || "http://localhost:3000";
    const resetLink = `${frontendUrl}/redefinir-senha?token=${token}`;

    const emailHtml = generatePasswordResetEmailTemplate({
      userName: usuario.nome,
      userEmail: usuario.email,
      resetLink,
      frontendUrl,
    });

    await this.emailService.sendEmail({
      to: usuario.email,
      subject: "Redefinição de Senha",
      html: emailHtml,
    });
  }

  /**
   * Redefine a senha do usuário:
   * - Verifica se o token é válido, não expirou e não foi usado.
   * - Atualiza a senha do usuário e marca o token como usado.
   */
  async redefinirSenha(token: string, novaSenha: string): Promise<void> {
    const secret = process.env.JWT_SECRET || "supersecret";
    let payload: any;
    try {
      payload = jwt.verify(token, secret);
    } catch (error) {
      throw new Error("Token inválido ou expirado");
    }

    const redefinir = await prisma.redefinirSenha.findUnique({ where: { token } });
    if (!redefinir || redefinir.usado || redefinir.expiraEm < new Date()) {
      throw new Error("Token inválido ou expirado");
    }

    const novaSenhaHash = await bcrypt.hash(novaSenha, 10);
    await prisma.usuario.update({
      where: { id: payload.usuarioId },
      data: { senha: novaSenhaHash },
    });

    await prisma.redefinirSenha.update({
      where: { token },
      data: { usado: true },
    });
  }
}
