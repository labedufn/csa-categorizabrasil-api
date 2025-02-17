import { listarAvaliacoesResponseSchema } from "@schemas/avaliacao.schema";
import { gestorBodySchema, gestorSchema } from "@schemas/gestor.schema";
import { GestorController } from "@controllers/GestorController";
import { authMiddleware } from "@middlewares/auth.middleware";
import { authHeadersSchema } from "@schemas/headers.schema";
import { FastifyInstance } from "fastify";

export async function gestorRoutes(app: FastifyInstance) {
  app.post(
    "/api/avaliacoes/:id/gestores",
    {
      preHandler: authMiddleware,
      schema: {
        tags: ["Gestores"],
        security: [{ bearerAuth: [] }],
        body: gestorBodySchema,
        headers: authHeadersSchema,
        description:
          "Cria um gestor para uma avaliação. É necessário informar o token Bearer no header 'Authorization'.",
        response: { 200: gestorSchema },
      },
    },
    GestorController.criarGestor,
  );
}
