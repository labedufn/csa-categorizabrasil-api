import { z } from "zod";

const dadosIndividuaisSchema = z.object({
  nomeCompleto: z.string(),
  genero: z.number(),
  idade: z.number(),
  escolaridade: z.number(),
  formacao: z.string(),
  naoTenhaFormacaoTemTreinamento: z.number(),
  tempoTrabalhaComAlimentos: z.number(),
  acreditaComunicacaoBoa: z.number(),
  realizaTreinamentosBoasPraticasManipulacao: z.number(),
  cargaHoraria: z.string(),
  frequenciaAplicacao: z.number(),
  temasTreinamentos: z.string(),
});

const conhecimentoSchema = z.object({
  utilizacaoAdornosFavorecerContaminacao: z.number(),
  aguaVeiculoTransmissaoDoencas: z.number(),
  formaHigienizarMaosEvitaContaminacao: z.number(),
  contatoAlimentosContamina: z.number(),
  leiteVencimentoRisco: z.number(),
  alimentoImproprioApresentaCheiroSabor: z.number().nullable(),
  carneMalPassada: z.number(),
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

const percepcaoRiscoSchema = z.object({
  riscoApresentarDorBarrigaEstabelecimentoSimilar: z.number(),
  riscoApresentarDorBarrigaEstabelecimentoGerenciado: z.number(),
  riscoDoencaTransmitidaAlimentos: z.number(),
});

const sistemasGestaoSchema = z.object({
  liderancaModificadaConsumidorAltaPercepcaoRisco: z.number(),
  comunicacaoModificadaConsumidorAltaPercepcaoRisco: z.number(),
  gerenciarSegurancaModificadaConsumidorAltaPercepcaoRisco: z.number(),
  ambienteTrabalhoModificadaConsumidorAltaPercepcaoRisco: z.number(),
  manipuladorAlimentosModificadaConsumidorAltaPercepcaoRisco: z.number(),
  comprometimentoModificadaConsumidorAltaPercepcaoRisco: z.number(),
  boasPraticasConsumidorAltaPercepcaoRisco: z.number(),
});

export const gestorSchema = z.object({
  dadosIndividuais: dadosIndividuaisSchema,
  conhecimento: conhecimentoSchema,
  comprometimentoAfetivo: comprometimentoAfetivoSchema,
  comprometimentoNormativo: comprometimentoNormativoSchema,
  comprometimentoInstrumental: comprometimentoInstrumentalSchema,
  percepcaoRisco: percepcaoRiscoSchema,
  sistemasGestao: sistemasGestaoSchema,
  idAvaliacao: z.string(),
});

export const gestorBodySchema = gestorSchema.omit({ idAvaliacao: true });
