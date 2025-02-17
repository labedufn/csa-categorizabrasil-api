import { conviteCreateSchema } from "@schemas/convite.schema";
import { ConviteService } from "@services/ConviteService";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

const conviteService = new ConviteService();

export class ConviteController {
  static async enviarConvite(req: FastifyRequest, reply: FastifyReply) {
    try {
      const { email, instituicao, tipo } = req.body as z.infer<typeof conviteCreateSchema>;
      const idCriador = req.usuario?.id;

      if (!idCriador) {
        return reply.status(401).send({ message: "Usuário não autenticado" });
      }

      const { tipo: tipoUsuario, instituicao: instituicaoUsuario } = req.usuario;

      if (tipoUsuario !== "GESTOR" && tipoUsuario !== "ADMINISTRADOR") {
        return reply.status(403).send({ message: "Acesso negado" });
      }

      const finalInstituicao = tipoUsuario === "GESTOR" ? instituicaoUsuario : instituicao;

      if (!finalInstituicao) {
        const errorMessage =
          tipoUsuario === "GESTOR"
            ? "Instituição do gestor não encontrada"
            : "Campo 'instituicao' é obrigatório para administradores";
        return reply.status(400).send({ message: errorMessage });
      }

      const link = await conviteService.enviarConvite(idCriador, email, finalInstituicao, tipo);

      reply.send({ link });
    } catch (error) {
      reply.status(500).send({ message: (error as Error).message });
    }
  }
}
