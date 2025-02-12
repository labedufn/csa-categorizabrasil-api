import { criarAvaliacaoBodySchema, criarAvaliacaoResponseSchema } from "@schemas/avaliacao.schema";
import { AvaliacaoController } from "@controllers/AvaliacaoController";
import { authMiddleware } from "@middlewares/auth.middleware";
import { authHeadersSchema } from "@schemas/headers.schema";
import { FastifyInstance } from "fastify";

export async function avaliacaoRoutes(app: FastifyInstance) {
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
}
