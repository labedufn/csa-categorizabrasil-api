import { IGestor } from "@interfaces/IGestor";
import { Schema, model } from "mongoose";

const GestorSchema = new Schema<IGestor>(
  {
    dadosIndividuais: {
      nomeCompleto: { type: String, required: true },
      genero: { type: Number, required: true },
      idade: { type: Number, required: true },
      escolaridade: { type: Number, required: true },
      formacao: { type: String, required: true },
      naoTenhaFormacaoTemTreinamento: { type: Number, required: true },
      tempoTrabalhaComAlimentos: { type: Number, required: true },
      acreditaComunicacaoBoa: { type: Number, required: true },
      realizaTreinamentosBoasPraticasManipulacao: { type: Number, required: true },
      cargaHoraria: { type: String, required: true },
      frequenciaAplicacao: { type: Number, required: true },
      temasTreinamentos: { type: String, required: true },
    },
    conhecimento: {
      utilizacaoAdornosFavorecerContaminacao: { type: Number, required: true },
      aguaVeiculoTransmissaoDoencas: { type: Number, required: true },
      formaHigienizarMaosEvitaContaminacao: { type: Number, required: true },
      contatoAlimentosContamina: { type: Number, required: true },
      leiteVencimentoRisco: { type: Number, required: true },
      alimentoImproprioApresentaCheiroSabor: { type: Number, required: false },
      carneMalPassada: { type: Number, required: true },
      descongelamentoAlimentosBacia: { type: Number, required: true },
      manipuladorAlimentoDoenteContamina: { type: Number, required: true },
    },
    comprometimentoAfetivo: {
      problemasRestauranteMeus: { type: Number, required: true },
      restauranteTemSignificado: { type: Number, required: true },
      restauranteMereceMinhaLealdade: { type: Number, required: true },
      trabalharPorNecessidadeEDesejo: { type: Number, required: true },
      dedicarMinhaCarreiraAoRestaurante: { type: Number, required: true },
    },
    comprometimentoNormativo: {
      naoDeixaEmpregoPoisObrigacaoMoral: { type: Number, required: true },
      culpadoDeixasseEmprego: { type: Number, required: true },
      naoSeriaCertoDeixarEmprego: { type: Number, required: true },
      devoEsseEmprego: { type: Number, required: true },
    },
    comprometimentoInstrumental: {
      deixarEmpregoVidaDesestruturada: { type: Number, required: true },
      poucasAlternativasCasoDeixarEmprego: { type: Number, required: true },
      muitoDificilDeixarEmprego: { type: Number, required: true },
    },
    percepcaoRisco: {
      riscoApresentarDorBarrigaEstabelecimentoSimilar: { type: Number, required: true },
      riscoApresentarDorBarrigaEstabelecimentoGerenciado: { type: Number, required: true },
      riscoDoencaTransmitidaAlimentos: { type: Number, required: true },
    },
    sistemasGestao: {
      liderancaModificadaConsumidorAltaPercepcaoRisco: { type: Number, required: true },
      comunicacaoModificadaConsumidorAltaPercepcaoRisco: { type: Number, required: true },
      gerenciarSegurancaModificadaConsumidorAltaPercepcaoRisco: { type: Number, required: true },
      ambienteTrabalhoModificadaConsumidorAltaPercepcaoRisco: { type: Number, required: true },
      manipuladorAlimentosModificadaConsumidorAltaPercepcaoRisco: { type: Number, required: true },
      comprometimentoModificadaConsumidorAltaPercepcaoRisco: { type: Number, required: true },
      boasPraticasConsumidorAltaPercepcaoRisco: { type: Number, required: true },
    },
    idAvaliacao: { type: Schema.Types.ObjectId, required: true },
  },
  {
    timestamps: true,
  },
);

export const Gestor = model<IGestor>("Gestor", GestorSchema);
