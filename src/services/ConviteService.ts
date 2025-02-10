import { prisma } from "../config/prisma";
import jwt from "jsonwebtoken";

export class ConviteService {
  async enviarConvite(criadorId: string, email: string, instituicao: string, tipo: string): Promise<string> {
    const secret = process.env.JWT_SECRET || "supersecret";
    const token = jwt.sign({ convite: true, criadorId, email, instituicao, tipo }, secret, { expiresIn: "15m" });
    const expiresAt = new Date(Date.now() + 15 * 60 * 1000);

    await prisma.convite.create({
      data: {
        token,
        criadorId,
        email,
        instituicao,
        tipo,
        expiresAt,
      },
    });

    const baseUrl = process.env.BASE_URL || "http://localhost:8000";
    return `${baseUrl}/convite?token=${token}`;
  }

  async validarConvite(token: string): Promise<boolean> {
    const convite = await prisma.convite.findUnique({ where: { token } });
    if (!convite) return false;
    if (convite.expiresAt < new Date() || convite.usado) return false;
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
