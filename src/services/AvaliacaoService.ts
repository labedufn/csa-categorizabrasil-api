import { IAvaliacao } from "../interfaces/IAvaliacao";
import { prisma } from "../config/prisma";

export class AvaliacaoService {
  async criarAvaliacao(avaliacao: IAvaliacao) {
    try {
      const avaliacaoCriada = await prisma.avaliacao.create({
        data: {
          idEstabelecimento: avaliacao.idEstabelecimento,
          ativo: true,
        },
        select: {
          id: true,
          idEstabelecimento: true,
          criadoEm: true,
          alteradoEm: true,
          ativo: true,
        },
      });

      return avaliacaoCriada;
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(`Erro ao criar avaliação: ${error.message}`);
      } else {
        throw new Error("Erro ao criar avaliação: erro desconhecido");
      }
    }
  }
}
