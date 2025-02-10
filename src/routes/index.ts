import { redefinirSenhaRoutes } from "./redefinirSenha.routes";
import { usuarioRoutes } from "./usuario.routes";
import { conviteRoutes } from "./convite.routes";
import { authRoutes } from "./auth.routes";
import { FastifyInstance } from "fastify";

export async function routes(app: FastifyInstance) {
  await app.register(authRoutes);
  await app.register(redefinirSenhaRoutes);
  await app.register(usuarioRoutes);
  await app.register(conviteRoutes);
}
