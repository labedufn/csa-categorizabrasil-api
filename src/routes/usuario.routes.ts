import { atualizarUsuarioSchema, atualizarSenhaSchema, listarUsuariosSchema } from "../schemas/usuario.schema";
import { UsuarioController } from "../controllers/UsuarioController";
import { authMiddleware } from "../middlewares/auth.middleware";
import { roleMiddleware } from "../middlewares/role.middleware";
import { authHeadersSchema } from "../schemas/headers.schema";
import { FastifyInstance } from "fastify";

export async function usuarioRoutes(app: FastifyInstance) {
  app.get(
    "/api/usuarios",
    {
      preHandler: authMiddleware,
      schema: {
        tags: ["Usuário"],
        security: [{ bearerAuth: [] }],
        headers: authHeadersSchema,
        description: "Lista todos os usuários. É necessário informar o token Bearer no header 'Authorization'.",
        response: { 200: listarUsuariosSchema },
      },
    },
    UsuarioController.listarUsuarios,
  );

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
      preHandler: [authMiddleware, roleMiddleware(["ADMINISTRADOR", "GESTOR"])],
      schema: {
        tags: ["Usuário"],
        security: [{ bearerAuth: [] }],
        headers: authHeadersSchema,
        description: "Atualiza a senha do usuário. É necessário informar o token Bearer no header 'Authorization'.",
        body: atualizarSenhaSchema,
        response: { 200: atualizarSenhaSchema },
      },
    },
    UsuarioController.atualizarSenha,
  );
}
