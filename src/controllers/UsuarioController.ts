import { atualizarUsuarioSchema, atualizarSenhaSchema } from "../schemas/usuario.schema";
import { UsuarioService } from "../services/UsuarioService";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

const service = new UsuarioService();

export class UsuarioController {
  static async editarUsuario(req: FastifyRequest, reply: FastifyReply) {
    try {
      const userId = req.usuario?.id;
      if (!userId) {
        return reply.status(401).send({ message: "Usuário não autenticado" });
      }
      const body = req.body as z.infer<typeof atualizarUsuarioSchema>;
      const usuarioAtualizado = await service.atualizarUsuario(userId, body);
      reply.send(usuarioAtualizado);
    } catch (error) {
      reply.status(400).send({ message: (error as Error).message });
    }
  }

  static async atualizarSenha(req: FastifyRequest, reply: FastifyReply) {
    try {
      const userId = req.usuario?.id;
      if (!userId) {
        return reply.status(401).send({ message: "Usuário não autenticado" });
      }
      const { senhaAtual, novaSenha } = req.body as z.infer<typeof atualizarSenhaSchema>;
      const resultado = await service.alterarSenha(userId, senhaAtual, novaSenha);
      reply.send(resultado);
    } catch (error) {
      reply.status(400).send({ message: (error as Error).message });
    }
  }
}
