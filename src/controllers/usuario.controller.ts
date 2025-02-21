import { atualizarUsuarioSchema, atualizarSenhaSchema } from "@schemas/usuario.schema";
import { UsuarioService } from "@services/usuario.service";
import { FastifyReply, FastifyRequest } from "fastify";
import { Usuario } from "@models/usuario.model";
import { z } from "zod";

const usuarioService = new UsuarioService();

export class UsuarioController {
  static async editarUsuario(req: FastifyRequest, reply: FastifyReply) {
    try {
      const usuarioLogado = req.usuario;
      if (!usuarioLogado?.id) {
        return reply.status(401).send({ message: "Usuário não autenticado" });
      }

      const body = req.body as z.infer<typeof atualizarUsuarioSchema>;
      const usuarioAtualizado = await usuarioService.atualizarUsuario(usuarioLogado.id, body);

      return reply.send(usuarioAtualizado);
    } catch (error) {
      return reply.status(400).send({ message: (error as Error).message });
    }
  }

  static async atualizarSenha(req: FastifyRequest, reply: FastifyReply) {
    try {
      const usuarioLogado = req.usuario;
      if (!usuarioLogado?.id) {
        return reply.status(401).send({ message: "Usuário não autenticado" });
      }

      const { senhaAtual, novaSenha } = req.body as z.infer<typeof atualizarSenhaSchema>;
      const resultado = await usuarioService.alterarSenha(usuarioLogado.id, senhaAtual, novaSenha);

      return reply.send(resultado);
    } catch (error) {
      return reply.status(400).send({ message: (error as Error).message });
    }
  }

  static async listarUsuarios(req: FastifyRequest, reply: FastifyReply) {
    try {
      const usuarioLogado = req.usuario;
      if (!usuarioLogado) {
        return reply.status(401).send({ message: "Usuário não autenticado" });
      }

      if (usuarioLogado.tipo === "ADMINISTRADOR") {
        const usuarios = await usuarioService.listarUsuarios();
        return reply.send(usuarios);
      }

      if (usuarioLogado.tipo === "GESTOR") {
        const usuarios = await usuarioService.listarUsuariosPorInstituicao(usuarioLogado.instituicao);
        return reply.send(usuarios);
      }

      return reply.status(403).send({ message: "Acesso negado" });
    } catch (error) {
      return reply.status(400).send({ message: (error as Error).message });
    }
  }

  static async buscarUsuarioPorId(req: FastifyRequest, reply: FastifyReply) {
    try {
      const { id: idUsuario } = req.params as { id: string };
      const usuario = await usuarioService.buscarUsuarioPorId(idUsuario);
      reply.send(usuario);
    } catch (error) {
      reply.status(400).send({ error: (error as Error).message });
    }
  }

  static async alterarStatusUsuario(req: FastifyRequest, reply: FastifyReply) {
    try {
      const usuarioLogado = req.usuario;
      if (!usuarioLogado) {
        return reply.status(401).send({ message: "Usuário não autenticado" });
      }

      const { id: idUsuario } = req.params as { id: string };
      const { ativo } = req.body as { ativo: boolean };

      if (usuarioLogado.tipo === "GESTOR") {
        const usuarioAlvo = await usuarioService.buscarUsuarioPorId(idUsuario);
        if (!usuarioAlvo) {
          return reply.status(404).send({ message: "Usuário não encontrado" });
        }
        if (usuarioAlvo.instituicao !== usuarioLogado.instituicao) {
          return reply.status(403).send({
            message: "Acesso negado: usuário não pertence à sua instituição",
          });
        }
      } else if (usuarioLogado.tipo !== "ADMINISTRADOR") {
        return reply.status(403).send({ message: "Acesso negado" });
      }

      const resultado = await usuarioService.alterarStatusUsuario(idUsuario, ativo);

      return reply.send({
        message: `Status do usuário atualizado com sucesso`,
        ativo: resultado?.ativo ?? false,
      });
    } catch (error) {
      return reply.status(400).send({ message: (error as Error).message });
    }
  }

  static async alterarTipoUsuario(req: FastifyRequest, reply: FastifyReply) {
    try {
      const usuarioLogado = req.usuario;
      if (!usuarioLogado) {
        return reply.status(401).send({ message: "Usuário não autenticado" });
      }

      const { id: targetUsuarioId } = req.params as { id: string };
      const { novoTipo } = req.body as { novoTipo: "ADMINISTRADOR" | "GESTOR" | "AVALIADOR" };

      // Converter a consulta para Mongoose
      const targetUsuario = await Usuario.findById(targetUsuarioId).exec();
      if (!targetUsuario) {
        return reply.status(404).send({ message: "Usuário não encontrado" });
      }

      if (usuarioLogado.tipo === "GESTOR") {
        if (novoTipo === "ADMINISTRADOR") {
          return reply.status(403).send({
            message: "Gestor não tem permissão para definir o tipo como ADMINISTRADOR.",
          });
        }
        if (usuarioLogado.instituicao !== targetUsuario.instituicao) {
          return reply.status(403).send({
            message: "Você não tem permissão para alterar o tipo deste usuário.",
          });
        }
      }

      const usuarioAtualizado = await usuarioService.alterarTipoUsuario(targetUsuarioId, novoTipo);
      return reply.send(usuarioAtualizado);
    } catch (error) {
      return reply.status(400).send({ message: (error as Error).message });
    }
  }
}
