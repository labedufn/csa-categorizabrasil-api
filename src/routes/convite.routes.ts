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
        body: conviteCreateSchema,
        response: { 200: conviteResponseSchema },
      },
    },
    ConviteController.enviarConvite,
  );
}
