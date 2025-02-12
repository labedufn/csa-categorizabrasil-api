import { EstabelecimentoService } from "../services/EstabelecimentoService";
import { IEstabelecimento } from "../interfaces/IEstabelecimento";
import { FastifyRequest, FastifyReply } from "fastify";

const estabelecimentoService = new EstabelecimentoService();

export class EstabelecimentoController {
  static async criarEstabelecimento(req: FastifyRequest, reply: FastifyReply) {
    try {
      const {
        nome,
        cnpj,
        cnae,
        endereco,
        cidade,
        estado,
        pessoalOcupado,
        numeroRefeicoes,
        possuiAlvaraSanitario,
        possuiResponsavelBoasPraticas,
      } = req.body as {
        nome: string;
        cnpj: string;
        cnae: string;
        endereco: string;
        cidade: string;
        estado: string;
        pessoalOcupado: number;
        numeroRefeicoes: number;
        possuiAlvaraSanitario: number;
        possuiResponsavelBoasPraticas: number;
      };

      const alteradoPor = req.usuario.id;

      const novoEstabelecimento: IEstabelecimento = {
        nome,
        cnpj,
        cnae,
        endereco,
        cidade,
        estado,
        pessoalOcupado,
        numeroRefeicoes,
        possuiAlvaraSanitario,
        possuiResponsavelBoasPraticas,
        alteradoPor,
        ativo: true,
      };

      const estabelecimentoCriado = await estabelecimentoService.criarEstabelecimento(novoEstabelecimento);

      reply.send({ estabelecimentoCriado });
    } catch (error) {
      reply.status(400).send({ error: (error as Error).message });
    }
  }

  static async editarEstabelecimento(req: FastifyRequest, reply: FastifyReply) {
    try {
      const { id: estabelecimentoId } = req.params as { id: string };

      const dadosEnviados = req.body as Partial<IEstabelecimento>;

      const alteradoPor = req.usuario.id;

      const dadosParaAtualizar: Partial<IEstabelecimento> = {
        ...dadosEnviados,
        alteradoPor,
      };

      const estabelecimentoAtualizado = await estabelecimentoService.editarEstabelecimento(
        estabelecimentoId,
        dadosParaAtualizar,
      );
      reply.send({ estabelecimentoAtualizado });
    } catch (error) {
      reply.status(400).send({ error: (error as Error).message });
    }
  }

  static async listarEstabelecimentos(req: FastifyRequest, reply: FastifyReply) {
    try {
      const estabelecimentos = await estabelecimentoService.listarEstabelecimentos();
      reply.send({ estabelecimentos });
    } catch (error) {
      reply.status(400).send({ error: (error as Error).message });
    }
  }

  static async desativarEstabelecimento(req: FastifyRequest, reply: FastifyReply) {
    try {
      const { id: estabelecimentoId } = req.params as { id: string };
      const alteradoPor = req.usuario.id;

      const estabelecimentoDesativado = await estabelecimentoService.desativarEstabelecimento(
        estabelecimentoId,
        alteradoPor,
      );
      reply.send({ estabelecimentoDesativado });
    } catch (error) {
      reply.status(400).send({ error: (error as Error).message });
    }
  }
}
