import { generateInvitationEmailTemplate } from "../templates/convite.template";
import { EmailService } from "./EmailService";
import { prisma } from "../config/prisma";
import jwt from "jsonwebtoken";

export class ConviteService {
  private emailService = new EmailService();

  async enviarConvite(criadorId: string, email: string, instituicao: string, tipo: string): Promise<string> {
    const secret = process.env.JWT_SECRET || "supersecret";
    const token = jwt.sign({ convite: true, criadorId, email, instituicao, tipo }, secret, { expiresIn: "15m" });
    const expiraEm = new Date(Date.now() + 15 * 60 * 1000);

    await prisma.convite.create({
      data: {
        token,
        criadorId,
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
}
