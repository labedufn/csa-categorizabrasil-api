import { Document, Types } from "mongoose";

export interface IRedefinirSenha extends Document {
  token: string;
  idUsuario: Types.ObjectId;
  expiraEm: Date;
  usado: boolean;
  criadoEm: Date;
}
