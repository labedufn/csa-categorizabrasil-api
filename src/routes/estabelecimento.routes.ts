import {
  criarEstabelecimentoBodySchema,
  criarEstabelecimentoResponseSchema,
  editarEstabelecimentoBodySchema,
  editarEstabelecimentoResponseSchema,
  listarEstabelecimentosResponseSchema,
} from "@schemas/estabelecimento.schema";
import { EstabelecimentoController } from "@controllers/estabelecimento.controller";
import { authMiddleware } from "@middlewares/auth.middleware";
import { roleMiddleware } from "@middlewares/role.middleware";
import { authHeadersSchema } from "@schemas/headers.schema";
import { FastifyInstance } from "fastify";

export async function estabelecimentoRoutes(app: FastifyInstance) {
  app.get(
    "/api/estabelecimentos",
    {
      preHandler: authMiddleware,
      schema: {
        tags: ["Estabelecimentos"],
        security: [{ bearerAuth: [] }],
        headers: authHeadersSchema,
        description: "Lista todos os estabelecimentos. É necessário informar o token Bearer no header 'Authorization'.",
        response: { 200: listarEstabelecimentosResponseSchema },
      },
    },
    EstabelecimentoController.listarEstabelecimentos,
  );

  app.post(
    "/api/estabelecimentos",
    {
      preHandler: authMiddleware,
      schema: {
        tags: ["Estabelecimentos"],
        security: [{ bearerAuth: [] }],
        headers: authHeadersSchema,
        description: "Cria um estabelecimento. É necessário informar o token Bearer no header 'Authorization'.",
        body: criarEstabelecimentoBodySchema,
        response: {
          200: criarEstabelecimentoResponseSchema,
        },
      },
    },
    async (req, reply) => {
      await EstabelecimentoController.criarEstabelecimento(req, reply);
    },
  );

  app.put(
    "/api/estabelecimentos/:id",
    {
      preHandler: [authMiddleware, roleMiddleware(["ADMINISTRADOR", "GESTOR"])],
      schema: {
        tags: ["Estabelecimentos"],
        security: [{ bearerAuth: [] }],
        headers: authHeadersSchema,
        description: "Edita um estabelecimento. É necessário informar o token Bearer no header 'Authorization'.",
        body: editarEstabelecimentoBodySchema,
        response: {
          200: editarEstabelecimentoResponseSchema,
        },
      },
    },
    async (req, reply) => {
      await EstabelecimentoController.editarEstabelecimento(req, reply);
    },
  );

  app.put(
    "/api/estabelecimentos/:id/desativar",
    {
      preHandler: [authMiddleware, roleMiddleware(["ADMINISTRADOR", "GESTOR"])],
      schema: {
        tags: ["Estabelecimentos"],
        security: [{ bearerAuth: [] }],
        headers: authHeadersSchema,
        description: "Desativa um estabelecimento. É necessário informar o token Bearer no header 'Authorization'.",
        response: {
          200: editarEstabelecimentoResponseSchema,
        },
      },
    },
    async (req, reply) => {
      await EstabelecimentoController.desativarEstabelecimento(req, reply);
    },
  );
}
