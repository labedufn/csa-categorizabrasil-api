import { gestorBodySchema, gestoresPorAvaliacaoSchema, gestorSchema } from "@schemas/gestor.schema";
import { listarAvaliacoesResponseSchema } from "@schemas/avaliacao.schema";
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

  app.get(
    "/api/avaliacoes/:id/gestores",
    {
      preHandler: authMiddleware,
      schema: {
        tags: ["Gestores"],
        security: [{ bearerAuth: [] }],
        headers: authHeadersSchema,
        description:
          "Busca todos os gestores de uma avaliação. É necessário informar o token Bearer no header 'Authorization'.",
        response: { 200: gestoresPorAvaliacaoSchema },
      },
    },
    async (req, reply) => {
      await GestorController.buscarGestoresPorAvaliacao(req, reply);
    },
  );

  app.get(
    "/api/avaliacoes/gestores/:id",
    {
      preHandler: authMiddleware,
      schema: {
        tags: ["Gestores"],
        security: [{ bearerAuth: [] }],
        headers: authHeadersSchema,
        description: "Busca um gestor pelo ID. É necessário informar o token Bearer no header 'Authorization'.",
        response: {
          200: gestorSchema,
        },
      },
    },
    async (req, reply) => {
      await GestorController.buscarGestorPorId(req, reply);
    },
  );

  app.put(
    "/api/avaliacoes/gestores/:id/editar",
    {
      preHandler: authMiddleware,
      schema: {
        tags: ["Gestores"],
        security: [{ bearerAuth: [] }],
        headers: authHeadersSchema,
        description: "Edita um gestor. É necessário informar o token Bearer no header 'Authorization'.",
        body: gestorBodySchema,
        response: {
          200: gestorBodySchema,
        },
      },
    },
    async (req, reply) => {
      await GestorController.editarGestor(req, reply);
    },
  );

  app.delete(
    "/api/avaliacoes/gestores/:id/deletar",
    {
      preHandler: authMiddleware,
      schema: {
        tags: ["Gestores"],
        security: [{ bearerAuth: [] }],
        headers: authHeadersSchema,
        description: "Deleta um gestor pelo ID. É necessário informar o token Bearer no header 'Authorization'.",
      },
    },
    async (req, reply) => {
      await GestorController.deletarGestor(req, reply);
      reply.status(200).send({ message: "Gestor deletado com sucesso." });
    },
  );
}
