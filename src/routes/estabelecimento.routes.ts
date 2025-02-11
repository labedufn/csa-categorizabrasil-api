import { criarEstabelecimentoBodySchema, criarEstabelecimentoResponseSchema } from "../schemas/estabelecimento.schema";
import { EstabelecimentoController } from "../controllers/EstabelecimentoController";
import { authMiddleware } from "../middlewares/auth.middleware";
import { FastifyInstance } from "fastify";

export async function estabelecimentoRoutes(app: FastifyInstance) {
  app.post(
    "/api/estabelecimento",
    {
      preHandler: authMiddleware,
      schema: {
        tags: ["Estabelecimento"],
        security: [{ bearerAuth: [] }],
        description: "Cria um novo estabelecimento. É necessário informar o token Bearer no header 'Authorization'.",
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
}
