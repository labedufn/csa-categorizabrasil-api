import { z } from "zod";

const analiseQualitativativaItem = z.object({
  valor: z.number(),
  escore: z.string().optional(),
});

const lideranca = z.object({
  gerentesFornecemAssistenciaOrientacaoSegurancaAlimentos: analiseQualitativativaItem,
  gerentesPresentesAreaProducaoManuseioAlimentos: analiseQualitativativaItem,
  gerentesElogiamManipuladoresPraticasSegurasManipulacaoAlimentos: analiseQualitativativaItem,
  gerentesPromovemReconhecimento: analiseQualitativativaItem,
  gerentesComprometidosOrganizacaoSegurancaAlimentos: analiseQualitativativaItem,
  comportamentoGerentesConsistentePraticasSeguras: analiseQualitativativaItem,
  gerentesTrabalhamPoliticasSistemasProcessosAlinhadosSegurancaAlimentos: analiseQualitativativaItem,
});

const comunicacao = z.object({
  instrucoesCorretasComunicadasVerticalHorizontal: analiseQualitativativaItem,
  instrucoesConsideramNivelEducacionalManipuladores: analiseQualitativativaItem,
  manipuladoresFicamAvontadeComunicarAcoesErradasPerguntar: analiseQualitativativaItem,
  manipuladoresFicamAvontadeOpinarMelhorarSegurancaAlimentos: analiseQualitativativaItem,
  manipuladoresFicamAvontadeAvisarFaltaProdutosHigieneQuebraEquipamentosFaltaUtensilios: analiseQualitativativaItem,
  melhoriasSegurancaAlimentosComunicadasInformacoesVisiveisImportantes: analiseQualitativativaItem,
  instrucoesVisuaisAreaProducao: analiseQualitativativaItem,
  manipuladoresRecebemComunicacaoInformalSegurancaAlimentosTrabalho: analiseQualitativativaItem,
});

const conhecimento = z.object({
  conhecimentoAspectosTempoTemperatura: analiseQualitativativaItem,
  conhecimentoMedidaTemperatura: analiseQualitativativaItem,
  conhecimentoMetodoUsarProdutosHigieneAplicarProcessoHigienizacao: analiseQualitativativaItem,
  conhecimentoContaminacaoCruzada: analiseQualitativativaItem,
  conhecimentoMetodoDescongelarAlimentos: analiseQualitativativaItem,
  conhecimentoRiscoPerigoBiologicoFisicoQuimico: analiseQualitativativaItem,
  conhecimentoMetodoLavarMaos: analiseQualitativativaItem,
  conhecimentoOrganizacaoAlimentosDeposito: analiseQualitativativaItem,
  conhecimentoDoencasTransmitidasAlimentos: analiseQualitativativaItem,
  sabemExplicarRequisitosTempoTemperatura: analiseQualitativativaItem,
  sabemExplicarRequisitosContaminacaoCruzada: analiseQualitativativaItem,
  sabemExplicarRequisitosDescongelamentoAlimentosTemperaturaRefrigerada: analiseQualitativativaItem,
  sabemExplicarRequisitosLavagemMaos: analiseQualitativativaItem,
  sabemExplicarRequisitosOrganizacaoEstoque: analiseQualitativativaItem,
});

const comprometimento = z.object({
  manipuladoresGerentesSatisfeitosTrabalho: analiseQualitativativaItem,
  manipuladoresSentemImportanciaTrabalhoComprometidosAtividades: analiseQualitativativaItem,
  manipuladoresGerentesGostamTrabalharOrganizacaoSentemParte: analiseQualitativativaItem,
  manipuladoresResponsaveisTrabalho: analiseQualitativativaItem,
  manipuladoresResponsaveisSegurancaAlimentosComportamentoSeguro: analiseQualitativativaItem,
  manipuladoresMantemAltoGrauLimpezaPessoal: analiseQualitativativaItem,
  manipuladoresIniciativaProcessosHigienizacaoAmbienteTrabalho: analiseQualitativativaItem,
  manipuladoresAtentosTempoTemperaturaRegistramTemperaturasImplementamAcoesCorretivas: analiseQualitativativaItem,
  manipuladoresArmazenamAlimentosEstoquesAdequadosEvitarContaminacaoCruzada: analiseQualitativativaItem,
  manipuladoresAtendemInstrucoesRecepcaoArmazenamentoPrePreparoCozimentoDistribuicao: analiseQualitativativaItem,
  gerentesPriorizamAlocacaoRecursosFinanceirosSegurancaAlimentos: analiseQualitativativaItem,
  gerentesTrabalhamPoliticasSistemasProcessosAlinhadosSegurancaAlimentos: analiseQualitativativaItem,
});

const percepcaoRisco = z.object({
  manipuladoresPercebemRiscoSituacoesAltoRisco: analiseQualitativativaItem,
  trabalhadoresCompreendemPercebemSituacaoAltoRiscoTodosExpostos: analiseQualitativativaItem,
  trabalhadoresEntendemJulgamSituacoesRiscoTomamDecisoes: analiseQualitativativaItem,
  decisaoGerentesBaseadaJulgamentoRisco: analiseQualitativativaItem,
  trabalhadoresPercebemLetalidade: analiseQualitativativaItem,
  trabalhadoresSemViesOtimistaPessimista: analiseQualitativativaItem,
});

export const analiseQualitativaSchema = z.object({
  lideranca,
  comunicacao,
  conhecimento,
  comprometimento,
  percepcaoRisco,
  idAvaliacao: z.string(),
});

export const analiseQualitativaBodySchema = analiseQualitativaSchema.omit({ idAvaliacao: true });

export const analiseQualitativaPorAvaliacaoSchema = z.object({
  AnaliseQualitativa: z.array(analiseQualitativaBodySchema),
  idAvaliacao: z.string(),
});

export const deletarAnaliseQualitativaSchema = z.object({
  message: z.string(),
});
