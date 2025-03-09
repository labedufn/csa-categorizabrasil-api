import { manipuladorAlimentosRoutes } from "./manipuladorAlimentos.routes";
import { analiseQualitativaRoutes } from "./analiseQualitativa.routes";
import { listaVerificacaoRoutes } from "./listaVerificacao.routes";
import { estabelecimentoRoutes } from "./estabelecimento.routes";
import { redefinirSenhaRoutes } from "./redefinirSenha.routes";
import { avaliacaoRoutes } from "./avaliacao.route";
import { usuarioRoutes } from "./usuario.routes";
import { conviteRoutes } from "./convite.routes";
import { gestorRoutes } from "./gestor.routes";
import { authRoutes } from "./auth.routes";
import { FastifyInstance } from "fastify";

export async function routes(app: FastifyInstance) {
  await app.register(authRoutes);
  await app.register(redefinirSenhaRoutes);
  await app.register(usuarioRoutes);
  await app.register(conviteRoutes);
  await app.register(estabelecimentoRoutes);
  await app.register(avaliacaoRoutes);
  await app.register(gestorRoutes);
  await app.register(manipuladorAlimentosRoutes);
  await app.register(listaVerificacaoRoutes);
  await app.register(analiseQualitativaRoutes);
}
