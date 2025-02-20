import {
  criarAvaliacaoBodySchema,
  criarAvaliacaoResponseSchema,
  desativarAvaliacaoResponseSchema,
  listarAvaliacoesResponseSchema,
} from "@schemas/avaliacao.schema";
import { AvaliacaoController } from "@controllers/avaliacao.controller";
import { authMiddleware } from "@middlewares/auth.middleware";
import { roleMiddleware } from "@middlewares/role.middleware";
import { authHeadersSchema } from "@schemas/headers.schema";
import { FastifyInstance } from "fastify";

export async function avaliacaoRoutes(app: FastifyInstance) {
  app.get(
    "/api/avaliacoes",
    {
      preHandler: authMiddleware,
      schema: {
        tags: ["Avaliações"],
        security: [{ bearerAuth: [] }],
        headers: authHeadersSchema,
        description: "Lista todas as avaliações. É necessário informar o token Bearer no header 'Authorization'.",
        response: { 200: listarAvaliacoesResponseSchema },
      },
    },
    AvaliacaoController.listarAvaliacoes,
  );

  app.post(
    "/api/avaliacoes",
    {
      preHandler: authMiddleware,
      schema: {
        tags: ["Avaliações"],
        security: [{ bearerAuth: [] }],
        headers: authHeadersSchema,
        description: "Cria uma avaliação. É necessário informar o token Bearer no header 'Authorization'.",
        body: criarAvaliacaoBodySchema,
        response: {
          200: criarAvaliacaoResponseSchema,
        },
      },
    },
    async (req, reply) => {
      await AvaliacaoController.criarAvaliacao(req, reply);
    },
  );

  app.put(
    "/api/avaliacoes/:id/desativar",
    {
      preHandler: [authMiddleware, roleMiddleware(["ADMINISTRADOR", "GESTOR"])],
      schema: {
        tags: ["Avaliações"],
        security: [{ bearerAuth: [] }],
        headers: authHeadersSchema,
        description: "Desativa uma avaliação. É necessário informar o token Bearer no header 'Authorization'.",
        response: {
          200: desativarAvaliacaoResponseSchema,
        },
      },
    },
    async (req, reply) => {
      await AvaliacaoController.desativarAvaliacao(req, reply);
    },
  );
}
