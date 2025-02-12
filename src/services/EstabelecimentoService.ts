import { IEstabelecimento } from "@interfaces/IEstabelecimento";
import { prisma } from "@config/prisma";

export class EstabelecimentoService {
  async criarEstabelecimento(estabelecimento: IEstabelecimento) {
    const estabelecimentoCriado = await prisma.estabelecimento.create({
      data: {
        nome: estabelecimento.nome,
        cnpj: estabelecimento.cnpj,
        cnae: estabelecimento.cnae,
        endereco: estabelecimento.endereco,
        cidade: estabelecimento.cidade,
        estado: estabelecimento.estado,
        pessoalOcupado: estabelecimento.pessoalOcupado,
        numeroRefeicoes: estabelecimento.numeroRefeicoes,
        possuiAlvaraSanitario: estabelecimento.possuiAlvaraSanitario,
        possuiResponsavelBoasPraticas: estabelecimento.possuiResponsavelBoasPraticas,
        alteradoPor: estabelecimento.alteradoPor,
        ativo: estabelecimento.ativo ?? true,
      },
      select: {
        id: true,
        nome: true,
        cnpj: true,
        cnae: true,
        endereco: true,
        cidade: true,
        estado: true,
        pessoalOcupado: true,
        numeroRefeicoes: true,
        possuiAlvaraSanitario: true,
        possuiResponsavelBoasPraticas: true,
        alteradoEm: true,
        alteradoPor: true,
        ativo: true,
      },
    });
    return estabelecimentoCriado;
  }

  async editarEstabelecimento(id: string, dados: Partial<IEstabelecimento>) {
    const estabelecimentoAtualizado = await prisma.estabelecimento.update({
      where: { id },
      data: {
        ...dados,
      },
      select: {
        id: true,
        nome: true,
        cnpj: true,
        cnae: true,
        endereco: true,
        cidade: true,
        estado: true,
        pessoalOcupado: true,
        numeroRefeicoes: true,
        possuiAlvaraSanitario: true,
        possuiResponsavelBoasPraticas: true,
        alteradoEm: true,
        alteradoPor: true,
        ativo: true,
      },
    });
    return estabelecimentoAtualizado;
  }

  async listarEstabelecimentos() {
    const estabelecimentos = await prisma.estabelecimento.findMany({
      where: {
        ativo: true,
      },
      select: {
        id: true,
        nome: true,
        cnpj: true,
        cnae: true,
        endereco: true,
        cidade: true,
        estado: true,
        pessoalOcupado: true,
        numeroRefeicoes: true,
        possuiAlvaraSanitario: true,
        possuiResponsavelBoasPraticas: true,
        alteradoEm: true,
        alteradoPor: true,
        ativo: true,
      },
    });
    return estabelecimentos;
  }

  async desativarEstabelecimento(id: string, alteradoPor: string) {
    const estabelecimentoDesativado = await prisma.estabelecimento.update({
      where: { id },
      data: {
        ativo: false,
        alteradoPor,
      },
      select: {
        id: true,
        nome: true,
        cnpj: true,
        cnae: true,
        endereco: true,
        cidade: true,
        estado: true,
        pessoalOcupado: true,
        numeroRefeicoes: true,
        possuiAlvaraSanitario: true,
        possuiResponsavelBoasPraticas: true,
        alteradoEm: true,
        alteradoPor: true,
        ativo: true,
      },
    });
    return estabelecimentoDesativado;
  }
}
