// src/routes/redefinirSenha.routes.ts
import { AuthController } from "../controllers/AuthController";
import { FastifyInstance } from "fastify";
import { z } from "zod";

export async function redefinirSenhaRoutes(app: FastifyInstance) {
  app.post(
    "/api/auth/request-redefinir-senha",
    {
      schema: {
        tags: ["Redefinir de Senha"],
        body: z.object({
          email: z.string().email(),
        }),
        response: {
          200: z.object({
            message: z.string(),
          }),
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
        body: z.object({
          token: z.string(),
          novaSenha: z.string().min(6),
        }),
        response: {
          200: z.object({
            message: z.string(),
          }),
        },
      },
    },
    AuthController.redefinirSenha,
  );
}
