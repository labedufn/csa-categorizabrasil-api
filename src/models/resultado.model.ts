import { IResultado } from "@interfaces/IResultado";
import { Schema, model } from "mongoose";

const ResultadoSchema = new Schema<IResultado>(
  {
    idAvaliacao: { type: Schema.Types.ObjectId, ref: "Avaliacao", required: true },
    triangulacaoLideranca: { type: String, required: true },
    triangulacaoComunicacao: { type: String, required: true },
    triangulacaoConhecimento: { type: String, required: true },
    triangulacaoComprometimento: { type: String, required: true },
    triangulacaoPercepcaoRisco: { type: String, required: true },
    triangulacaoPressaoTrabalhoCrencasNormativas: { type: String, required: true },
    triangulacaoAmbienteTrabalho: { type: String, required: true },
    triangulacaoSistemaEstilosGestao: { type: String, required: true },
    triangulacaoCsa: { type: String, required: true },
    triangulacaoResultado: { type: String, required: true },

    resultadoLideranca: { type: Number, required: true },
    resultadoComunicacao: { type: Number, required: true },
    resultadoConhecimento: { type: Number, required: true },
    resultadoComprometimento: { type: Number, required: true },
    resultadoPercepcaoRisco: { type: Number, required: true },
    resultadoPressaoTrabalhoCrencasNormativas: { type: Number, required: true },
    resultadoAmbienteTrabalho: { type: Number, required: true },
    resultadoSistemaEstilosGestao: { type: Number, required: true },
    resultadoCsa: { type: Number, required: true },
  },
  {
    timestamps: { createdAt: "criadoEm", updatedAt: "alteradoEm" },
  },
);

export const ResultadoModel = model<IResultado>("Resultado", ResultadoSchema);
