import {
  deletarListaVerificacaoSchema,
  listaVerificacaoBodySchema,
  listaVerificacaoPorAvaliacaoSchema,
  ListaVerificacaoSchema,
} from "@schemas/listaVerificacao.schema";
import { ListaVerificacaoController } from "@controllers/listaVerificacao.controller";
import { authMiddleware } from "@middlewares/auth.middleware";
import { authHeadersSchema } from "@schemas/headers.schema";
import { FastifyInstance } from "fastify";

export async function listaVerificacaoRoutes(app: FastifyInstance) {
  app.post(
    "/api/avaliacoes/:id/lista-verificacao",
    {
      preHandler: authMiddleware,
      schema: {
        tags: ["Lista de Verificação"],
        security: [{ bearerAuth: [] }],
        body: listaVerificacaoBodySchema,
        headers: authHeadersSchema,
        description:
          "Cria uma lista de verificação para uma avaliação. É necessário informar o token Bearer no header 'Authorization'.",
        response: { 200: ListaVerificacaoSchema },
      },
    },
    ListaVerificacaoController.criarListaVerificacao,
  );

  app.get(
    "/api/avaliacoes/:id/lista-verificacao",
    {
      preHandler: authMiddleware,
      schema: {
        tags: ["Lista de Verificação"],
        security: [{ bearerAuth: [] }],
        headers: authHeadersSchema,
        description:
          "Busca todas as análises qualitativas de uma avaliação. É necessário informar o token Bearer no header 'Authorization'.",
        response: { 200: listaVerificacaoPorAvaliacaoSchema },
      },
    },
    async (req, reply) => {
      await ListaVerificacaoController.buscarListaVerificacaoPorAvaliacao(req, reply);
    },
  );

  app.get(
    "/api/avaliacoes/lista-verificacao/:id",
    {
      preHandler: authMiddleware,
      schema: {
        tags: ["Lista de Verificação"],
        security: [{ bearerAuth: [] }],
        headers: authHeadersSchema,
        description:
          "Busca uma lista de verificação pelo ID. É necessário informar o token Bearer no header 'Authorization'.",
        response: { 200: ListaVerificacaoSchema },
      },
    },
    async (req, reply) => {
      await ListaVerificacaoController.buscarListaVerificacaoPorId(req, reply);
    },
  );

  app.put(
    "/api/avaliacoes/lista-verificacao/:id/editar",
    {
      preHandler: authMiddleware,
      schema: {
        tags: ["Lista de Verificação"],
        security: [{ bearerAuth: [] }],
        headers: authHeadersSchema,
        description:
          "Edita uma lista de verificação pelo ID. É necessário informar o token Bearer no header 'Authorization'.",
        body: listaVerificacaoBodySchema,
        response: { 200: listaVerificacaoBodySchema },
      },
    },
    async (req, reply) => {
      await ListaVerificacaoController.editarListaVerificacao(req, reply);
    },
  );

  app.delete(
    "/api/avaliacoes/lista-verificacao/:id/deletar",
    {
      preHandler: authMiddleware,
      schema: {
        tags: ["Lista de Verificação"],
        security: [{ bearerAuth: [] }],
        headers: authHeadersSchema,
        description:
          "Deleta uma lista de verificação pelo ID. É necessário informar o token Bearer no header 'Authorization'.",
        response: { 200: deletarListaVerificacaoSchema },
      },
    },
    async (req, reply) => {
      await ListaVerificacaoController.deletarListaVerificacao(req, reply);
    },
  );
}
