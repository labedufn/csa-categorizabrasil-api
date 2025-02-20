import { generatePasswordResetEmailTemplate } from "@templates/redefinirSenha.template";
import { throwHandledError } from "@utils/throwHandledError";
import { EmailService } from "./email.service";
import { sign, verify } from "jsonwebtoken";
import { prisma } from "@config/prisma";
import { hash } from "bcryptjs";

export class RedefinirSenhaService {
  private emailService = new EmailService();

  /**
   * Solicita a redefinição de senha de um usuário.
   * @param email - O e-mail do usuário.
   * @returns Uma mensagem de sucesso.
   */
  async solicitarRedefinirSenha(email: string) {
    try {
      const usuario = await prisma.usuario.findUnique({ where: { email } });
      if (!usuario) return;

      const secret = process.env.JWT_SECRET || "supersecret";
      const token = sign({ idUsuario: usuario.id }, secret, {
        expiresIn: "15m",
      });

      const expiraEm = new Date(Date.now() + 15 * 60 * 1000);

      await prisma.redefinirSenha.create({
        data: {
          token,
          idUsuario: usuario.id,
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
    } catch (error) {
      throwHandledError("Erro ao solicitar redefinição de senha", error);
    }
  }

  /**
   * Redefine a senha de um usuário.
   * @param token - O token de redefinição de senha.
   * @param novaSenha - A nova senha do usuário.
   */
  async redefinirSenha(token: string, novaSenha: string) {
    try {
      const secret = process.env.JWT_SECRET || "supersecret";
      let payload: any;
      try {
        payload = verify(token, secret);
      } catch {
        throw new Error("Token inválido ou expirado");
      }

      const redefinir = await prisma.redefinirSenha.findUnique({ where: { token } });
      if (!redefinir || redefinir.usado || redefinir.expiraEm < new Date()) {
        throw new Error("Token inválido ou expirado");
      }

      const novaSenhaHash = await hash(novaSenha, 10);
      await prisma.usuario.update({
        where: { id: payload.idUsuario },
        data: { senha: novaSenhaHash },
      });

      await prisma.redefinirSenha.update({
        where: { token },
        data: { usado: true },
      });
    } catch (error) {
      throwHandledError("Erro ao redefinir senha", error);
    }
  }
}
