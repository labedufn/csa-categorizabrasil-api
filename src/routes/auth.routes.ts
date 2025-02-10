import { loginSchema, registrarSchema, loginResponseSchema, registrarComConviteSchema } from "../schemas/auth.schema";
import { AuthController } from "../controllers/AuthController";
import { FastifyInstance } from "fastify";

export async function authRoutes(app: FastifyInstance) {
  app.post(
    "/api/auth/login",
    {
      schema: {
        tags: ["Autenticação"],
        body: loginSchema,
        response: { 200: loginResponseSchema },
      },
    },
    AuthController.login,
  );

  // AUTO CADASTRO DESABILITADO

  // app.post(
  //   "/api/auth/registrar",
  //   {
  //     schema: {
  //       tags: ["Autenticação"],
  //       body: registrarSchema,
  //       response: { 201: loginResponseSchema },
  //     },
  //   },
  //   AuthController.registrar,
  // );

  app.post(
    "/api/auth/registrar/convite",
    {
      schema: {
        security: [{ bearerAuth: [] }],
        tags: ["Autenticação"],
        body: registrarComConviteSchema,
        response: { 201: loginResponseSchema },
      },
    },
    AuthController.registrarComConvite,
  );
}
