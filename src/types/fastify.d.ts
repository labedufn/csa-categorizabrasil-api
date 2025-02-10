import { FastifyRequest } from "fastify";

declare module "fastify" {
  interface FastifyRequest {
    usuario: {
      id: string;
      email: string;
      tipo: "ADMINISTRADOR" | "GESTOR" | "AVALIADOR";
      instituicao: string;
    };
  }
}
