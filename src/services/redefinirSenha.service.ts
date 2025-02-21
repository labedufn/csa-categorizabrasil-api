import { generatePasswordResetEmailTemplate } from "@templates/redefinirSenha.template";
import { RedefinirSenha } from "@models/redefinirSenha.model";
import { throwHandledError } from "@utils/throwHandledError";
import { Usuario } from "@models/usuario.model";
import { EmailService } from "./email.service";
import { sign, verify } from "jsonwebtoken";
import { hash } from "bcryptjs";

export class RedefinirSenhaService {
  private emailService = new EmailService();

  /**
   * Solicita a redefinição de senha de um usuário.
   * @param email - O e-mail do usuário.
   * @returns Uma mensagem de sucesso (ou undefined se o usuário não for encontrado).
   */
  async solicitarRedefinirSenha(email: string) {
    try {
      // Busca o usuário pelo email
      const usuarioDoc = await Usuario.findOne({ email });
      if (!usuarioDoc) return;

      const secret = process.env.JWT_SECRET || "supersecret";
      const token = sign({ idUsuario: usuarioDoc._id.toString() }, secret, {
        expiresIn: "15m",
      });

      const expiraEm = new Date(Date.now() + 15 * 60 * 1000);

      // Cria o registro de redefinição de senha
      await RedefinirSenha.create({
        token,
        idUsuario: usuarioDoc._id.toString(),
        expiraEm,
        usado: false,
      });

      const frontendUrl = process.env.BASE_URL || "http://localhost:3000";
      const resetLink = `${frontendUrl}/redefinir-senha?token=${token}`;

      const emailHtml = generatePasswordResetEmailTemplate({
        userName: usuarioDoc.nome,
        userEmail: usuarioDoc.email,
        resetLink,
        frontendUrl,
      });

      await this.emailService.sendEmail({
        to: usuarioDoc.email,
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

      const registroRedefinir = await RedefinirSenha.findOne({ token });
      if (!registroRedefinir || registroRedefinir.usado || registroRedefinir.expiraEm < new Date()) {
        throw new Error("Token inválido ou expirado");
      }

      const novaSenhaHash = await hash(novaSenha, 10);
      await Usuario.findByIdAndUpdate(payload.idUsuario, { senha: novaSenhaHash });
      await RedefinirSenha.findOneAndUpdate({ token }, { usado: true });
    } catch (error) {
      throwHandledError("Erro ao redefinir senha", error);
    }
  }
}
