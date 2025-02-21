import { IManipuladorAlimentos } from "@interfaces/IManipuladorAlimentos";
import { Schema, model, Types } from "mongoose";

const DadosIndividuaisSchema = new Schema(
  {
    nomeCompleto: { type: String, required: true },
    genero: { type: Number, required: true },
    idade: { type: Number, required: true },
    escolaridade: { type: Number, required: true },
    formacao: { type: String, required: true },
    participouTreinamentoManipulacaoAlimentos: { type: Number, required: true },
    tempoTrabalhaComAlimentos: { type: Number, required: true },
    boaComunicacaoChefe: { type: Number, required: true },
    boaComunicacaoEntreFuncionarios: { type: Number, required: true },
  },
  { _id: false },
);

const LiderancaSchema = new Schema(
  {
    normasHigiene: { type: Number, required: true },
    liderAtento: { type: Number, required: true },
    funcionariosRepreendidos: { type: Number, required: true },
  },
  { _id: false },
);

const ComunicacaoSchema = new Schema(
  {
    tenhoLiberdadeComLider: { type: Number, required: true },
    informacoesNecessariasDisponiveis: { type: Number, required: true },
    informacoesAdequadasNormasHigiene: { type: Number, required: true },
    fornecerSugestoesMelhoria: { type: Number, required: true },
  },
  { _id: false },
);

const ConhecimentoSchema = new Schema(
  {
    utilizacaoAdornosFavorecerContaminacao: { type: Number, required: true },
    aguaVeiculoTransmissaoDoencas: { type: Number, required: true },
    formaHigienizarMaosEvitaContaminacao: { type: Number, required: true },
    contatoAlimentosContamina: { type: Number, required: true },
    leiteVencimentoRisco: { type: Number, required: true },
    alimentoImproprioApresentaCheiroSabor: { type: Number, required: true },
    carneMalPassada: { type: Number, required: true },
    lavarVegetaisSuficiente: { type: Number, required: true },
    descongelamentoAlimentosBacia: { type: Number, required: true },
    manipuladorAlimentoDoenteContamina: { type: Number, required: true },
  },
  { _id: false },
);

const ComprometimentoAfetivoSchema = new Schema(
  {
    problemasRestauranteMeus: { type: Number, required: true },
    restauranteTemSignificado: { type: Number, required: true },
    restauranteMereceMinhaLealdade: { type: Number, required: true },
    trabalharPorNecessidadeEDesejo: { type: Number, required: true },
    dedicarMinhaCarreiraAoRestaurante: { type: Number, required: true },
  },
  { _id: false },
);

const ComprometimentoNormativoSchema = new Schema(
  {
    naoDeixaEmpregoPoisObrigacaoMoral: { type: Number, required: true },
    culpadoDeixasseEmprego: { type: Number, required: true },
    naoSeriaCertoDeixarEmprego: { type: Number, required: true },
    devoEsseEmprego: { type: Number, required: true },
  },
  { _id: false },
);

const ComprometimentoInstrumentalSchema = new Schema(
  {
    deixarEmpregoVidaDesestruturada: { type: Number, required: true },
    poucasAlternativasCasoDeixarEmprego: { type: Number, required: true },
    muitoDificilDeixarEmprego: { type: Number, required: true },
  },
  { _id: false },
);

const ComprometimentoSegurancaAlimentosSchema = new Schema(
  {
    sigoNormasHigieneResponsabilidade: { type: Number, required: true },
    segurancaAltaPrioridade: { type: Number, required: true },
    sigoNormasHigieneImportante: { type: Number, required: true },
    empenhadoSeguirNormasHigiene: { type: Number, required: true },
  },
  { _id: false },
);

const PercepcaoRiscoSchema = new Schema(
  {
    riscoApresentarDorBarrigaEstabelecimentoSimilar: { type: Number, required: true },
    riscoApresentarDorBarrigaEstabelecimentoManipulado: { type: Number, required: true },
    riscoApresentarDorBarrigaEstabelecimentoColegaManipulado: { type: Number, required: true },
    riscoDoencaTransmitidaAlimentos: { type: Number, required: true },
  },
  { _id: false },
);

const PressoesTrabalhoCrencasNormativasSchema = new Schema(
  {
    chefeSeguirBoasPraticas: { type: Number, required: true },
    colegasTrabalhoNormasHigiene: { type: Number, required: true },
    autoridadesVigilanciaSanitariaNormasHigiene: { type: Number, required: true },
    clientesNormasHigiene: { type: Number, required: true },
    tempoSuficienteNormasHigiene: { type: Number, required: true },
    numeroFuncionariosAdequadoManipularFormaSegura: { type: Number, required: true },
  },
  { _id: false },
);

const AmbienteTrabalhoSchema = new Schema(
  {
    equipamentosNecessariosFormaSegura: { type: Number, required: true },
    estruturaAdequadaNormasHigiene: { type: Number, required: true },
    produtosHigienizacaoAdequadosManipulacaoAlimentos: { type: Number, required: true },
  },
  { _id: false },
);

const SistemasGestaoSchema = new Schema(
  {
    cooperacaoEntreAreasFormaSegura: { type: Number, required: true },
    novosFuncionariosAntigosFuncionariosBoaPraticaManipulacaoAlimentos: { type: Number, required: true },
    muitoTrabalhoRapidamenteFuncionariosTrabalhamJuntos: { type: Number, required: true },
    funcionariosLembramSeguirBoasPraticasManipulacaoAlimentos: { type: Number, required: true },
    acreditoLegislacaoEscritaRespaldo: { type: Number, required: true },
    economizarProdutosHigienizacaoDiminuirCusto: { type: Number, required: true },
  },
  { _id: false },
);

const ManipuladorAlimentosSchema = new Schema<IManipuladorAlimentos>(
  {
    dadosIndividuais: { type: DadosIndividuaisSchema, required: true },
    lideranca: { type: LiderancaSchema, required: true },
    comunicacao: { type: ComunicacaoSchema, required: true },
    conhecimento: { type: ConhecimentoSchema, required: true },
    comprometimentoAfetivo: { type: ComprometimentoAfetivoSchema, required: true },
    comprometimentoNormativo: { type: ComprometimentoNormativoSchema, required: true },
    comprometimentoInstrumental: { type: ComprometimentoInstrumentalSchema, required: true },
    comprometimentoSegurancaAlimentos: { type: ComprometimentoSegurancaAlimentosSchema, required: true },
    percepcaoRisco: { type: PercepcaoRiscoSchema, required: true },
    pressoesTrabalhoCrencasNormativas: { type: PressoesTrabalhoCrencasNormativasSchema, required: true },
    ambienteTrabalho: { type: AmbienteTrabalhoSchema, required: true },
    sistemasGestao: { type: SistemasGestaoSchema, required: true },
    idAvaliacao: { type: Schema.Types.ObjectId, required: true },
    criadoEm: { type: Date, default: Date.now },
    alteradoEm: { type: Date, default: Date.now },
    ativo: { type: Boolean, default: true },
    analiseQuantitativa: [{ type: Schema.Types.ObjectId, ref: "AnaliseQuantitativa" }],
  },
  {
    timestamps: { createdAt: "criadoEm", updatedAt: "alteradoEm" },
  },
);

export const ManipuladorAlimentos = model<IManipuladorAlimentos>("ManipuladorAlimentos", ManipuladorAlimentosSchema);
