import {
  criarEstabelecimentoBodySchema,
  criarEstabelecimentoResponseSchema,
  editarEstabelecimentoBodySchema,
  editarEstabelecimentoResponseSchema,
} from "../schemas/estabelecimento.schema";
import { EstabelecimentoController } from "../controllers/EstabelecimentoController";
import { authMiddleware } from "../middlewares/auth.middleware";
import { roleMiddleware } from "../middlewares/role.middleware";
import { authHeadersSchema } from "../schemas/headers.schema";
import { FastifyInstance } from "fastify";

export async function estabelecimentoRoutes(app: FastifyInstance) {
  app.post(
    "/api/estabelecimento",
    {
      preHandler: authMiddleware,
      schema: {
        tags: ["Estabelecimento"],
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
        tags: ["Estabelecimento"],
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
}
