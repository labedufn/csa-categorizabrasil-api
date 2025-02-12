export interface IEstabelecimento {
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
  alteradoPor: string;
  ativo?: boolean;
}
