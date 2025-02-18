import {
  deletarManipuladorAlimentosSchema,
  manipuladorAlimentosBodySchema,
  manipuladorAlimentosSchema,
  manipuladoresAlimentosPorAvaliacaoSchema,
} from "@schemas/manipuladorAlimentos.schema";
import { ManipuladorAlimentosController } from "@controllers/ManipuladorAlimentosController";
import { authMiddleware } from "@middlewares/auth.middleware";
import { authHeadersSchema } from "@schemas/headers.schema";
import { FastifyInstance } from "fastify";

export async function manipuladorAlimentosRoutes(app: FastifyInstance) {
  app.post(
    "/api/avaliacoes/:id/manipulador-alimentos",
    {
      preHandler: authMiddleware,
      schema: {
        tags: ["Manipulador de Alimentos"],
        security: [{ bearerAuth: [] }],
        body: manipuladorAlimentosBodySchema,
        headers: authHeadersSchema,
        description:
          "Cria um manipulador de alimentos para uma avaliação. É necessário informar o token Bearer no header 'Authorization'.",
        response: { 200: manipuladorAlimentosSchema },
      },
    },
    ManipuladorAlimentosController.criarManipuladorAlimentos,
  );

  app.get(
    "/api/avaliacoes/:id/manipulador-alimentos",
    {
      preHandler: authMiddleware,
      schema: {
        tags: ["Manipulador de Alimentos"],
        security: [{ bearerAuth: [] }],
        headers: authHeadersSchema,
        description:
          "Busca todos os manipuladores de alimentos de uma avaliação. É necessário informar o token Bearer no header 'Authorization'.",
        response: { 200: manipuladoresAlimentosPorAvaliacaoSchema },
      },
    },
    async (req, reply) => {
      await ManipuladorAlimentosController.buscarManipuladoresAlimentosPorAvaliacao(req, reply);
    },
  );

  app.get(
    "/api/avaliacoes/manipulador-alimentos/:id",
    {
      preHandler: authMiddleware,
      schema: {
        tags: ["Manipulador de Alimentos"],
        security: [{ bearerAuth: [] }],
        headers: authHeadersSchema,
        description: "Busca um gestor pelo ID. É necessário informar o token Bearer no header 'Authorization'.",
        response: {
          200: manipuladorAlimentosSchema,
        },
      },
    },
    async (req, reply) => {
      await ManipuladorAlimentosController.buscarManipuladorAlimentosPorId(req, reply);
    },
  );

  app.put(
    "/api/avaliacoes/manipulador-alimentos/:id/editar",
    {
      preHandler: authMiddleware,
      schema: {
        tags: ["Manipulador de Alimentos"],
        security: [{ bearerAuth: [] }],
        headers: authHeadersSchema,
        description:
          "Edita um manipulador de alimentos pelo ID. É necessário informar o token Bearer no header 'Authorization'.",
        body: manipuladorAlimentosBodySchema,
        response: {
          200: manipuladorAlimentosBodySchema,
        },
      },
    },
    async (req, reply) => {
      await ManipuladorAlimentosController.editarManipuladorAlimentos(req, reply);
    },
  );

  app.delete(
    "/api/avaliacoes/manipulador-alimentos/:id/deletar",
    {
      preHandler: authMiddleware,
      schema: {
        tags: ["Manipulador de Alimentos"],
        security: [{ bearerAuth: [] }],
        headers: authHeadersSchema,
        description:
          "Deleta um manipulador de alimentos pelo ID. É necessário informar o token Bearer no header 'Authorization'.",
        response: {
          200: deletarManipuladorAlimentosSchema,
        },
      },
    },
    async (req, reply) => {
      await ManipuladorAlimentosController.deletarManipuladorAlimentos(req, reply);
    },
  );
}
