import { IAvaliacao } from "@interfaces/IAvaliacao";
import { Schema, model, Types } from "mongoose";

interface IAvaliacaoModel extends IAvaliacao {
  criadoEm: Date;
  alteradoEm: Date;
  ativo?: boolean;
  gestor: Types.ObjectId[];
  analiseQuantitativa: Types.ObjectId[];
  manipuladorAlimentos: Types.ObjectId[];
  listaVerificacao: Types.ObjectId[];
  analiseQualitativa: Types.ObjectId[];
  triangulacao: Types.ObjectId[];
  resultado: Types.ObjectId[];
}

const AvaliacaoSchema = new Schema<IAvaliacaoModel>({
  idEstabelecimento: { type: Schema.Types.ObjectId, ref: "Estabelecimento", required: true },
  idCriador: { type: Schema.Types.ObjectId, ref: "Usuario", required: true },
  criadoEm: { type: Date, default: Date.now },
  alteradoEm: { type: Date, default: Date.now },
  ativo: { type: Boolean, default: true },
  gestor: [{ type: Schema.Types.ObjectId, ref: "Gestores" }],
  analiseQuantitativa: [{ type: Schema.Types.ObjectId, ref: "AnaliseQuantitativa" }],
  manipuladorAlimentos: [{ type: Schema.Types.ObjectId, ref: "ManipuladorAlimentos" }],
  listaVerificacao: [{ type: Schema.Types.ObjectId, ref: "ListaVerificacao" }],
  analiseQualitativa: [{ type: Schema.Types.ObjectId, ref: "AnaliseQualitativa" }],
  triangulacao: [{ type: Schema.Types.ObjectId, ref: "Triangulacao" }],
  resultado: [{ type: Schema.Types.ObjectId, ref: "Resultado" }],
});

export const Avaliacao = model<IAvaliacaoModel>("Avaliacao", AvaliacaoSchema);
