import { FastifyRequest, FastifyReply } from "fastify";

export function roleMiddleware(allowedRoles: string[]) {
  return async function (req: FastifyRequest, reply: FastifyReply) {
    if (!req.usuario || !allowedRoles.includes(req.usuario.tipo)) {
      return reply.status(403).send({ message: "Permissão negada" });
    }
  };
}
