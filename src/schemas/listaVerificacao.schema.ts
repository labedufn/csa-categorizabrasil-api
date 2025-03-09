import { z } from "zod";

const abastecimentoAguaSchema = z.object({
  utilizaSeExclusivamenteAguaPotavelParaManipulacaoDeAlimentosAguaDeAbastecimentoPublicoOuSolucaoAlternativaComPotabilidadeAtestadaSemestralmentePorMeioDeLaudosLaboratoriais:
    z.number(),
  instalacoesAbastecidasDeAguaCorrente: z.number(),
  instalacoesDispoemDeConexoesComRedeDeEsgotoOuFossaSeptica: z.number(),
  reservatorioEmAdequadoEstadoDeHigiene: z.number(),
  reservatorioDevidamenteTampadoEConservadoLivreDeRachadurasVazamentosInfiltracoesDescascamentosDentreOutrosDefeitos:
    z.number(),
  reservatorioDeAguaHigienizadoEmIntervaloMaximoDeSeisMesesSendoMantidosRegistrosDaOperacao: z.number(),
  materialQueRevesteInternamenteOReservatorioDeAguaNaoComprometeAQualidadeDaAgua: z.number(),
});

const estruturaSchema = z.object({
  existeSeparacaoEntreAsDiferentesAtividadesPorMeiosFisicosOuPorOutrosMeiosEficazesDeFormaAEvitarAContaminacaoCruzada:
    z.number(),
});

const higienizacaoInstalacoesEquipamentosMoveisUtensiliosSchema = z.object({
  instalacoesEquipamentosMoveisEUtensiliosMantidosEmCondicoesHigienicoSanitariaAdequadas: z.number(),
  frequenciaAdequadaDeHigienizacaoDosEquipamentosMoveisEUtensilios: z.number(),
  utensiliosUtilizadosNaHigienizacaoDeInstalacoesDistintosDaquelesUsadosParaHigienizacaoDasPartesDosEquipamentosEUtensiliosQueEntremEmContatoComOAlimento:
    z.number(),
  diluicaoTempoDeContatoEModoDeUsoOuAplicacaoDosProdutosSaneantesObedeceAsInstrucoesRecomendadasPeloFabricante:
    z.number(),
  produtosSaneantesRegularizadosPeloMinisterioDaSaude: z.number(),
  areasDePreparacaoHigienizadasQuantasVezesForeMnecessariasEImediatamenteAposOTerminoDoTrabalho: z.number(),
});

const controleIntegradoDeVetoresEPragasUrbanasSchema = z.object({
  controleDeVetoresEPragasUrbanasExecutadosPorEmpresaEspecializadaDevidamenteRegularizada: z.number(),
  existenciaDeUmConjuntoDeAcoesEficazesEContinuaComOObjetivoDeImpedirAAtracaoOAbrigoOAcessoEOuProliferacaoDeVetoresEPragasUrbanas:
    z.number(),
  edificacoesInstalacoesEquipamentosMoveisEUtensiliosLivresDaPresencaDeAnimaisIncluindoVetoresEPragasUrbanas:
    z.number(),
});

const manipuladoresSchema = z.object({
  osManipuladoresSaoAfastadosDaPreparacaoDeAlimentosQuandoApresentamLesoesEOuSintomasDeEnfermidades: z.number(),
  lavamCuidadosamenteAsMaosAoChegarAoTrabalhoAntesEAposManipularOAlimentoAposQualquerInterrupcaoDoServicoAposTocarMateriaisContaminadosAposUsarOsSanitariosESempreQueSeFizerNecessario:
    z.number(),
  naoFumamEFalamQuandoDesnecessarioCantamAssobiamEspirramCospemTossemComemManipulamDinheiroOuPraticamOutrosAtosQuePossamContaminarOAlimentoDuranteODesempenhoDasAtividades:
    z.number(),
});

const materiaPrimaIngredientesEmbalagensSchema = z.object({
  submetidosAInspecaoEAprovacaoNaRecepcao: z.number(),
  materiasPrimasIngredientesEEmbalagensUtilizadosParaPreparacaoEmCondicoesHigienicoSanitariasAdequadas: z.number(),
  embalagensPrimariasDasMateriasPrimasEDosIngredientesIntegras: z.number(),
  utilizacaoDasMateriasPrimasEIngredientesRespeitaOPrazoDeValidadeOuSeObservaAOrdemDeEntrada: z.number(),
  materiasPrimasFracionadasAdequadamenteAcondicionadasEIdentificadasComNoMinimoAsSeguintesInformacoesDesignacaoDoProdutoDataDeFracionamentoEPrazoDeValidadeAposAberturaOuRetiradaDaEmbalagemOriginal:
    z.number(),
  temperaturaDasMateriasPrimasEIngredientesPereciveisVerificadaNaRecepcaoENoArmazenamento: z.number(),
  geloUtilizadoEmAlimentosFabricadoAPartirDeAguaPotavelEMantidoEmCondicaoHigienicoSanitaria: z.number(),
});

const preparoDoAlimentoSchema = z.object({
  lavatoriosDaAreaDePreparacaoDotadosDosProdutosDestinadosAHigieneDasMaosSaboneteLiquidoInodoroAntissepticoOuSaboneteLiquidoInodoroEProdutoAntissepticoToalhasDePapelNaoRecicladoOuOutroSistemaHigienicoESeguroDeSecagemDasMaos:
    z.number(),
  duranteOPreparoAquelesQueManipulamAlimentosCrusRealizamALavagemEAAntissepsiaDasMaosAntesDeManusearAlimentosPreparados:
    z.number(),
  produtosPereciveisExpostosATemperaturaAmbienteSomentePeloTempoMinimoNecessarioParaPreparacaoDoAlimento: z.number(),
  descongelamentoConduzidoConformeOrientacaoDoFabricanteEUtilizandoUmaDasSeguintesTecnicasRefrigeracaoATemperaturaInferiorA5COuEmFornoDeMicroOndasQuandoOAlimentoForSubmetidoImediatamenteACocao:
    z.number(),
  alimentosSubmetidosAoDescongelamentoMantidosSobRefrigeracaoSeNaoForeImediatamenteUtilizadosENaoSeRecongela:
    z.number(),
  tratamentoTermicoGaranteQueTodasAsPartesDoAlimentoAtinjamATemperaturaDeNoMinimo70COuOutraCombinacaoDeTempoETemperaturaDesdeQueAssegureAQualidadeHigienicoSanitariaDosAlimentos:
    z.number(),
  avaliaSeAEficaciaDoTratamentoTermico: z.number(),
  possuemTermometroComprovadamenteCalibradoParaAAfericaoDaTemperaturaDosAlimentos: z.number(),
  aposOResfriamentoAlimentoPreparadoConservadoSobRefrigeracaoATemperaturasInferioresA5COuCongeladoATemperaturaIgualOuInferiorA18:
    z.number(),
  alimentosConsumidosCrusQuandoAplicavelSubmetidosAProcessoDeHigienizacaoComProdutosRegularizadosEAplicadosDeFormaAEvitarAPresencaDeResiduos:
    z.number(),
  evitaSeOContatoDiretoOuIndiretoEntreAlimentosCrusSemiProntosEProntosParaOConsumo: z.number(),
  temperaturaDoAlimentoPreparadoNoResfriamentoReduzidaDe60CA10CEmAte2Horas: z.number(),
});

const armazenamentoTransporteExposicaoDoAlimentoPreparadoSchema = z.object({
  alimentoPreparadoArmazenadoIdentificado: z.number(),
  prazoMaximoConsumo5Dias4COuInferior: z.number(),
  prazoMaximoConsumoAcima4CAbaixo5C: z.number(),
  manipuladoresMinimizamRiscoContaminacao: z.number(),
  alimentoPreparadoConservado5COuInferior: z.number(),
  alimentosPreparadosAcima60C: z.number(),
  temperaturaEquipamentosExposicaoMonitorada: z.number(),
  alimentosArmazenadosIdentificadosProtegidos: z.number(),
  armazenamentoTransporteTemperaturaAdequada: z.number(),
});

const responsabilidadeDocumentacaoRegistroSchema = z.object({
  possuiUmResponsavelPelasAtividadesDeManipulacaoDeAlimentosResponsavelTecnicoProprietarioOuFuncionarioDesignadoDevidamenteCapacitado:
    z.number(),
  empresaSegueOManualDeBoasPraticasEOsProcedimentosOperacionaisPadronizados: z.number(),
});

const areasExternasSchema = z.object({
  livresDeObjetosEmDesusoOuEstranhosAoAmbiente: z.number(),
});

const areasInternasSchema = z.object({
  livresDeObjetosEmDesusoOuEstranhosAoAmbiente: z.number(),
});

const edificacaoEInstalacoesSchema = z.object({
  projetadasDeFormaAPossibilitarUmFluxoOrdenadoESemCruzamentosEmTodasAsEtapasDePreparacaoDeAlimentos: z.number(),
  projetadasParaFacilitarAsOperacoesDeManutencaoLimpezaEQuandoForOCasoDesinfeccao: z.number(),
  acessoAsInstalacoesIndependenteENaoComumAOutrosUsos: z.number(),
  existeControleDoAcessoDePessoal: z.number(),
  dimensionamentoCompativelComTodasAsOperacoes: z.number(),
  existeSeparacaoEntreAsDiferentesAtividadesPorMeiosFisicosOuPorOutrosMeiosEficazesDeFormaAEvitarAContaminacaoCruzada:
    z.number(),
});

const instalacoesFisicasPisosSchema = z.object({
  possuemRevestimentosLisosImpermeaveisELavaveis: z.number(),
  emAdequadoEstadoDeConservacaoLivresDeRachadurasTrincasBuracosEOutrosDefeitos: z.number(),
});

const instalacoesFisicasParedesSchema = z.object({
  possuemRevestimentosLisosImpermeaveisELavaveis: z.number(),
  emAdequadoEstadoDeConservacaoLivresDeRachadurasTrincasInfiltracoesBoloresDescascamentosDentreOutrosDefeitos:
    z.number(),
});

const instalacoesFisicasTetosSchema = z.object({
  possuemRevestimentosLisosImpermeaveisELavaveis: z.number(),
  tetoDaAreaDeManipulacaoEArmazenamentoDeAlimentosMantidoEmAdequadoEstadoDeConservacaoLivreDeGoteirasVazamentosInfiltracoesBoloresDescascamentosDentreOutrosDefeitos:
    z.number(),
  tetoDasDemaisAreasMantidoEmAdequadoEstadoDeConservacaoLivreDeGoteirasVazamentosInfiltracoesBoloresDescascamentosDentreOutrosDefeitos:
    z.number(),
});

const portasSchema = z.object({
  portasMantidasAjustadasAosBatentesBemFechadasEVedadas: z.number(),
  portasDaAreaDePreparacaoEArmazenamentoPossuemFechamentoAutomatico: z.number(),
  portasExternasNaAreaDePreparacaoEArmazenamentoProvidasDeTelasMilimetradasLimpasEmBomEstadoDeConservacaoEAjustadasAosBatentes:
    z.number(),
  telasRemoviveisParaFacilitarALimpezaPeriodica: z.number(),
});

const janelasEOutrasAberturasSistemaDeExaustaoSchema = z.object({
  janelasMantidasAjustadasAosBatentesBemFechadasEVedadas: z.number(),
  areaDePreparacaoEArmazenamentoProvidasDeTelasMilimetradasLimpasEmBomEstadoDeConservacaoEAjustadasAosBatentes:
    z.number(),
  telasRemoviveisParaFacilitarALimpezaPeriodica: z.number(),
});

const ralosEGrelhasSchema = z.object({
  ralosSifonadosQuandoPresentes: z.number(),
  quandoPresentesAsGrelhasPossuemDispositivoDeFechamento: z.string(),
});

const caixaDeGorduraEEsgotoSchema = z.object({
  possuemDimensaoCompativelAoVolumeDeResiduos: z.number(),
  localizadasForaDaAreaDePreparacaoEArmazenamentoDeAlimentos: z.number(),
  apresentamAdequadoEstadoDeConservacaoEFuncionamento: z.number(),
});

const iluminacaoSchema = z.object({
  iluminacaoDaAreaDePreparacaoProporcionaAVisualizacaoAdequada: z.number(),
  luminariasLocalizadasSobreAAreaDePreparacaoDosAlimentosApropriadasEProtegidasContraExplosaoEQuedasAcidentais:
    z.number(),
});

const instalacoesEletricasSchema = z.object({
  embutidasOuProtegidasEmTubulacoesExternas: z.number(),
  integraisPossibilitandoAHigienizacaoDosAmbientes: z.number(),
});

const ventilacaoSchema = z.object({
  garanteARenovacaoDoArEManutencaoDoAmbienteEmCondicoesQueNaoComprometamAQualidadeHigienicoSanitariaDoAlimentoLivreDeFungosFumacaPosCondensacaoDeVapores:
    z.number(),
  adequadoFluxoDeArNaoIncideDiretamenteSobreOsAlimentos: z.number(),
  fluxoDeArNaoCirculaDeAreasContaminadasParaAreasLimpas: z.number(),
  equipamentosEFiltrosParaClimatizacaoBemConservados: z.number(),
  realizaSeLimpezaDosComponentesDoSistemaDeClimatizacaoATrocaDeFiltrosEManutencaoProgramadaEPeriodicaDestesEquipamentos:
    z.number(),
  existeRegistroDaLimpezaDosComponentesDosSistemasDeClimatizacaoDaTrocaDeFiltrosEDaManutencaoProgramadaEPeriodicaDestesEquipamentos:
    z.number(),
});

const instalacoesSanitariasEVestariosSchema = z.object({
  localizadosSemComunicacaoDiretaComAAreaDePreparacaoEArmazenamento: z.number(),
  mantidosOrganizadosLimposEEmAdequadoEstadoDeConservacao: z.number(),
  portasExternasComFechamentoAutomatico: z.number(),
  instalacoesSanitariasPossuemLavatoriosDeMaosEOsProdutosDestinadosAHigienePessoal: z.number(),
});

const lavatorioAreaDeManipulacaoSchema = z.object({
  existeLavatorioExclusivoParaAHigieneDasMaosNaAreaDeManipulacaoEmPosicoesEstrategicasEmRelacaoAoFluxoDePreparo:
    z.number(),
  emNumeroSuficienteDeModoAAtenderTodaAAreaDePreparacao: z.number(),
  possuemSaboneteLiquidoInodoroAntissepticoOuSaboneteLiquidoInodoroEProdutoAntissepticoToalhasDePapelNaoRecicladoOuOutroSistemaHigienicoESeguroDeSecagemDasMaos:
    z.number(),
  possuemColetoresDePapelAcionadosSemContatoManual: z.number(),
});

const equipamentosSchema = z.object({
  equipamentosQueEntramEmContatoComAlimentosDeMateriaisQueNaoTransmitamSubstanciasToxicasOdoresNemSaboresAosAlimentos:
    z.number(),
  mantidosEmAdequadoEstadoDeConservacaoResistentesACorrosaoEARepetidasOperacoesDeLimpezaEDesinfeccao: z.number(),
  equipamentosUtilizadosNaPreparacaoEmbalagemArmazenamentoTransporteDistribuicaoEExposicaoAVendaDosAlimentosPossuemAsSuperficiesLisasImpermeaveisLavaveisEIsentasDeRugosidadesFrestasEOOutrasImperfeicoes:
    z.number(),
  realizamSeManutencoesProgramadasEPeriodicasBemComoORegistroDessaOperacao: z.number(),
  possuemTermometroComprovadamenteCalibradoParaAAfericaoDaTemperaturaDosAlimentos: z.number(),
});

const utensiliosSchema = z.object({
  utensiliosQueEntramEmContatoComAlimentosDeMateriaisQueNaoTransmitamSubstanciasToxicasOdoresNemSaboresAosAlimentos:
    z.number(),
  mantidosEmAdequadoEstadoDeConservacaoResistentesACorrosaoEARepetidasOperacoesDeLimpezaEDesinfeccao: z.number(),
  utensiliosUtilizadosNaPreparacaoEmbalagemArmazenamentoTransporteDistribuicaoEExposicaoAVendaDosAlimentosPossuemAsSuperficiesLisasImpermeaveisLavaveisEIsentasDeRugosidadesFrestasEOOutrasImperfeicoes:
    z.number(),
});

const moveisSchema = z.object({
  moveisQueEntramEmContatoComAlimentosDeMateriaisQueNaoTransmitamSubstanciasToxicasOdoresNemSaboresAosAlimentos:
    z.number(),
  mantidosEmAdequadoEstadoDeConservacaoResistentesACorrosaoEARepetidasOperacoesDeLimpezaEDesinfeccao: z.number(),
  moveisUtilizadosNaPreparacaoEmbalagemArmazenamentoTransporteDistribuicaoEExposicaoAVendaDosAlimentosPossuemAsSuperficiesLisasImpermeaveisLavaveisEIsentasDeRugosidadesFrestasEOOutrasImperfeicoes:
    z.number(),
});

export const ListaVerificacaoSchema = z.object({
  abastecimentoAgua: abastecimentoAguaSchema,
  estrutura: estruturaSchema,
  higienizacaoInstalacoesEquipamentosMoveisUtensilios: higienizacaoInstalacoesEquipamentosMoveisUtensiliosSchema,
  controleIntegradoDeVetoresEPragasUrbanas: controleIntegradoDeVetoresEPragasUrbanasSchema,
  manipuladores: manipuladoresSchema,
  materiaPrimaIngredientesEmbalagens: materiaPrimaIngredientesEmbalagensSchema,
  preparoDoAlimento: preparoDoAlimentoSchema,
  armazenamentoTransporteExposicaoDoAlimentoPreparado: armazenamentoTransporteExposicaoDoAlimentoPreparadoSchema,
  responsabilidadeDocumentacaoRegistro: responsabilidadeDocumentacaoRegistroSchema,
  areasExternas: areasExternasSchema,
  areasInternas: areasInternasSchema,
  edificacaoEInstalacoes: edificacaoEInstalacoesSchema,
  instalacoesFisicasPisos: instalacoesFisicasPisosSchema,
  instalacoesFisicasParedes: instalacoesFisicasParedesSchema,
  instalacoesFisicasTetos: instalacoesFisicasTetosSchema,
  portas: portasSchema,
  janelasEOutrasAberturasSistemaDeExaustao: janelasEOutrasAberturasSistemaDeExaustaoSchema,
  ralosEGrelhas: ralosEGrelhasSchema,
  caixaDeGorduraEEsgoto: caixaDeGorduraEEsgotoSchema,
  iluminacao: iluminacaoSchema,
  instalacoesEletricas: instalacoesEletricasSchema,
  ventilacao: ventilacaoSchema,
  instalacoesSanitariasEVestarios: instalacoesSanitariasEVestariosSchema,
  lavatorioAreaDeManipulacao: lavatorioAreaDeManipulacaoSchema,
  equipamentos: equipamentosSchema,
  utensilios: utensiliosSchema,
  moveis: moveisSchema,
  idAvaliacao: z.string(),
});

export const listaVerificacaoBodySchema = ListaVerificacaoSchema.omit({ idAvaliacao: true });

export const listaVerificacaoPorAvaliacaoSchema = z.object({
  ListaVerificacao: z.array(listaVerificacaoBodySchema),
  idAvaliacao: z.string(),
});

export const deletarListaVerificacaoSchema = z.object({
  message: z.string(),
});
