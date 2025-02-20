import {
  analiseQualitativaBodySchema,
  analiseQualitativaPorAvaliacaoSchema,
  analiseQualitativaSchema,
  deletarAnaliseQualitativaSchema,
} from "@schemas/analiseQualitativa.schema";
import { AnaliseQualitativaController } from "@controllers/analiseQualitativa.controller";
import { authMiddleware } from "@middlewares/auth.middleware";
import { authHeadersSchema } from "@schemas/headers.schema";
import { FastifyInstance } from "fastify";

export async function analiseQualitativaRoutes(app: FastifyInstance) {
  app.post(
    "/api/avaliacoes/:id/analise-qualitativa",
    {
      preHandler: authMiddleware,
      schema: {
        tags: ["Análise Qualitativa"],
        security: [{ bearerAuth: [] }],
        body: analiseQualitativaBodySchema,
        headers: authHeadersSchema,
        description:
          "Cria uma análise qualitativa para uma avaliação. É necessário informar o token Bearer no header 'Authorization'.",
        response: { 200: analiseQualitativaSchema },
      },
    },
    AnaliseQualitativaController.criarAnaliseQualitativa,
  );

  app.get(
    "/api/avaliacoes/:id/analise-qualitativa",
    {
      preHandler: authMiddleware,
      schema: {
        tags: ["Análise Qualitativa"],
        security: [{ bearerAuth: [] }],
        headers: authHeadersSchema,
        description:
          "Busca todas as análises qualitativas de uma avaliação. É necessário informar o token Bearer no header 'Authorization'.",
        response: { 200: analiseQualitativaPorAvaliacaoSchema },
      },
    },
    async (req, reply) => {
      await AnaliseQualitativaController.buscarAnaliseQualitativaPorAvaliacao(req, reply);
    },
  );

  app.get(
    "/api/avaliacoes/analise-qualitativa/:id",
    {
      preHandler: authMiddleware,
      schema: {
        tags: ["Análise Qualitativa"],
        security: [{ bearerAuth: [] }],
        headers: authHeadersSchema,
        description:
          "Busca uma análise qualitativa pelo ID. É necessário informar o token Bearer no header 'Authorization'.",
        response: { 200: analiseQualitativaSchema },
      },
    },
    async (req, reply) => {
      await AnaliseQualitativaController.buscarAnaliseQualitativaPorId(req, reply);
    },
  );

  app.put(
    "/api/avaliacoes/analise-qualitativa/:id/editar",
    {
      preHandler: authMiddleware,
      schema: {
        tags: ["Análise Qualitativa"],
        security: [{ bearerAuth: [] }],
        headers: authHeadersSchema,
        description:
          "Edita uma análise qualitativa pelo ID. É necessário informar o token Bearer no header 'Authorization'.",
        body: analiseQualitativaBodySchema,
        response: { 200: analiseQualitativaBodySchema },
      },
    },
    async (req, reply) => {
      await AnaliseQualitativaController.editarAnaliseQualitativa(req, reply);
    },
  );

  app.delete(
    "/api/avaliacoes/analise-qualitativa/:id/deletar",
    {
      preHandler: authMiddleware,
      schema: {
        tags: ["Análise Qualitativa"],
        security: [{ bearerAuth: [] }],
        headers: authHeadersSchema,
        description:
          "Deleta uma análise qualitativa pelo ID. É necessário informar o token Bearer no header 'Authorization'.",
        response: { 200: deletarAnaliseQualitativaSchema },
      },
    },
    async (req, reply) => {
      await AnaliseQualitativaController.deletarAnaliseQualitativa(req, reply);
    },
  );
}
