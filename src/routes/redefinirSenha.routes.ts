import {
  redefinirSenhaBodySchema,
  redefinirSenhaResponseSchema,
  requestRedefinirSenhaBodySchema,
  requestRedefinirSenhaResponseSchema,
} from "@schemas/redefinirSenha.schema";
import { AuthController } from "@controllers/auth.controller";
import { FastifyInstance } from "fastify";

export async function redefinirSenhaRoutes(app: FastifyInstance) {
  app.post(
    "/api/auth/request-redefinir-senha",
    {
      schema: {
        tags: ["Redefinir Senha"],
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
        tags: ["Redefinir Senha"],
        body: redefinirSenhaBodySchema,
        response: {
          200: redefinirSenhaResponseSchema,
        },
      },
    },
    AuthController.redefinirSenha,
  );
}
