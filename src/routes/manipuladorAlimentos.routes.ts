import { manipuladorAlimentosBodySchema, manipuladorAlimentosSchema } from "@schemas/manipuladorAlimentos.schema";
import { ManipuladorAlimentosController } from "@controllers/ManipuladorAlimentos";
import { authMiddleware } from "@middlewares/auth.middleware";
import { authHeadersSchema } from "@schemas/headers.schema";
import { FastifyInstance } from "fastify";

export async function manipuladorAlimentosRoutes(app: FastifyInstance) {
  app.post(
    "/api/avaliacoes/:id/manipulador-alimentos",
    {
      preHandler: authMiddleware,
      schema: {
        tags: ["Manipulador de Alimentos"],
        security: [{ bearerAuth: [] }],
        body: manipuladorAlimentosBodySchema,
        headers: authHeadersSchema,
        description:
          "Cria um manipulador de alimentos para uma avaliação. É necessário informar o token Bearer no header 'Authorization'.",
        response: { 200: manipuladorAlimentosSchema },
      },
    },
    ManipuladorAlimentosController.criarManipuladorAlimentos,
  );
}
