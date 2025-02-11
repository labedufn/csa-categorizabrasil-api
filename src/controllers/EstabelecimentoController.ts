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

      const alteradoPor = (req as any).id_usuario || "sistema";

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
}
