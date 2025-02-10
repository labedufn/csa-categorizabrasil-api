import { loginSchema, registrarSchema, loginResponseSchema, registrarComConviteSchema } from "../schemas/auth.schema";
import { ConviteService } from "../services/ConviteService";
import { FastifyReply, FastifyRequest } from "fastify";
import { AuthService } from "../services/AuthService";
import { z } from "zod";

const authService = new AuthService();
const conviteService = new ConviteService();

export class AuthController {
  static async registrar(req: FastifyRequest<{ Body: z.infer<typeof registrarSchema> }>, reply: FastifyReply) {
    try {
      const usuario = await authService.registrarUsuario(req.body);
      reply.status(201).send(usuario);
    } catch (error) {
      const errorMessage = (error as Error).message;
      reply.status(500).send({ message: "Erro ao registrar usuário", error: errorMessage });
    }
  }

  static async registrarComConvite(req: FastifyRequest, reply: FastifyReply) {
    try {
      const { conviteToken, nome, sobrenome, cpf, senha } = req.body as z.infer<typeof registrarComConviteSchema>;

      const convite = await conviteService.getConvite(conviteToken);
      if (!convite) {
        return reply.status(400).send({ message: "Convite não encontrado" });
      }
      if (convite.expiresAt < new Date() || convite.usado) {
        return reply.status(400).send({ message: "Convite inválido ou expirado" });
      }

      const dadosRegistro = {
        nome,
        sobrenome,
        cpf,
        senha,
        email: convite.email,
        instituicao: convite.instituicao,
        tipo: convite.tipo,
      };

      const resultado = await authService.registrarUsuario(dadosRegistro);

      await conviteService.marcarConviteComoUsado(conviteToken);

      reply.status(201).send(resultado);
    } catch (error) {
      reply.status(500).send({ message: (error as Error).message });
    }
  }

  static async login(req: FastifyRequest<{ Body: z.infer<typeof loginSchema> }>, reply: FastifyReply) {
    try {
      const { emailOuCpf, senha } = req.body;
      const usuario = await authService.loginUsuario(emailOuCpf, senha);
      reply.send(usuario);
    } catch (error) {
      reply.status(401).send({ message: "Credenciais inválidas" });
    }
  }
}
