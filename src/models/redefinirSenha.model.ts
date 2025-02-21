import { Schema, model, Document, Types } from "mongoose";

export interface IRedefinirSenha extends Document {
  token: string;
  idUsuario: Types.ObjectId;
  expiraEm: Date;
  usado: boolean;
  criadoEm: Date;
}

const RedefinirSenhaSchema = new Schema<IRedefinirSenha>({
  token: { type: String, required: true, unique: true },
  idUsuario: { type: Schema.Types.ObjectId, ref: "Usuario", required: true },
  expiraEm: { type: Date, required: true },
  usado: { type: Boolean, default: false },
  criadoEm: { type: Date, default: Date.now },
});

export const RedefinirSenha = model<IRedefinirSenha>("RedefinirSenha", RedefinirSenhaSchema);
