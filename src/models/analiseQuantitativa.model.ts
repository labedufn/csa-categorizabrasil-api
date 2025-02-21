import { IAnaliseQuantitativa } from "@interfaces/IAnaliseQuantitativa";
import { Schema, model } from "mongoose";

const AnaliseQuantitativaSchema = new Schema<IAnaliseQuantitativa>(
  {
    caracteristicasSocioDemograficas: { type: String, required: true },
    resultadosAvaliacaoQuantitativas: { type: String, required: true },
    viesOtimista: { type: String, required: true },
    ativo: { type: Boolean, default: true },

    idAvaliacao: { type: Schema.Types.ObjectId, required: true },
  },
  {
    timestamps: { createdAt: "dataCadastro", updatedAt: "dataAlteracao" },
  },
);

export const AnaliseQuantitativa = model<IAnaliseQuantitativa>("AnaliseQuantitativa", AnaliseQuantitativaSchema);
