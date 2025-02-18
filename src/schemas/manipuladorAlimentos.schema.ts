import { z } from "zod";

const dadosIndividuaisSchema = z.object({
  nomeCompleto: z.string(),
  genero: z.number(),
  idade: z.number(),
  escolaridade: z.number(),
  formacao: z.string(),
  participouTreinamentoManipulacaoAlimentos: z.number(),
  tempoTrabalhaComAlimentos: z.number(),
  boaComunicacaoChefe: z.number(),
  boaComunicacaoEntreFuncionarios: z.number(),
});

const liderancaSchema = z.object({
  normasHigiene: z.number(),
  liderAtento: z.number(),
  funcionariosRepreendidos: z.number(),
});

const comunicacaoSchema = z.object({
  tenhoLiberdadeComLider: z.number(),
  informacoesNecessariasDisponiveis: z.number(),
  informacoesAdequadasNormasHigiene: z.number(),
  fornecerSugestoesMelhoria: z.number(),
});

const conhecimentoSchema = z.object({
  utilizacaoAdornosFavorecerContaminacao: z.number(),
  aguaVeiculoTransmissaoDoencas: z.number(),
  formaHigienizarMaosEvitaContaminacao: z.number(),
  contatoAlimentosContamina: z.number(),
  leiteVencimentoRisco: z.number(),
  alimentoImproprioApresentaCheiroSabor: z.number(),
  carneMalPassada: z.number(),
  lavarVegetaisSuficiente: z.number(),
  descongelamentoAlimentosBacia: z.number(),
  manipuladorAlimentoDoenteContamina: z.number(),
});

const comprometimentoAfetivoSchema = z.object({
  problemasRestauranteMeus: z.number(),
  restauranteTemSignificado: z.number(),
  restauranteMereceMinhaLealdade: z.number(),
  trabalharPorNecessidadeEDesejo: z.number(),
  dedicarMinhaCarreiraAoRestaurante: z.number(),
});

const comprometimentoNormativoSchema = z.object({
  naoDeixaEmpregoPoisObrigacaoMoral: z.number(),
  culpadoDeixasseEmprego: z.number(),
  naoSeriaCertoDeixarEmprego: z.number(),
  devoEsseEmprego: z.number(),
});

const comprometimentoInstrumentalSchema = z.object({
  deixarEmpregoVidaDesestruturada: z.number(),
  poucasAlternativasCasoDeixarEmprego: z.number(),
  muitoDificilDeixarEmprego: z.number(),
});

const comprometimentoSegurancaAlimentosSchema = z.object({
  sigoNormasHigieneResponsabilidade: z.number(),
  segurancaAltaPrioridade: z.number(),
  sigoNormasHigieneImportante: z.number(),
  empenhadoSeguirNormasHigiene: z.number(),
});

const percepcaoRiscoSchema = z.object({
  riscoApresentarDorBarrigaEstabelecimentoSimilar: z.number(),
  riscoApresentarDorBarrigaEstabelecimentoManipulado: z.number(),
  riscoApresentarDorBarrigaEstabelecimentoColegaManipulado: z.number(),
  riscoDoencaTransmitidaAlimentos: z.number(),
});

const pressoesTrabalhoCrencasNormativasSchema = z.object({
  chefeSeguirBoasPraticas: z.number(),
  colegasTrabalhoNormasHigiene: z.number(),
  autoridadesVigilanciaSanitariaNormasHigiene: z.number(),
  clientesNormasHigiene: z.number(),
  tempoSuficienteNormasHigiene: z.number(),
  numeroFuncionariosAdequadoManipularFormaSegura: z.number(),
});

const ambienteTrabalhoSchema = z.object({
  equipamentosNecessariosFormaSegura: z.number(),
  estruturaAdequadaNormasHigiene: z.number(),
  produtosHigienizacaoAdequadosManipulacaoAlimentos: z.number(),
});

const sistemasGestaoSchema = z.object({
  cooperacaoEntreAreasFormaSegura: z.number(),
  novosFuncionariosAntigosFuncionariosBoaPraticaManipulacaoAlimentos: z.number(),
  muitoTrabalhoRapidamenteFuncionariosTrabalhamJuntos: z.number(),
  funcionariosLembramSeguirBoasPraticasManipulacaoAlimentos: z.number(),
  acreditoLegislacaoEscritaRespaldo: z.number(),
  economizarProdutosHigienizacaoDiminuirCusto: z.number(),
});

export const manipuladorAlimentosSchema = z.object({
  dadosIndividuais: dadosIndividuaisSchema,
  lideranca: liderancaSchema,
  comunicacao: comunicacaoSchema,
  conhecimento: conhecimentoSchema,
  comprometimentoAfetivo: comprometimentoAfetivoSchema,
  comprometimentoNormativo: comprometimentoNormativoSchema,
  comprometimentoInstrumental: comprometimentoInstrumentalSchema,
  comprometimentoSegurancaAlimentos: comprometimentoSegurancaAlimentosSchema,
  percepcaoRisco: percepcaoRiscoSchema,
  pressoesTrabalhoCrencasNormativas: pressoesTrabalhoCrencasNormativasSchema,
  ambienteTrabalho: ambienteTrabalhoSchema,
  sistemasGestao: sistemasGestaoSchema,
  idAvaliacao: z.string(),
});

export const manipuladorAlimentosBodySchema = manipuladorAlimentosSchema.omit({ idAvaliacao: true });
