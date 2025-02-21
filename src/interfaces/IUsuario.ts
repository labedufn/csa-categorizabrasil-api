export interface IUsuario {
  nome: string;
  sobrenome: string;
  cpf: string;
  email: string;
  senha: string;
  instituicao: string;
  tipo: "ADMINISTRADOR" | "GESTOR" | "AVALIADOR";
  ativo?: boolean;
  criadoEm?: Date;
  alteradoEm?: Date;
}
