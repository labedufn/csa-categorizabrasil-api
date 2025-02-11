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

  static async listarUsuarios(req: FastifyRequest, reply: FastifyReply) {
    try {
      const usuarioLogado = req.usuario;
      if (!usuarioLogado) {
        return reply.status(401).send({ message: "Usuário não autenticado" });
      }

      let usuarios;
      if (usuarioLogado.tipo === "ADMINISTRADOR") {
        usuarios = await service.listarUsuarios();
      } else if (usuarioLogado.tipo === "GESTOR") {
        usuarios = await service.listarUsuariosPorInstituicao(usuarioLogado.instituicao);
      } else {
        return reply.status(403).send({ message: "Acesso negado" });
      }
      reply.send(usuarios);
    } catch (error) {
      reply.status(400).send({ message: (error as Error).message });
    }
  }

  static async desativarUsuario(req: FastifyRequest, reply: FastifyReply) {
    try {
      const usuarioLogado = req.usuario;
      if (!usuarioLogado) {
        return reply.status(401).send({ message: "Usuário não autenticado" });
      }

      const { id } = req.params as { id: string };

      if (usuarioLogado.tipo === "GESTOR") {
        const usuarioAlvo = await service.obterUsuarioPorId(id);
        if (!usuarioAlvo) {
          return reply.status(404).send({ message: "Usuário não encontrado" });
        }
        if (usuarioAlvo.instituicao !== usuarioLogado.instituicao) {
          return reply.status(403).send({ message: "Acesso negado: usuário não pertence à sua instituição" });
        }
      } else if (usuarioLogado.tipo !== "ADMINISTRADOR") {
        return reply.status(403).send({ message: "Acesso negado" });
      }

      const resultado = await service.desativarUsuario(id);
      reply.send(resultado);
    } catch (error) {
      reply.status(400).send({ message: (error as Error).message });
    }
  }
}
