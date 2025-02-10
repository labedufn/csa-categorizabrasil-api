import { conviteCreateSchema, conviteResponseSchema } from "../schemas/convite.schema";
import { ConviteController } from "../controllers/ConviteController";
import { authMiddleware } from "../middlewares/auth.middleware";
import { roleMiddleware } from "../middlewares/role.middleware";
import { FastifyInstance } from "fastify";

export async function conviteRoutes(app: FastifyInstance) {
  app.post(
    "/api/convites/enviar",
    {
      preHandler: [authMiddleware, roleMiddleware(["ADMINISTRADOR", "GESTOR"])],
      schema: {
        tags: ["Convites"],
        security: [{ bearerAuth: [] }],
        description:
          "Envia um convite para o email informado. É necessário informar o token Bearer no header 'Authorization'. (Apenas ADMINISTRADOR e GESTOR) (Se o usuário for GESTOR, a instituição será herdada para o usuário)",
        body: conviteCreateSchema,
        response: { 200: conviteResponseSchema },
      },
    },
    ConviteController.enviarConvite,
  );
}
