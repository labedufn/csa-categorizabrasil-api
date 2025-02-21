import { IAnaliseQualitativa } from "@interfaces/IAnaliseQualitativa";
import { Schema, model } from "mongoose";

const AnaliseQualitativaItemSchema = new Schema(
  {
    valor: { type: Number, required: true },
    escore: { type: String },
  },
  { _id: false },
);

const LiderancaSchema = new Schema(
  {
    gerentesFornecemAssistenciaOrientacaoSegurancaAlimentos: { type: AnaliseQualitativaItemSchema, required: true },
    gerentesPresentesAreaProducaoManuseioAlimentos: { type: AnaliseQualitativaItemSchema, required: true },
    gerentesElogiamManipuladoresPraticasSegurasManipulacaoAlimentos: {
      type: AnaliseQualitativaItemSchema,
      required: true,
    },
    gerentesPromovemReconhecimento: { type: AnaliseQualitativaItemSchema, required: true },
    gerentesComprometidosOrganizacaoSegurancaAlimentos: { type: AnaliseQualitativaItemSchema, required: true },
    comportamentoGerentesConsistentePraticasSeguras: { type: AnaliseQualitativaItemSchema, required: true },
    gerentesTrabalhamPoliticasSistemasProcessosAlinhadosSegurancaAlimentos: {
      type: AnaliseQualitativaItemSchema,
      required: true,
    },
  },
  { _id: false },
);

const ComunicacaoSchema = new Schema(
  {
    instrucoesCorretasComunicadasVerticalHorizontal: { type: AnaliseQualitativaItemSchema, required: true },
    instrucoesConsideramNivelEducacionalManipuladores: { type: AnaliseQualitativaItemSchema, required: true },
    manipuladoresFicamAvontadeComunicarAcoesErradasPerguntar: { type: AnaliseQualitativaItemSchema, required: true },
    manipuladoresFicamAvontadeOpinarMelhorarSegurancaAlimentos: { type: AnaliseQualitativaItemSchema, required: true },
    manipuladoresFicamAvontadeAvisarFaltaProdutosHigieneQuebraEquipamentosFaltaUtensilios: {
      type: AnaliseQualitativaItemSchema,
      required: true,
    },
    melhoriasSegurancaAlimentosComunicadasInformacoesVisiveisImportantes: {
      type: AnaliseQualitativaItemSchema,
      required: true,
    },
    instrucoesVisuaisAreaProducao: { type: AnaliseQualitativaItemSchema, required: true },
    manipuladoresRecebemComunicacaoInformalSegurancaAlimentosTrabalho: {
      type: AnaliseQualitativaItemSchema,
      required: true,
    },
  },
  { _id: false },
);

const ConhecimentoSchema = new Schema(
  {
    conhecimentoAspectosTempoTemperatura: { type: AnaliseQualitativaItemSchema, required: true },
    conhecimentoMedidaTemperatura: { type: AnaliseQualitativaItemSchema, required: true },
    conhecimentoMetodoUsarProdutosHigieneAplicarProcessoHigienizacao: {
      type: AnaliseQualitativaItemSchema,
      required: true,
    },
    conhecimentoContaminacaoCruzada: { type: AnaliseQualitativaItemSchema, required: true },
    conhecimentoMetodoDescongelarAlimentos: { type: AnaliseQualitativaItemSchema, required: true },
    conhecimentoRiscoPerigoBiologicoFisicoQuimico: { type: AnaliseQualitativaItemSchema, required: true },
    conhecimentoMetodoLavarMaos: { type: AnaliseQualitativaItemSchema, required: true },
    conhecimentoOrganizacaoAlimentosDeposito: { type: AnaliseQualitativaItemSchema, required: true },
    conhecimentoDoencasTransmitidasAlimentos: { type: AnaliseQualitativaItemSchema, required: true },
    sabemExplicarRequisitosTempoTemperatura: { type: AnaliseQualitativaItemSchema, required: true },
    sabemExplicarRequisitosContaminacaoCruzada: { type: AnaliseQualitativaItemSchema, required: true },
    sabemExplicarRequisitosDescongelamentoAlimentosTemperaturaRefrigerada: {
      type: AnaliseQualitativaItemSchema,
      required: true,
    },
    sabemExplicarRequisitosLavagemMaos: { type: AnaliseQualitativaItemSchema, required: true },
    sabemExplicarRequisitosOrganizacaoEstoque: { type: AnaliseQualitativaItemSchema, required: true },
  },
  { _id: false },
);

const ComprometimentoSchema = new Schema(
  {
    manipuladoresGerentesSatisfeitosTrabalho: { type: AnaliseQualitativaItemSchema, required: true },
    manipuladoresSentemImportanciaTrabalhoComprometidosAtividades: {
      type: AnaliseQualitativaItemSchema,
      required: true,
    },
    manipuladoresGerentesGostamTrabalharOrganizacaoSentemParte: { type: AnaliseQualitativaItemSchema, required: true },
    manipuladoresResponsaveisTrabalho: { type: AnaliseQualitativaItemSchema, required: true },
    manipuladoresResponsaveisSegurancaAlimentosComportamentoSeguro: {
      type: AnaliseQualitativaItemSchema,
      required: true,
    },
    manipuladoresMantemAltoGrauLimpezaPessoal: { type: AnaliseQualitativaItemSchema, required: true },
    manipuladoresIniciativaProcessosHigienizacaoAmbienteTrabalho: {
      type: AnaliseQualitativaItemSchema,
      required: true,
    },
    manipuladoresAtentosTempoTemperaturaRegistramTemperaturasImplementamAcoesCorretivas: {
      type: AnaliseQualitativaItemSchema,
      required: true,
    },
    manipuladoresArmazenamAlimentosEstoquesAdequadosEvitarContaminacaoCruzada: {
      type: AnaliseQualitativaItemSchema,
      required: true,
    },
    manipuladoresAtendemInstrucoesRecepcaoArmazenamentoPrePreparoCozimentoDistribuicao: {
      type: AnaliseQualitativaItemSchema,
      required: true,
    },
    gerentesPriorizamAlocacaoRecursosFinanceirosSegurancaAlimentos: {
      type: AnaliseQualitativaItemSchema,
      required: true,
    },
    gerentesTrabalhamPoliticasSistemasProcessosAlinhadosSegurancaAlimentos: {
      type: AnaliseQualitativaItemSchema,
      required: true,
    },
  },
  { _id: false },
);

const PercepcaoRiscoSchema = new Schema(
  {
    manipuladoresPercebemRiscoSituacoesAltoRisco: { type: AnaliseQualitativaItemSchema, required: true },
    trabalhadoresCompreendemPercebemSituacaoAltoRiscoTodosExpostos: {
      type: AnaliseQualitativaItemSchema,
      required: true,
    },
    trabalhadoresEntendemJulgamSituacoesRiscoTomamDecisoes: { type: AnaliseQualitativaItemSchema, required: true },
    decisaoGerentesBaseadaJulgamentoRisco: { type: AnaliseQualitativaItemSchema, required: true },
    trabalhadoresPercebemLetalidade: { type: AnaliseQualitativaItemSchema, required: true },
    trabalhadoresSemViesOtimistaPessimista: { type: AnaliseQualitativaItemSchema, required: true },
  },
  { _id: false },
);

const PressaoTrabalhoCrencasNormativasSchema = new Schema(
  {
    manipuladoresCargaTrabalhoPesada: { type: AnaliseQualitativaItemSchema, required: true },
    tempoTrabalhoSuficiente: { type: AnaliseQualitativaItemSchema, required: true },
    quantidadeManipuladoresSuficiente: { type: AnaliseQualitativaItemSchema, required: true },
    manipuladoresPressaoTrabalharRapidamente: { type: AnaliseQualitativaItemSchema, required: true },
    manipuladoresGerentesRelacaoRespeito: { type: AnaliseQualitativaItemSchema, required: true },
  },
  { _id: false },
);

const AmbienteTrabalhoSchema = new Schema(
  {
    layoutPermiteFluxoAdequadoPreparacaoAlimentos: { type: AnaliseQualitativaItemSchema, required: true },
    barreirasFisicasAcessarCadaArea: { type: AnaliseQualitativaItemSchema, required: true },
    caixaAguaExclusivaConservada: { type: AnaliseQualitativaItemSchema, required: true },
    pisoParedeTetoPortasJanelasProjetadosPermitirHigienizacao: { type: AnaliseQualitativaItemSchema, required: true },
    quantidadeAdequadaUtensilios: { type: AnaliseQualitativaItemSchema, required: true },
    utensiliosProjetadosPermitirSanitizacao: { type: AnaliseQualitativaItemSchema, required: true },
    utensiliosBoasCondicoes: { type: AnaliseQualitativaItemSchema, required: true },
    utensiliosMaterialNaoToxico: { type: AnaliseQualitativaItemSchema, required: true },
    utensiliosAtendemNecessidadesManipuladores: { type: AnaliseQualitativaItemSchema, required: true },
    equipamentosSuficientes: { type: AnaliseQualitativaItemSchema, required: true },
    equipamentosProjetadosFacilitarAcessoLimpezaManutencaoInspecaoAcidentes: {
      type: AnaliseQualitativaItemSchema,
      required: true,
    },
    manutencaoCorretivaEquipamento: { type: AnaliseQualitativaItemSchema, required: true },
    manutencaoPreventivaEquipamento: { type: AnaliseQualitativaItemSchema, required: true },
    equipamentoFuncionaCorretamenteSemVazamentosDesgasteRuido: { type: AnaliseQualitativaItemSchema, required: true },
  },
  { _id: false },
);

const SistemaGestaoSchema = new Schema(
  {
    equipeMotivadaImplementarPraticasSegurasFerramentasQualidade: {
      type: AnaliseQualitativaItemSchema,
      required: true,
    },
    manipuladoresIntegradosSistemasProcessosSegurancaAlimentos: { type: AnaliseQualitativaItemSchema, required: true },
    equipeSabePreencherFormulariosControle: { type: AnaliseQualitativaItemSchema, required: true },
    procedimentosDocumentadosFormulariosRegistroAtualizados: { type: AnaliseQualitativaItemSchema, required: true },
    registrosEquipamentosAtualizadosRefletemStatusRealDesempenhoEquipamento: {
      type: AnaliseQualitativaItemSchema,
      required: true,
    },
    programasPreRequisitoHaccpSistemaBoasPraticasHigieneImplementados: {
      type: AnaliseQualitativaItemSchema,
      required: true,
    },
    processoProducaoAlinhadoPraticasSegurasProjetadoMinimizarRiscos: {
      type: AnaliseQualitativaItemSchema,
      required: true,
    },
  },
  { _id: false },
);

const AnaliseQualitativaSchema = new Schema<IAnaliseQualitativa>(
  {
    lideranca: { type: LiderancaSchema, required: true },
    comunicacao: { type: ComunicacaoSchema, required: true },
    conhecimento: { type: ConhecimentoSchema, required: true },
    comprometimento: { type: ComprometimentoSchema, required: true },
    percepcaoRisco: { type: PercepcaoRiscoSchema, required: true },
    pressaoTrabalhoCrencasNormativas: { type: PressaoTrabalhoCrencasNormativasSchema, required: true },
    ambienteTrabalho: { type: AmbienteTrabalhoSchema, required: true },
    sistemaGestao: { type: SistemaGestaoSchema, required: true },

    idAvaliacao: { type: Schema.Types.ObjectId, required: true },
  },
  {
    timestamps: true,
  },
);

export const AnaliseQualitativa = model<IAnaliseQualitativa>("AnaliseQualitativa", AnaliseQualitativaSchema);
