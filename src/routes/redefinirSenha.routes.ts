import {
  redefinirSenhaBodySchema,
  redefinirSenhaResponseSchema,
  requestRedefinirSenhaBodySchema,
  requestRedefinirSenhaResponseSchema,
} from "../schemas/redefinirSenha.schema";
import { AuthController } from "../controllers/AuthController";
import { FastifyInstance } from "fastify";

export async function redefinirSenhaRoutes(app: FastifyInstance) {
  app.post(
    "/api/auth/request-redefinir-senha",
    {
      schema: {
        tags: ["Redefinir de Senha"],
        body: requestRedefinirSenhaBodySchema,
        response: {
          200: requestRedefinirSenhaResponseSchema,
        },
      },
    },
    AuthController.solicitarRedefinirSenha,
  );

  app.post(
    "/api/auth/redefinir-senha",
    {
      schema: {
        tags: ["Redefinir de Senha"],
        body: redefinirSenhaBodySchema,
        response: {
          200: redefinirSenhaResponseSchema,
        },
      },
    },
    AuthController.redefinirSenha,
  );
}
