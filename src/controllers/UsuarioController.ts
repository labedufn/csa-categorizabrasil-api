import { atualizarUsuarioSchema, atualizarSenhaSchema } from "../schemas/usuario.schema";
import { UsuarioService } from "../services/UsuarioService";
import { FastifyReply, FastifyRequest } from "fastify";
import { prisma } from "../config/prisma";
import { z } from "zod";

const service = new UsuarioService();
const usuarioService = new UsuarioService();

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

      const { id: idUsuario } = req.params as { id: string };

      if (usuarioLogado.tipo === "GESTOR") {
        const usuarioAlvo = await service.obterUsuarioPorId(idUsuario);
        if (!usuarioAlvo) {
          return reply.status(404).send({ message: "Usuário não encontrado" });
        }
        if (usuarioAlvo.instituicao !== usuarioLogado.instituicao) {
          return reply.status(403).send({ message: "Acesso negado: usuário não pertence à sua instituição" });
        }
      } else if (usuarioLogado.tipo !== "ADMINISTRADOR") {
        return reply.status(403).send({ message: "Acesso negado" });
      }

      const resultado = await service.desativarUsuario(idUsuario);
      reply.send(resultado);
    } catch (error) {
      reply.status(400).send({ message: (error as Error).message });
    }
  }

  static async alterarTipoUsuario(req: FastifyRequest, reply: FastifyReply) {
    try {
      const callingUser = req.usuario;
      if (!callingUser) {
        return reply.status(401).send({ message: "Usuário não autenticado" });
      }

      const targetUserId = (req.params as { id: string }).id;
      const { novoTipo } = req.body as {
        novoTipo: "ADMINISTRADOR" | "GESTOR" | "AVALIADOR";
      };

      const targetUser = await prisma.usuario.findUnique({ where: { id: targetUserId } });
      if (!targetUser) {
        return reply.status(404).send({ message: "Usuário não encontrado" });
      }

      if (callingUser.tipo === "GESTOR") {
        if (novoTipo === "ADMINISTRADOR") {
          return reply
            .status(403)
            .send({ message: "Gestor não tem permissão para definir o tipo como ADMINISTRADOR." });
        }
        if (callingUser.instituicao !== targetUser.instituicao) {
          return reply.status(403).send({ message: "Você não tem permissão para alterar o tipo deste usuário." });
        }
      }

      const updatedUser = await usuarioService.alterarTipoUsuario(targetUserId, novoTipo);
      reply.send(updatedUser);
    } catch (error) {
      reply.status(400).send({ message: (error as Error).message });
    }
  }
}
