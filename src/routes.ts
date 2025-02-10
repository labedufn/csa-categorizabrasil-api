import { criarUsuarioSchema, usuarioSchema } from "./schemas";
import { FastifyTypedInstance } from "./types/fastifyTypes";
import { FastifyReply, FastifyRequest } from "fastify";
import { Usuario } from "./interfaces/usuario";
import { randomUUID } from "node:crypto";
import { z } from "zod";

const usuarios: Usuario[] = [];

export async function routes(app: FastifyTypedInstance) {
  // Rota para listar usuários
  app.get(
    "/usuarios",
    {
      schema: {
        tags: ["Usuários"],
        description: "Retorna todos os usuários",
        response: {
          200: z.array(usuarioSchema),
        },
      },
    },
    async (_request: FastifyRequest, reply: FastifyReply) => {
      return reply.send(usuarios);
    },
  );

  // Rota para criar um usuário
  app.post(
    "/usuarios",
    {
      schema: {
        tags: ["Usuários"],
        description: "Cria um novo usuário",
        body: criarUsuarioSchema,
        response: {
          201: usuarioSchema,
        },
      },
    },
    async (request: FastifyRequest<{ Body: z.infer<typeof criarUsuarioSchema> }>, reply: FastifyReply) => {
      const { nome, email } = request.body;

      const novoUsuario: Usuario = {
        id: randomUUID(),
        nome,
        email,
      };

      usuarios.push(novoUsuario);

      return reply.status(201).send(novoUsuario);
    },
  );
}
