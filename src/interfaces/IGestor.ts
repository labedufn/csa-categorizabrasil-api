interface DadosIndividuais {
  nomeCompleto: string;
  genero: number;
  idade: number;
  escolaridade: number;
  formacao: string;
  naoTenhaFormacaoTemTreinamento: number;
  tempoTrabalhaComAlimentos: number;
  acreditaComunicacaoBoa: number;
  realizaTreinamentosBoasPraticasManipulacao: number;
  cargaHoraria: string;
  frequenciaAplicacao: number;
  temasTreinamentos: string;
}

interface Conhecimento {
  utilizacaoAdornosFavorecerContaminacao: number;
  aguaVeiculoTransmissaoDoencas: number;
  formaHigienizarMaosEvitaContaminacao: number;
  contatoAlimentosContamina: number;
  leiteVencimentoRisco: number;
  alimentoImproprioApresentaCheiroSabor: number | null;
  carneMalPassada: number;
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

interface PercepcaoRisco {
  riscoApresentarDorBarrigaEstabelecimentoSimilar: number;
  riscoApresentarDorBarrigaEstabelecimentoGerenciado: number;
  riscoDoencaTransmitidaAlimentos: number;
}

interface SistemasGestao {
  liderancaModificadaConsumidorAltaPercepcaoRisco: number;
  comunicacaoModificadaConsumidorAltaPercepcaoRisco: number;
  gerenciarSegurancaModificadaConsumidorAltaPercepcaoRisco: number;
  ambienteTrabalhoModificadaConsumidorAltaPercepcaoRisco: number;
  manipuladorAlimentosModificadaConsumidorAltaPercepcaoRisco: number;
  comprometimentoModificadaConsumidorAltaPercepcaoRisco: number;
  boasPraticasConsumidorAltaPercepcaoRisco: number;
}

export interface IGestor {
  dadosIndividuais: DadosIndividuais;
  conhecimento: Conhecimento;
  comprometimentoAfetivo: ComprometimentoAfetivo;
  comprometimentoNormativo: ComprometimentoNormativo;
  comprometimentoInstrumental: ComprometimentoInstrumental;
  percepcaoRisco: PercepcaoRisco;
  sistemasGestao: SistemasGestao;
  idAvaliacao: string;
}
