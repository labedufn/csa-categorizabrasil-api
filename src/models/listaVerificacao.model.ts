import { IListaVerificacao } from "@interfaces/IListaVerificacao";
import { Schema, model } from "mongoose";

const AbastecimentoAguaSchema = new Schema(
  {
    utilizaSeExclusivamenteAguaPotavelParaManipulacaoDeAlimentosAguaDeAbastecimentoPublicoOuSolucaoAlternativaComPotabilidadeAtestadaSemestralmentePorMeioDeLaudosLaboratoriais:
      { type: Number, required: true },
    instalacoesAbastecidasDeAguaCorrente: { type: Number, required: true },
    instalacoesDispoemDeConexoesComRedeDeEsgotoOuFossaSeptica: { type: Number, required: true },
    reservatorioEmAdequadoEstadoDeHigiene: { type: Number, required: true },
    reservatorioDevidamenteTampadoEConservadoLivreDeRachadurasVazamentosInfiltracoesDescascamentosDentreOutrosDefeitos:
      { type: Number, required: true },
    reservatorioDeAguaHigienizadoEmIntervaloMaximoDeSeisMesesSendoMantidosRegistrosDaOperacao: {
      type: Number,
      required: true,
    },
    materialQueRevesteInternamenteOReservatorioDeAguaNaoComprometeAQualidadeDaAgua: { type: Number, required: true },
  },
  { _id: false },
);

const EstruturaSchema = new Schema(
  {
    instalacoesSanitariasPossuemLavatoriosDeMaosEOsProdutosDestinadosAHigienePessoalPapelHigienicoSaboneteLiquidoInodoroAntissepticoOuSaboneteLiquidoInodoroEAntissepticoColetoresComTampaEAcionadosSemContatoManualEToalhasDePapelNaoRecicladoOuOutroSistemaHigienicoESegurosParaSecagemDasMaos:
      { type: Number, required: true },
    existeSeparacaoEntreAsDiferentesAtividadesPorMeiosFisicosOuPorOutrosMeiosEficazesDeFormaAEvitarAContaminacaoCruzada:
      { type: Number, required: true },
  },
  { _id: false },
);

const HigienizacaoInstalacoesEquipamentosMoveisUtensiliosSchema = new Schema(
  {
    instalacoesEquipamentosMoveisEUtensiliosMantidosEmCondicoesHigienicoSanitariaAdequadas: {
      type: Number,
      required: true,
    },
    frequenciaAdequadaDeHigienizacaoDosEquipamentosMoveisEUtensilios: { type: Number, required: true },
    utensiliosUtilizadosNaHigienizacaoDeInstalacoesDistintosDaquelesUsadosParaHigienizacaoDasPartesDosEquipamentosEUtensiliosQueEntremEmContatoComOAlimento:
      { type: Number, required: true },
    diluicaoTempoDeContatoEModoDeUsoOuAplicacaoDosProdutosSaneantesObedeceAsInstrucoesRecomendadasPeloFabricante: {
      type: Number,
      required: true,
    },
    produtosSaneantesRegularizadosPeloMinisterioDaSaude: { type: Number, required: true },
    areasDePreparacaoHigienizadasQuantasVezesForeMnecessariasEImediatamenteAposOTerminoDoTrabalho: {
      type: Number,
      required: true,
    },
  },
  { _id: false },
);

const ControleIntegradoDeVetoresEPragasUrbanasSchema = new Schema(
  {
    controleDeVetoresEPragasUrbanasExecutadosPorEmpresaEspecializadaDevidamenteRegularizada: {
      type: Number,
      required: true,
    },
    existenciaDeUmConjuntoDeAcoesEficazesEContinuaComOObjetivoDeImpedirAAtracaoOAbrigoOAcessoEOuProliferacaoDeVetoresEPragasUrbanas:
      { type: Number, required: true },
    edificacoesInstalacoesEquipamentosMoveisEUtensiliosLivresDaPresencaDeAnimaisIncluindoVetoresEPragasUrbanas: {
      type: Number,
      required: true,
    },
  },
  { _id: false },
);

const ManipuladoresSchema = new Schema(
  {
    osManipuladoresSaoAfastadosDaPreparacaoDeAlimentosQuandoApresentamLesoesEOuSintomasDeEnfermidades: {
      type: Number,
      required: true,
    },
    lavamCuidadosamenteAsMaosAoChegarAoTrabalhoAntesEAposManipularOAlimentoAposQualquerInterrupcaoDoServicoAposTocarMateriaisContaminadosAposUsarOsSanitariosESempreQueSeFizerNecessario:
      { type: Number, required: true },
    naoFumamEFalamQuandoDesnecessarioCantamAssobiamEspirramCospemTossemComemManipulamDinheiroOuPraticamOutrosAtosQuePossamContaminarOAlimentoDuranteODesempenhoDasAtividades:
      { type: Number, required: true },
  },
  { _id: false },
);

const MateriaPrimaIngredientesEmbalagensSchema = new Schema(
  {
    submetidosAInspecaoEAprovacaoNaRecepcao: { type: Number, required: true },
    materiasPrimasIngredientesEEmbalagensUtilizadosParaPreparacaoEmCondicoesHigienicoSanitariasAdequadas: {
      type: Number,
      required: true,
    },
    embalagensPrimariasDasMateriasPrimasEDosIngredientesIntegras: { type: Number, required: true },
    utilizacaoDasMateriasPrimasEIngredientesRespeitaOPrazoDeValidadeOuSeObservaAOrdemDeEntrada: {
      type: Number,
      required: true,
    },
    materiasPrimasFracionadasAdequadamenteAcondicionadasEIdentificadasComNoMinimoAsSeguintesInformacoesDesignacaoDoProdutoDataDeFracionamentoEPrazoDeValidadeAposAberturaOuRetiradaDaEmbalagemOriginal:
      { type: Number, required: true },
    temperaturaDasMateriasPrimasEIngredientesPereciveisVerificadaNaRecepcaoENoArmazenamento: {
      type: Number,
      required: true,
    },
    geloUtilizadoEmAlimentosFabricadoAPartirDeAguaPotavelEMantidoEmCondicaoHigienicoSanitaria: {
      type: Number,
      required: true,
    },
  },
  { _id: false },
);

const PreparoDoAlimentoSchema = new Schema(
  {
    lavatoriosDaAreaDePreparacaoDotadosDosProdutosDestinadosAHigieneDasMaosSaboneteLiquidoInodoroAntissepticoOuSaboneteLiquidoInodoroEProdutoAntissepticoToalhasDePapelNaoRecicladoOuOutroSistemaHigienicoESeguroDeSecagemDasMaos:
      { type: Number, required: true },
    duranteOPreparoAquelesQueManipulamAlimentosCrusRealizamALavagemEAAntissepsiaDasMaosAntesDeManusearAlimentosPreparados:
      { type: Number, required: true },
    produtosPereciveisExpostosATemperaturaAmbienteSomentePeloTempoMinimoNecessarioParaPreparacaoDoAlimento: {
      type: Number,
      required: true,
    },
    descongelamentoConduzidoConformeOrientacaoDoFabricanteEUtilizandoUmaDasSeguintesTecnicasRefrigeracaoATemperaturaInferiorA5COuEmFornoDeMicroOndasQuandoOAlimentoForSubmetidoImediatamenteACocao:
      { type: Number, required: true },
    alimentosSubmetidosAoDescongelamentoMantidosSobRefrigeracaoSeNaoForeImediatamenteUtilizadosENaoSeRecongela: {
      type: Number,
      required: true,
    },
    tratamentoTermicoGaranteQueTodasAsPartesDoAlimentoAtinjamATemperaturaDeNoMinimo70COuOutraCombinacaoDeTempoETemperaturaDesdeQueAssegureAQualidadeHigienicoSanitariaDosAlimentos:
      { type: Number, required: true },
    avaliaSeAEficaciaDoTratamentoTermico: { type: Number, required: true },
    possuemTermometroComprovadamenteCalibradoParaAAfericaoDaTemperaturaDosAlimentos: { type: Number, required: true },
    aposOResfriamentoAlimentoPreparadoConservadoSobRefrigeracaoATemperaturasInferioresA5COuCongeladoATemperaturaIgualOuInferiorA18:
      { type: Number, required: true },
    alimentosConsumidosCrusQuandoAplicavelSubmetidosAProcessoDeHigienizacaoComProdutosRegularizadosEAplicadosDeFormaAEvitarAPresencaDeResiduos:
      { type: Number, required: true },
    evitaSeOContatoDiretoOuIndiretoEntreAlimentosCrusSemiProntosEProntosParaOConsumo: { type: Number, required: true },
    temperaturaDoAlimentoPreparadoNoResfriamentoReduzidaDe60CA10CEmAte2Horas: { type: Number, required: true },
  },
  { _id: false },
);

const ArmazenamentoTransporteExposicaoDoAlimentoPreparadoSchema = new Schema(
  {
    alimentoPreparadoArmazenadoIdentificado: { type: Number, required: true },
    prazoMaximoConsumo5Dias4COuInferior: { type: Number, required: true },
    prazoMaximoConsumoAcima4CAbaixo5C: { type: Number, required: true },
    manipuladoresMinimizamRiscoContaminacao: { type: Number, required: true },
    alimentoPreparadoConservado5COuInferior: { type: Number, required: true },
    alimentosPreparadosAcima60C: { type: Number, required: true },
    temperaturaEquipamentosExposicaoMonitorada: { type: Number, required: true },
    alimentosArmazenadosIdentificadosProtegidos: { type: Number, required: true },
    armazenamentoTransporteTemperaturaAdequada: { type: Number, required: true },
  },
  { _id: false },
);

const ResponsabilidadeDocumentacaoRegistroSchema = new Schema(
  {
    possuiUmResponsavelPelasAtividadesDeManipulacaoDeAlimentosResponsavelTecnicoProprietarioOuFuncionarioDesignadoDevidamenteCapacitado:
      { type: Number, required: true },
    empresaSegueOManualDeBoasPraticasEOsProcedimentosOperacionaisPadronizados: { type: Number, required: true },
  },
  { _id: false },
);

const AreasExternasSchema = new Schema(
  {
    livresDeObjetosEmDesusoOuEstranhosAoAmbiente: { type: Number, required: true },
  },
  { _id: false },
);

const AreasInternasSchema = new Schema(
  {
    livresDeObjetosEmDesusoOuEstranhosAoAmbiente: { type: Number, required: true },
  },
  { _id: false },
);

const EdificacaoEInstalacoesSchema = new Schema(
  {
    projetadasDeFormaAPossibilitarUmFluxoOrdenadoESemCruzamentosEmTodasAsEtapasDePreparacaoDeAlimentos: {
      type: Number,
      required: true,
    },
    projetadasParaFacilitarAsOperacoesDeManutencaoLimpezaEQuandoForOCasoDesinfeccao: { type: Number, required: true },
    acessoAsInstalacoesIndependenteENaoComumAOutrosUsos: { type: Number, required: true },
    existeControleDoAcessoDePessoal: { type: Number, required: true },
    dimensionamentoCompativelComTodasAsOperacoes: { type: Number, required: true },
    existeSeparacaoEntreAsDiferentesAtividadesPorMeiosFisicosOuPorOutrosMeiosEficazesDeFormaAEvitarAContaminacaoCruzada:
      { type: Number, required: true },
  },
  { _id: false },
);

const InstalacoesFisicasPisosSchema = new Schema(
  {
    possuemRevestimentosLisosImpermeaveisELavaveis: { type: Number, required: true },
    emAdequadoEstadoDeConservacaoLivresDeRachadurasTrincasBuracosEOutrosDefeitos: { type: Number, required: true },
  },
  { _id: false },
);

const InstalacoesFisicasParedesSchema = new Schema(
  {
    possuemRevestimentosLisosImpermeaveisELavaveis: { type: Number, required: true },
    emAdequadoEstadoDeConservacaoLivresDeRachadurasTrincasInfiltracoesBoloresDescascamentosDentreOutrosDefeitos: {
      type: Number,
      required: true,
    },
  },
  { _id: false },
);

const InstalacoesFisicasTetosSchema = new Schema(
  {
    possuemRevestimentosLisosImpermeaveisELavaveis: { type: Number, required: true },
    tetoDaAreaDeManipulacaoEArmazenamentoDeAlimentosMantidoEmAdequadoEstadoDeConservacaoLivreDeGoteirasVazamentosInfiltracoesBoloresDescascamentosDentreOutrosDefeitos:
      { type: Number, required: true },
    tetoDasDemaisAreasMantidoEmAdequadoEstadoDeConservacaoLivreDeGoteirasVazamentosInfiltracoesBoloresDescascamentosDentreOutrosDefeitos:
      { type: Number, required: true },
  },
  { _id: false },
);

const PortasSchema = new Schema(
  {
    portasMantidasAjustadasAosBatentesBemFechadasEVedadas: { type: Number, required: true },
    portasDaAreaDePreparacaoEArmazenamentoPossuemFechamentoAutomatico: { type: Number, required: true },
    portasExternasNaAreaDePreparacaoEArmazenamentoProvidasDeTelasMilimetradasLimpasEmBomEstadoDeConservacaoEAjustadasAosBatentes:
      { type: Number, required: true },
    telasRemoviveisParaFacilitarALimpezaPeriodica: { type: Number, required: true },
  },
  { _id: false },
);

const JanelasEOutrasAberturasSistemaDeExaustaoSchema = new Schema(
  {
    janelasMantidasAjustadasAosBatentesBemFechadasEVedadas: { type: Number, required: true },
    areaDePreparacaoEArmazenamentoProvidasDeTelasMilimetradasLimpasEmBomEstadoDeConservacaoEAjustadasAosBatentes: {
      type: Number,
      required: true,
    },
    telasRemoviveisParaFacilitarALimpezaPeriodica: { type: Number, required: true },
  },
  { _id: false },
);

const RalosEGrelhasSchema = new Schema(
  {
    ralosSifonadosQuandoPresentes: { type: Number, required: true },
    quandoPresentesAsGrelhasPossuemDispositivoDeFechamento: { type: String, required: true },
  },
  { _id: false },
);

const CaixaDeGorduraEEsgotoSchema = new Schema(
  {
    possuemDimensaoCompativelAoVolumeDeResiduos: { type: Number, required: true },
    localizadasForaDaAreaDePreparacaoEArmazenamentoDeAlimentos: { type: Number, required: true },
    apresentamAdequadoEstadoDeConservacaoEFuncionamento: { type: Number, required: true },
  },
  { _id: false },
);

const IluminacaoSchema = new Schema(
  {
    iluminacaoDaAreaDePreparacaoProporcionaAVisualizacaoAdequada: { type: Number, required: true },
    luminariasLocalizadasSobreAAreaDePreparacaoDosAlimentosApropriadasEProtegidasContraExplosaoEQuedasAcidentais: {
      type: Number,
      required: true,
    },
  },
  { _id: false },
);

const InstalacoesEletricasSchema = new Schema(
  {
    embutidasOuProtegidasEmTubulacoesExternas: { type: Number, required: true },
    integraisPossibilitandoAHigienizacaoDosAmbientes: { type: Number, required: true },
  },
  { _id: false },
);

const VentilacaoSchema = new Schema(
  {
    garanteARenovacaoDoArEManutencaoDoAmbienteEmCondicoesQueNaoComprometamAQualidadeHigienicoSanitariaDoAlimentoLivreDeFungosFumacaPosCondensacaoDeVapores:
      { type: Number, required: true },
    adequadoFluxoDeArNaoIncideDiretamenteSobreOsAlimentos: { type: Number, required: true },
    fluxoDeArNaoCirculaDeAreasContaminadasParaAreasLimpas: { type: Number, required: true },
    equipamentosEFiltrosParaClimatizacaoBemConservados: { type: Number, required: true },
    realizaSeLimpezaDosComponentesDoSistemaDeClimatizacaoATrocaDeFiltrosEManutencaoProgramadaEPeriodicaDestesEquipamentos:
      { type: Number, required: true },
    existeRegistroDaLimpezaDosComponentesDosSistemasDeClimatizacaoDaTrocaDeFiltrosEDaManutencaoProgramadaEPeriodicaDestesEquipamentos:
      { type: Number, required: true },
  },
  { _id: false },
);

const InstalacoesSanitariasEVestariosSchema = new Schema(
  {
    localizadosSemComunicacaoDiretaComAAreaDePreparacaoEArmazenamento: { type: Number, required: true },
    mantidosOrganizadosLimposEEmAdequadoEstadoDeConservacao: { type: Number, required: true },
    portasExternasComFechamentoAutomatico: { type: Number, required: true },
    instalacoesSanitariasPossuemLavatoriosDeMaosEOsProdutosDestinadosAHigienePessoal: { type: Number, required: true },
  },
  { _id: false },
);

const LavatorioAreaDeManipulacaoSchema = new Schema(
  {
    existeLavatorioExclusivoParaAHigieneDasMaosNaAreaDeManipulacaoEmPosicoesEstrategicasEmRelacaoAoFluxoDePreparo: {
      type: Number,
      required: true,
    },
    emNumeroSuficienteDeModoAAtenderTodaAAreaDePreparacao: { type: Number, required: true },
    possuemSaboneteLiquidoInodoroAntissepticoOuSaboneteLiquidoInodoroEProdutoAntissepticoToalhasDePapelNaoRecicladoOuOutroSistemaHigienicoESeguroDeSecagemDasMaos:
      { type: Number, required: true },
    possuemColetoresDePapelAcionadosSemContatoManual: { type: Number, required: true },
  },
  { _id: false },
);

const EquipamentosSchema = new Schema(
  {
    equipamentosQueEntramEmContatoComAlimentosDeMateriaisQueNaoTransmitamSubstanciasToxicasOdoresNemSaboresAosAlimentos:
      { type: Number, required: true },
    mantidosEmAdequadoEstadoDeConservacaoResistentesACorrosaoEARepetidasOperacoesDeLimpezaEDesinfeccao: {
      type: Number,
      required: true,
    },
    equipamentosUtilizadosNaPreparacaoEmbalagemArmazenamentoTransporteDistribuicaoEExposicaoAVendaDosAlimentosPossuemAsSuperficiesLisasImpermeaveisLavaveisEIsentasDeRugosidadesFrestasEOOutrasImperfeicoes:
      { type: Number, required: true },
    realizamSeManutencoesProgramadasEPeriodicasBemComoORegistroDessaOperacao: { type: Number, required: true },
    possuemTermometroComprovadamenteCalibradoParaAAfericaoDaTemperaturaDosAlimentos: { type: Number, required: true },
  },
  { _id: false },
);

const UtensiliosSchema = new Schema(
  {
    utensiliosQueEntramEmContatoComAlimentosDeMateriaisQueNaoTransmitamSubstanciasToxicasOdoresNemSaboresAosAlimentos: {
      type: Number,
      required: true,
    },
    mantidosEmAdequadoEstadoDeConservacaoResistentesACorrosaoEARepetidasOperacoesDeLimpezaEDesinfeccao: {
      type: Number,
      required: true,
    },
    utensiliosUtilizadosNaPreparacaoEmbalagemArmazenamentoTransporteDistribuicaoEExposicaoAVendaDosAlimentosPossuemAsSuperficiesLisasImpermeaveisLavaveisEIsentasDeRugosidadesFrestasEOOutrasImperfeicoes:
      { type: Number, required: true },
  },
  { _id: false },
);

const MoveisSchema = new Schema(
  {
    moveisQueEntramEmContatoComAlimentosDeMateriaisQueNaoTransmitamSubstanciasToxicasOdoresNemSaboresAosAlimentos: {
      type: Number,
      required: true,
    },
    mantidosEmAdequadoEstadoDeConservacaoResistentesACorrosaoEARepetidasOperacoesDeLimpezaEDesinfeccao: {
      type: Number,
      required: true,
    },
    moveisUtilizadosNaPreparacaoEmbalagemArmazenamentoTransporteDistribuicaoEExposicaoAVendaDosAlimentosPossuemAsSuperficiesLisasImpermeaveisLavaveisEIsentasDeRugosidadesFrestasEOOutrasImperfeicoes:
      { type: Number, required: true },
  },
  { _id: false },
);

const ListaVerificacaoSchema = new Schema<IListaVerificacao>(
  {
    abastecimentoAgua: { type: AbastecimentoAguaSchema, required: true },
    estrutura: { type: EstruturaSchema, required: true },
    higienizacaoInstalacoesEquipamentosMoveisUtensilios: {
      type: HigienizacaoInstalacoesEquipamentosMoveisUtensiliosSchema,
      required: true,
    },
    controleIntegradoDeVetoresEPragasUrbanas: { type: ControleIntegradoDeVetoresEPragasUrbanasSchema, required: true },
    manipuladores: { type: ManipuladoresSchema, required: true },
    materiaPrimaIngredientesEmbalagens: { type: MateriaPrimaIngredientesEmbalagensSchema, required: true },
    preparoDoAlimento: { type: PreparoDoAlimentoSchema, required: true },
    armazenamentoTransporteExposicaoDoAlimentoPreparado: {
      type: ArmazenamentoTransporteExposicaoDoAlimentoPreparadoSchema,
      required: true,
    },
    responsabilidadeDocumentacaoRegistro: { type: ResponsabilidadeDocumentacaoRegistroSchema, required: true },
    areasExternas: { type: AreasExternasSchema, required: true },
    areasInternas: { type: AreasInternasSchema, required: true },
    edificacaoEInstalacoes: { type: EdificacaoEInstalacoesSchema, required: true },
    instalacoesFisicasPisos: { type: InstalacoesFisicasPisosSchema, required: true },
    instalacoesFisicasParedes: { type: InstalacoesFisicasParedesSchema, required: true },
    instalacoesFisicasTetos: { type: InstalacoesFisicasTetosSchema, required: true },
    portas: { type: PortasSchema, required: true },
    janelasEOutrasAberturasSistemaDeExaustao: {
      type: JanelasEOutrasAberturasSistemaDeExaustaoSchema,
      required: true,
    },
    ralosEGrelhas: { type: RalosEGrelhasSchema, required: true },
    caixaDeGorduraEEsgoto: { type: CaixaDeGorduraEEsgotoSchema, required: true },
    iluminacao: { type: IluminacaoSchema, required: true },
    instalacoesEletricas: { type: InstalacoesEletricasSchema, required: true },
    ventilacao: { type: VentilacaoSchema, required: true },
    instalacoesSanitariasEVestarios: { type: InstalacoesSanitariasEVestariosSchema, required: true },
    lavatorioAreaDeManipulacao: { type: LavatorioAreaDeManipulacaoSchema, required: true },
    equipamentos: { type: EquipamentosSchema, required: true },
    utensilios: { type: UtensiliosSchema, required: true },
    moveis: { type: MoveisSchema, required: true },
    idAvaliacao: { type: Schema.Types.ObjectId, required: true },
  },
  {
    timestamps: true,
  },
);

export const ListaVerificacao = model<IListaVerificacao>("ListaVerificacao", ListaVerificacaoSchema);
