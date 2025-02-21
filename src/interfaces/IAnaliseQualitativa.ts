import { Document, Types } from "mongoose";

interface AnaliseQualitativaItem {
  valor: number;
  escore?: string;
}

interface Lideranca {
  gerentesFornecemAssistenciaOrientacaoSegurancaAlimentos: AnaliseQualitativaItem;
  gerentesPresentesAreaProducaoManuseioAlimentos: AnaliseQualitativaItem;
  gerentesElogiamManipuladoresPraticasSegurasManipulacaoAlimentos: AnaliseQualitativaItem;
  gerentesPromovemReconhecimento: AnaliseQualitativaItem;
  gerentesComprometidosOrganizacaoSegurancaAlimentos: AnaliseQualitativaItem;
  comportamentoGerentesConsistentePraticasSeguras: AnaliseQualitativaItem;
  gerentesTrabalhamPoliticasSistemasProcessosAlinhadosSegurancaAlimentos: AnaliseQualitativaItem;
}

interface Comunicacao {
  instrucoesCorretasComunicadasVerticalHorizontal: AnaliseQualitativaItem;
  instrucoesConsideramNivelEducacionalManipuladores: AnaliseQualitativaItem;
  manipuladoresFicamAvontadeComunicarAcoesErradasPerguntar: AnaliseQualitativaItem;
  manipuladoresFicamAvontadeOpinarMelhorarSegurancaAlimentos: AnaliseQualitativaItem;
  manipuladoresFicamAvontadeAvisarFaltaProdutosHigieneQuebraEquipamentosFaltaUtensilios: AnaliseQualitativaItem;
  melhoriasSegurancaAlimentosComunicadasInformacoesVisiveisImportantes: AnaliseQualitativaItem;
  instrucoesVisuaisAreaProducao: AnaliseQualitativaItem;
  manipuladoresRecebemComunicacaoInformalSegurancaAlimentosTrabalho: AnaliseQualitativaItem;
}

interface Conhecimento {
  conhecimentoAspectosTempoTemperatura: AnaliseQualitativaItem;
  conhecimentoMedidaTemperatura: AnaliseQualitativaItem;
  conhecimentoMetodoUsarProdutosHigieneAplicarProcessoHigienizacao: AnaliseQualitativaItem;
  conhecimentoContaminacaoCruzada: AnaliseQualitativaItem;
  conhecimentoMetodoDescongelarAlimentos: AnaliseQualitativaItem;
  conhecimentoRiscoPerigoBiologicoFisicoQuimico: AnaliseQualitativaItem;
  conhecimentoMetodoLavarMaos: AnaliseQualitativaItem;
  conhecimentoOrganizacaoAlimentosDeposito: AnaliseQualitativaItem;
  conhecimentoDoencasTransmitidasAlimentos: AnaliseQualitativaItem;
  sabemExplicarRequisitosTempoTemperatura: AnaliseQualitativaItem;
  sabemExplicarRequisitosContaminacaoCruzada: AnaliseQualitativaItem;
  sabemExplicarRequisitosDescongelamentoAlimentosTemperaturaRefrigerada: AnaliseQualitativaItem;
  sabemExplicarRequisitosLavagemMaos: AnaliseQualitativaItem;
  sabemExplicarRequisitosOrganizacaoEstoque: AnaliseQualitativaItem;
}

interface Comprometimento {
  manipuladoresGerentesSatisfeitosTrabalho: AnaliseQualitativaItem;
  manipuladoresSentemImportanciaTrabalhoComprometidosAtividades: AnaliseQualitativaItem;
  manipuladoresGerentesGostamTrabalharOrganizacaoSentemParte: AnaliseQualitativaItem;
  manipuladoresResponsaveisTrabalho: AnaliseQualitativaItem;
  manipuladoresResponsaveisSegurancaAlimentosComportamentoSeguro: AnaliseQualitativaItem;
  manipuladoresMantemAltoGrauLimpezaPessoal: AnaliseQualitativaItem;
  manipuladoresIniciativaProcessosHigienizacaoAmbienteTrabalho: AnaliseQualitativaItem;
  manipuladoresAtentosTempoTemperaturaRegistramTemperaturasImplementamAcoesCorretivas: AnaliseQualitativaItem;
  manipuladoresArmazenamAlimentosEstoquesAdequadosEvitarContaminacaoCruzada: AnaliseQualitativaItem;
  manipuladoresAtendemInstrucoesRecepcaoArmazenamentoPrePreparoCozimentoDistribuicao: AnaliseQualitativaItem;
  gerentesPriorizamAlocacaoRecursosFinanceirosSegurancaAlimentos: AnaliseQualitativaItem;
  gerentesTrabalhamPoliticasSistemasProcessosAlinhadosSegurancaAlimentos: AnaliseQualitativaItem;
}

interface PercepcaoRisco {
  manipuladoresPercebemRiscoSituacoesAltoRisco: AnaliseQualitativaItem;
  trabalhadoresCompreendemPercebemSituacaoAltoRiscoTodosExpostos: AnaliseQualitativaItem;
  trabalhadoresEntendemJulgamSituacoesRiscoTomamDecisoes: AnaliseQualitativaItem;
  decisaoGerentesBaseadaJulgamentoRisco: AnaliseQualitativaItem;
  trabalhadoresPercebemLetalidade: AnaliseQualitativaItem;
  trabalhadoresSemViesOtimistaPessimista: AnaliseQualitativaItem;
}

interface PressaoTrabalhoCrencasNormativas {
  manipuladoresCargaTrabalhoPesada: AnaliseQualitativaItem;
  tempoTrabalhoSuficiente: AnaliseQualitativaItem;
  quantidadeManipuladoresSuficiente: AnaliseQualitativaItem;
  manipuladoresPressaoTrabalharRapidamente: AnaliseQualitativaItem;
  manipuladoresGerentesRelacaoRespeito: AnaliseQualitativaItem;
}

interface AmbienteTrabalho {
  layoutPermiteFluxoAdequadoPreparacaoAlimentos: AnaliseQualitativaItem;
  barreirasFisicasAcessarCadaArea: AnaliseQualitativaItem;
  caixaAguaExclusivaConservada: AnaliseQualitativaItem;
  pisoParedeTetoPortasJanelasProjetadosPermitirHigienizacao: AnaliseQualitativaItem;
  quantidadeAdequadaUtensilios: AnaliseQualitativaItem;
  utensiliosProjetadosPermitirSanitizacao: AnaliseQualitativaItem;
  utensiliosBoasCondicoes: AnaliseQualitativaItem;
  utensiliosMaterialNaoToxico: AnaliseQualitativaItem;
  utensiliosAtendemNecessidadesManipuladores: AnaliseQualitativaItem;
  equipamentosSuficientes: AnaliseQualitativaItem;
  equipamentosProjetadosFacilitarAcessoLimpezaManutencaoInspecaoAcidentes: AnaliseQualitativaItem;
  manutencaoCorretivaEquipamento: AnaliseQualitativaItem;
  manutencaoPreventivaEquipamento: AnaliseQualitativaItem;
  equipamentoFuncionaCorretamenteSemVazamentosDesgasteRuido: AnaliseQualitativaItem;
}

interface SistemaGestao {
  equipeMotivadaImplementarPraticasSegurasFerramentasQualidade: AnaliseQualitativaItem;
  manipuladoresIntegradosSistemasProcessosSegurancaAlimentos: AnaliseQualitativaItem;
  equipeSabePreencherFormulariosControle: AnaliseQualitativaItem;
  procedimentosDocumentadosFormulariosRegistroAtualizados: AnaliseQualitativaItem;
  registrosEquipamentosAtualizadosRefletemStatusRealDesempenhoEquipamento: AnaliseQualitativaItem;
  programasPreRequisitoHaccpSistemaBoasPraticasHigieneImplementados: AnaliseQualitativaItem;
  processoProducaoAlinhadoPraticasSegurasProjetadoMinimizarRiscos: AnaliseQualitativaItem;
}

export interface IAnaliseQualitativa extends Document {
  lideranca: Lideranca;
  comunicacao: Comunicacao;
  conhecimento: Conhecimento;
  comprometimento: Comprometimento;
  percepcaoRisco: PercepcaoRisco;
  pressaoTrabalhoCrencasNormativas: PressaoTrabalhoCrencasNormativas;
  ambienteTrabalho: AmbienteTrabalho;
  sistemaGestao: SistemaGestao;

  idAvaliacao: Types.ObjectId;
}
