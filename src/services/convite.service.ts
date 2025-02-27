import { generateInvitationEmailTemplate } from "@templates/convite.template";
import { throwHandledError } from "@utils/throwHandledError";
import { Convite } from "@models/convite.model";
import { EmailService } from "./email.service";
import { sign } from "jsonwebtoken";

export class ConviteService {
  private emailService = new EmailService();

  /**
   * Envia um convite para registro de um usuário.
   * @param idCriador - O identificador do usuário que está enviando o convite.
   * @param email - O e-mail do usuário que será convidado.
   * @param instituicao - A instituição que o usuário será convidado.
   * @param tipo - O tipo de usuário que será convidado.
   * @returns O link de convite.
   */
  async enviarConvite(idCriador: string, email: string, instituicao: string, tipo: string): Promise<string> {
    try {
      const secret = process.env.JWT_SECRET || "supersecret";
      const token = sign({ convite: true, idCriador, email, instituicao, tipo }, secret, { expiresIn: "15m" });

      const expiraEm = new Date(Date.now() + 15 * 60 * 1000);

      await Convite.create({
        token,
        idCriador,
        email,
        instituicao,
        tipo,
        expiraEm,
        usado: false,
      });

      const baseUrl = process.env.BASE_URL || "http://localhost:3000";
      const invitationLink = `${baseUrl}/convite?token=${token}`;

      const userName = "Convidado";
      const emailHtml = generateInvitationEmailTemplate({
        userName,
        userEmail: email,
        invitationLink,
        frontendUrl: baseUrl,
      });

      await this.emailService.sendEmail({
        to: email,
        subject: "Você foi convidado!",
        html: emailHtml,
      });

      return invitationLink;
    } catch (error) {
      throwHandledError("Erro ao enviar convite", error);
    }
  }

  /**
   * Valida um convite a partir do token.
   * @param token - O token do convite.
   * @returns Retorna true se for válido, senão false.
   */
  async validarConvite(token: string): Promise<boolean> {
    try {
      const conviteDoc = await Convite.findOne({ token });
      if (!conviteDoc) return false;
      if (conviteDoc.expiraEm < new Date() || conviteDoc.usado) return false;
      return true;
    } catch (error) {
      throwHandledError("Erro ao validar convite", error);
    }
  }

  /**
   * Obtém um convite pelo token.
   * @param token - O token do convite.
   * @returns O documento convite encontrado ou null se não existir.
   */
  async getConvite(token: string) {
    try {
      return await Convite.findOne({ token });
    } catch (error) {
      throwHandledError("Erro ao buscar convite", error);
    }
  }

  /**
   * Marca um convite como utilizado.
   * @param token - O token do convite.
   */
  async marcarConviteComoUsado(token: string): Promise<void> {
    try {
      await Convite.findOneAndUpdate({ token }, { usado: true });
    } catch (error) {
      throwHandledError("Erro ao marcar convite como usado", error);
    }
  }
}
