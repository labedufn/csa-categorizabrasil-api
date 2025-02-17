import { IAvaliacao } from "@interfaces/IAvaliacao";
import { prisma } from "@config/prisma";

export class AvaliacaoService {
  async criarAvaliacao(avaliacao: IAvaliacao, idUsuario: string) {
    try {
      const avaliacaoCriada = await prisma.avaliacao.create({
        data: {
          idEstabelecimento: avaliacao.idEstabelecimento,
          ativo: true,
          idCriador: idUsuario,
        },
        select: {
          id: true,
          idEstabelecimento: true,
          idCriador: true,
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

  async desativarAvaliacao(idAvaliacao: string) {
    try {
      const avaliacaoDesativada = await prisma.avaliacao.update({
        where: {
          id: idAvaliacao,
        },
        data: {
          ativo: false,
        },
        select: {
          id: true,
          idEstabelecimento: true,
          criadoEm: true,
          alteradoEm: true,
          ativo: true,
        },
      });

      return avaliacaoDesativada;
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(`Erro ao desativar avaliação: ${error.message}`);
      } else {
        throw new Error("Erro ao desativar avaliação: erro desconhecido");
      }
    }
  }
}
