import { atualizarUsuarioSchema, atualizarSenhaSchema } from "../schemas/usuario.schema";
import { UsuarioController } from "../controllers/UsuarioController";
import { authMiddleware } from "../middlewares/auth.middleware";
import { FastifyInstance } from "fastify";
import { z } from "zod";

export async function usuarioRoutes(app: FastifyInstance) {
  app.put(
    "/api/usuarios",
    {
      preHandler: authMiddleware,
      schema: {
        tags: ["Usuários"],
        security: [{ bearerAuth: [] }],
        body: atualizarUsuarioSchema,
        response: { 200: atualizarUsuarioSchema },
      },
    },
    UsuarioController.editarUsuario,
  );

  app.put(
    "/api/usuarios/senha",
    {
      preHandler: authMiddleware,
      schema: {
        tags: ["Usuários"],
        security: [{ bearerAuth: [] }],
        body: atualizarSenhaSchema,
        response: { 200: z.object({ message: z.string() }) },
      },
    },
    UsuarioController.atualizarSenha,
  );
}
