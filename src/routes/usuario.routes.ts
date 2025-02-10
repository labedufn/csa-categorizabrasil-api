import { atualizarUsuarioSchema, atualizarSenhaSchema } from "../schemas/usuario.schema";
import { UsuarioController } from "../controllers/UsuarioController";
import { authMiddleware } from "../middlewares/auth.middleware";
import { FastifyInstance } from "fastify";
import { z } from "zod";

export async function usuarioRoutes(app: FastifyInstance) {
  app.put(
    "/api/usuario/atualizar",
    {
      preHandler: authMiddleware,
      schema: {
        tags: ["Usuário"],
        security: [{ bearerAuth: [] }],
        body: atualizarUsuarioSchema,
        response: { 200: atualizarUsuarioSchema },
      },
    },
    UsuarioController.editarUsuario,
  );

  app.put(
    "/api/usuario/senha",
    {
      preHandler: authMiddleware,
      schema: {
        tags: ["Usuário"],
        security: [{ bearerAuth: [] }],
        body: atualizarSenhaSchema,
        response: { 200: z.object({ message: z.string() }) },
      },
    },
    UsuarioController.atualizarSenha,
  );
}
