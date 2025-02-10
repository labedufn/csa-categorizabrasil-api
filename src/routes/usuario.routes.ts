import { atualizarUsuarioSchema, atualizarSenhaSchema } from "../schemas/usuario.schema";
import { UsuarioController } from "../controllers/UsuarioController";
import { authMiddleware } from "../middlewares/auth.middleware";
import { authHeadersSchema } from "../schemas/headers.schema";
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
        headers: authHeadersSchema,
        description: "Atualiza os dados do usuário. É necessário informar o token Bearer no header 'Authorization'.",
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
        headers: authHeadersSchema,
        description: "Atualiza a senha do usuário. É necessário informar o token Bearer no header 'Authorization'.",
        body: atualizarSenhaSchema,
        response: { 200: z.object({ message: z.string() }) },
      },
    },
    UsuarioController.atualizarSenha,
  );
}
