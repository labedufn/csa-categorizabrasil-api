import { IConvite } from "@interfaces/IConvite";
import { Schema, model } from "mongoose";

const ConviteSchema = new Schema<IConvite>({
  token: { type: String, required: true, unique: true },
  idCriador: { type: Schema.Types.ObjectId, ref: "Usuario", required: true },
  email: { type: String, required: true },
  instituicao: { type: String, required: true },
  tipo: { type: String, required: true },
  criadoEm: { type: Date, default: Date.now },
  expiraEm: { type: Date, required: true },
  usado: { type: Boolean, default: false },
});

export const Convite = model<IConvite>("Convite", ConviteSchema);
