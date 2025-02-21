import { Document, Types } from "mongoose";

interface DadosIndividuais {
  nomeCompleto: string;
  genero: number;
  idade: number;
  escolaridade: number;
  formacao: string;
  participouTreinamentoManipulacaoAlimentos: number;
  tempoTrabalhaComAlimentos: number;
  boaComunicacaoChefe: number;
  boaComunicacaoEntreFuncionarios: number;
}

interface Lideranca {
  normasHigiene: number;
  liderAtento: number;
  funcionariosRepreendidos: number;
}

interface Comunicacao {
  tenhoLiberdadeComLider: number;
  informacoesNecessariasDisponiveis: number;
  informacoesAdequadasNormasHigiene: number;
  fornecerSugestoesMelhoria: number;
}

interface Conhecimento {
  utilizacaoAdornosFavorecerContaminacao: number;
  aguaVeiculoTransmissaoDoencas: number;
  formaHigienizarMaosEvitaContaminacao: number;
  contatoAlimentosContamina: number;
  leiteVencimentoRisco: number;
  alimentoImproprioApresentaCheiroSabor: number;
  carneMalPassada: number;
  lavarVegetaisSuficiente: number;
  descongelamentoAlimentosBacia: number;
  manipuladorAlimentoDoenteContamina: number;
}

interface ComprometimentoAfetivo {
  problemasRestauranteMeus: number;
  restauranteTemSignificado: number;
  restauranteMereceMinhaLealdade: number;
  trabalharPorNecessidadeEDesejo: number;
  dedicarMinhaCarreiraAoRestaurante: number;
}

interface ComprometimentoNormativo {
  naoDeixaEmpregoPoisObrigacaoMoral: number;
  culpadoDeixasseEmprego: number;
  naoSeriaCertoDeixarEmprego: number;
  devoEsseEmprego: number;
}

interface ComprometimentoInstrumental {
  deixarEmpregoVidaDesestruturada: number;
  poucasAlternativasCasoDeixarEmprego: number;
  muitoDificilDeixarEmprego: number;
}

interface ComprometimentoSegurancaAlimentos {
  sigoNormasHigieneResponsabilidade: number;
  segurancaAltaPrioridade: number;
  sigoNormasHigieneImportante: number;
  empenhadoSeguirNormasHigiene: number;
}

interface PercepcaoRisco {
  riscoApresentarDorBarrigaEstabelecimentoSimilar: number;
  riscoApresentarDorBarrigaEstabelecimentoManipulado: number;
  riscoApresentarDorBarrigaEstabelecimentoColegaManipulado: number;
  riscoDoencaTransmitidaAlimentos: number;
}

interface PressoesTrabalhoCrencasNormativas {
  chefeSeguirBoasPraticas: number;
  colegasTrabalhoNormasHigiene: number;
  autoridadesVigilanciaSanitariaNormasHigiene: number;
  clientesNormasHigiene: number;
  tempoSuficienteNormasHigiene: number;
  numeroFuncionariosAdequadoManipularFormaSegura: number;
}

interface AmbienteTrabalho {
  equipamentosNecessariosFormaSegura: number;
  estruturaAdequadaNormasHigiene: number;
  produtosHigienizacaoAdequadosManipulacaoAlimentos: number;
}

interface SistemasGestao {
  cooperacaoEntreAreasFormaSegura: number;
  novosFuncionariosAntigosFuncionariosBoaPraticaManipulacaoAlimentos: number;
  muitoTrabalhoRapidamenteFuncionariosTrabalhamJuntos: number;
  funcionariosLembramSeguirBoasPraticasManipulacaoAlimentos: number;
  acreditoLegislacaoEscritaRespaldo: number;
  economizarProdutosHigienizacaoDiminuirCusto: number;
}

export interface IManipuladorAlimentos extends Document {
  dadosIndividuais: DadosIndividuais;
  lideranca: Lideranca;
  comunicacao: Comunicacao;
  conhecimento: Conhecimento;
  comprometimentoAfetivo: ComprometimentoAfetivo;
  comprometimentoNormativo: ComprometimentoNormativo;
  comprometimentoInstrumental: ComprometimentoInstrumental;
  comprometimentoSegurancaAlimentos: ComprometimentoSegurancaAlimentos;
  percepcaoRisco: PercepcaoRisco;
  pressoesTrabalhoCrencasNormativas: PressoesTrabalhoCrencasNormativas;
  ambienteTrabalho: AmbienteTrabalho;
  sistemasGestao: SistemasGestao;
  idAvaliacao: Types.ObjectId;
  criadoEm: Date;
  alteradoEm: Date;
  ativo?: boolean;
  analiseQuantitativa: Types.ObjectId[];
}
