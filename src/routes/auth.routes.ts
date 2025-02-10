import { loginSchema, registrarSchema, loginResponseSchema, registrarComConviteSchema } from "../schemas/auth.schema";
import { AuthController } from "../controllers/AuthController";
import { FastifyInstance } from "fastify";

export async function authRoutes(app: FastifyInstance) {
  app.post(
    "/api/auth/login",
    {
      schema: {
        tags: ["Autenticação"],
        description: "Realiza o login do usuário",
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
  //       description: "Realiza o cadastro do usuário (auto cadastro)",
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
        description:
          "Realiza o registro do usuário com um convite (token). É necessário informar o token Bearer no header 'Authorization'.",
        tags: ["Autenticação"],
        body: registrarComConviteSchema,
        response: { 201: loginResponseSchema },
      },
    },
    AuthController.registrarComConvite,
  );
}
