import {
  deletarGestorSchema,
  gestorBodySchema,
  gestoresPorAvaliacaoSchema,
  gestorSchema,
} from "@schemas/gestor.schema";
import { listarAvaliacoesResponseSchema } from "@schemas/avaliacao.schema";
import { GestorController } from "@controllers/gestor.controller";
import { authMiddleware } from "@middlewares/auth.middleware";
import { authHeadersSchema } from "@schemas/headers.schema";
import { FastifyInstance } from "fastify";

export async function gestorRoutes(app: FastifyInstance) {
  app.post(
    "/api/avaliacoes/:id/gestor",
    {
      preHandler: authMiddleware,
      schema: {
        tags: ["Gestor"],
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
    "/api/avaliacoes/:id/gestor",
    {
      preHandler: authMiddleware,
      schema: {
        tags: ["Gestor"],
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
    "/api/avaliacoes/gestor/:id",
    {
      preHandler: authMiddleware,
      schema: {
        tags: ["Gestor"],
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
    "/api/avaliacoes/gestor/:id/editar",
    {
      preHandler: authMiddleware,
      schema: {
        tags: ["Gestor"],
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
        tags: ["Gestor"],
        security: [{ bearerAuth: [] }],
        headers: authHeadersSchema,
        description: "Deleta um gestor pelo ID. É necessário informar o token Bearer no header 'Authorization'.",
        response: {
          200: deletarGestorSchema,
        },
      },
    },
    async (req, reply) => {
      await GestorController.deletarGestor(req, reply);
    },
  );
}
