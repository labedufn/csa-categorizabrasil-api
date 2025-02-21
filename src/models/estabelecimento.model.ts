import { IEstabelecimento } from "@interfaces/IEstabelecimento";
import { Schema, model } from "mongoose";

const EstabelecimentoSchema = new Schema<IEstabelecimento>(
  {
    nome: { type: String, required: true },
    cnpj: { type: String, required: true, unique: true },
    cnae: { type: String, required: true },
    endereco: { type: String, required: true },
    cidade: { type: String, required: true },
    estado: { type: String, required: true },
    pessoalOcupado: { type: Number, required: true },
    numeroRefeicoes: { type: Number, required: true },
    possuiAlvaraSanitario: { type: Number, required: true },
    possuiResponsavelBoasPraticas: { type: Number, required: true },
    alteradoPor: { type: String, required: true },
    ativo: { type: Boolean, default: true },
  },
  {
    timestamps: true,
  },
);

export const Estabelecimento = model<IEstabelecimento>("Estabelecimento", EstabelecimentoSchema);
