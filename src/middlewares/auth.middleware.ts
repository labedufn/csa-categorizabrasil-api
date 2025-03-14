import { FastifyRequest, FastifyReply } from "fastify";
import { Usuario } from "@models/usuario.model";
import { Auth } from "@config/auth";

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

    const usuarioFromDb = await Usuario.findById(decoded.id);
    if (!usuarioFromDb) {
      return reply.status(401).send({ message: "Usuário não encontrado" });
    }

    req.usuario = {
      id: usuarioFromDb._id.toString(),
      email: usuarioFromDb.email,
      tipo: usuarioFromDb.tipo as "ADMINISTRADOR" | "GESTOR" | "AVALIADOR",
      instituicao: usuarioFromDb.instituicao,
    };
  } catch (error) {
    return reply.status(401).send({
      message: "Acesso não autorizado",
      error: (error as Error).message,
    });
  }
}
