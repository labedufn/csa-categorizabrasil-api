import { generateInvitationEmailTemplate } from "@templates/convite.template";
import { EmailService } from "./EmailService";
import { prisma } from "@config/prisma";
import { sign } from "jsonwebtoken";

export class ConviteService {
  private emailService = new EmailService();

  async enviarConvite(idCriador: string, email: string, instituicao: string, tipo: string): Promise<string> {
    const secret = process.env.JWT_SECRET || "supersecret";
    const token = sign({ convite: true, idCriador, email, instituicao, tipo }, secret, { expiresIn: "15m" });
    const expiraEm = new Date(Date.now() + 15 * 60 * 1000);

    await prisma.convite.create({
      data: {
        token,
        idCriador,
        email,
        instituicao,
        tipo,
        expiraEm,
      },
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
  }

  async validarConvite(token: string): Promise<boolean> {
    const convite = await prisma.convite.findUnique({ where: { token } });
    if (!convite) return false;
    if (convite.expiraEm < new Date() || convite.usado) return false;
    return true;
  }

  async getConvite(token: string) {
    return await prisma.convite.findUnique({ where: { token } });
  }

  async marcarConviteComoUsado(token: string): Promise<void> {
    await prisma.convite.update({
      where: { token },
      data: { usado: true },
    });
  }
}
