import {
  atualizarUsuarioSchema,
  atualizarSenhaSchema,
  listarUsuariosSchema,
  alterarTipoUsuarioSchema,
  alterarTipoUsuarioResponseSchema,
  atualizarSenhaResponseSchema,
  alterarStatusUsuarioSchema,
  alterarStatusUsuarioResponseSchema,
  usuarioSchema,
} from "@schemas/usuario.schema";
import { UsuarioController } from "@controllers/usuario.controller";
import { authMiddleware } from "@middlewares/auth.middleware";
import { roleMiddleware } from "@middlewares/role.middleware";
import { authHeadersSchema } from "@schemas/headers.schema";
import { FastifyInstance } from "fastify";

export async function usuarioRoutes(app: FastifyInstance) {
  app.get(
    "/api/usuarios",
    {
      preHandler: authMiddleware,
      schema: {
        tags: ["Usuários"],
        security: [{ bearerAuth: [] }],
        headers: authHeadersSchema,
        description:
          "Lista todos os usuários. É necessário informar o token Bearer no header 'Authorization' (ADMINISTRADOR pode listar todos os usuários, já GESTOR pode listar apenas os pertencentes a mesma instuição).",
        response: { 200: listarUsuariosSchema },
      },
    },
    UsuarioController.listarUsuarios,
  );

  app.get(
    "/api/usuarios/:id",
    {
      preHandler: authMiddleware,
      schema: {
        tags: ["Usuários"],
        security: [{ bearerAuth: [] }],
        headers: authHeadersSchema,
        description: "Busca um usuário pelo ID. É necessário informar o token Bearer no header 'Authorization'.",
        response: {
          200: usuarioSchema,
        },
      },
    },
    async (req, reply) => {
      await UsuarioController.buscarUsuarioPorId(req, reply);
    },
  );

  app.put(
    "/api/usuarios/atualizar",
    {
      preHandler: authMiddleware,
      schema: {
        tags: ["Usuários"],
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
    "/api/usuarios/:id/alterar-status",
    {
      preHandler: [authMiddleware, roleMiddleware(["ADMINISTRADOR", "GESTOR"])],
      schema: {
        tags: ["Usuários"],
        security: [{ bearerAuth: [] }],
        headers: authHeadersSchema,
        description:
          "Desativa o usuário. É necessário informar o token Bearer no header 'Authorization' (ADMINISTRADOR pode desativar qualquer usuário, já GESTOR apenas os que pertencem a sua instuição).",
        body: alterarStatusUsuarioSchema,
        response: { 200: alterarStatusUsuarioResponseSchema },
      },
    },
    UsuarioController.alterarStatusUsuario,
  );

  app.put(
    "/api/usuarios/senha",
    {
      preHandler: authMiddleware,
      schema: {
        tags: ["Usuários"],
        security: [{ bearerAuth: [] }],
        headers: authHeadersSchema,
        description: "Atualiza a senha do usuário. É necessário informar o token Bearer no header 'Authorization'.",
        body: atualizarSenhaSchema,
        response: { 200: atualizarSenhaResponseSchema },
      },
    },
    UsuarioController.atualizarSenha,
  );

  app.put(
    "/api/usuarios/:id/tipo",
    {
      preHandler: authMiddleware,
      schema: {
        tags: ["Usuários"],
        security: [{ bearerAuth: [] }],
        body: alterarTipoUsuarioSchema,
        response: {
          200: alterarTipoUsuarioResponseSchema,
        },
      },
    },
    UsuarioController.alterarTipoUsuario,
  );
}
