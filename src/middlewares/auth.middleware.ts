import { FastifyRequest, FastifyReply } from "fastify";
import { prisma } from "../config/prisma";
import { Auth } from "../config/auth";

export async function authMiddleware(req: FastifyRequest, reply: FastifyReply) {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      return reply.status(401).send({ message: "Token não fornecido" });
    }

    const [scheme, token] = authHeader.split(" ");
    if (!/^Bearer$/i.test(scheme) || !token) {
      return reply.status(401).send({ message: "Token mal formatado" });
    }

    const decoded = Auth.verificarToken(token) as { id: string; email: string };
    console.log("Token decodificado:", decoded);

    const usuarioFromDb = await prisma.usuario.findUnique({
      where: { id: decoded.id },
    });
    console.log("Usuário do DB:", usuarioFromDb);

    if (!usuarioFromDb) {
      return reply.status(401).send({ message: "Usuário não encontrado" });
    }

    req.usuario = {
      id: usuarioFromDb.id,
      email: usuarioFromDb.email,
      tipo: usuarioFromDb.tipo as "ADMINISTRADOR" | "GESTOR" | "AVALIADOR",
    };
  } catch (error) {
    console.error("Erro no authMiddleware:", error);
    return reply.status(401).send({ message: "Acesso não autorizado", error: (error as Error).message });
  }
}
