import { ICategoriaTriangulacao, ITriangulacao } from "@interfaces/ITriangulacao";
import { Schema, model } from "mongoose";

const CategoriaTriangulacaoSchema = new Schema<ICategoriaTriangulacao>(
  {
    escoreAnaliseQuantitativa: { type: [Number], required: true },
    escoreAnaliseQualitativa: { type: [Number], required: true },
    triangulacao: {
      escoreCaracteristicas: { type: [Number], required: true },
      valorMedio: { type: Number, required: true },
      escoreElemento: { type: String, required: true },
    },
  },
  { _id: false },
);

const TriangulacaoSchema = new Schema<ITriangulacao>(
  {
    idAvaliacao: { type: Schema.Types.ObjectId, ref: "Avaliacao", required: true },
    categorias: {
      lideranca: { type: CategoriaTriangulacaoSchema, required: true },
      comunicacao: { type: CategoriaTriangulacaoSchema, required: true },
      conhecimento: { type: CategoriaTriangulacaoSchema, required: true },
      comprometimento: { type: CategoriaTriangulacaoSchema, required: true },
      pressaoTrabalhoCrencasNormativas: { type: CategoriaTriangulacaoSchema, required: true },
      ambienteTrabalho: { type: CategoriaTriangulacaoSchema, required: true },
      sistemaEstilosGestao: { type: CategoriaTriangulacaoSchema, required: true },
      percepcaoRisco: { type: CategoriaTriangulacaoSchema, required: true },
    },
    valorMedioGeral: { type: Number, required: true },
    escoreElementoGeral: { type: String, required: true },
    resultado: [{ type: Schema.Types.ObjectId, ref: "Resultado" }],
  },
  {
    timestamps: { createdAt: "criadoEm", updatedAt: "alteradoEm" },
  },
);

export const Triangulacao = model<ITriangulacao>("Triangulacao", TriangulacaoSchema);
