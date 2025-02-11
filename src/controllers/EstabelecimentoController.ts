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
        pessoalOcupado,
        numeroRefeicoes,
        possuiAlvaraSanitario,
        possuiResponsavelBoasPraticas,
      } = req.body as {
        nome: string;
        cnpj: string;
        cnae: string;
        endereco: string;
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

      const editarEstabelecimentoService = new EstabelecimentoService();
      const estabelecimentoAtualizado = await editarEstabelecimentoService.editarEstabelecimento(
        estabelecimentoId,
        dadosParaAtualizar,
      );
      reply.send({ estabelecimentoAtualizado });
    } catch (error) {
      reply.status(400).send({ error: (error as Error).message });
    }
  }
}
