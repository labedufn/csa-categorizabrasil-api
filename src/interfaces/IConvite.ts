import { Types, Document } from "mongoose";

export interface IConvite extends Document {
  token: string;
  idCriador: Types.ObjectId;
  email: string;
  instituicao: string;
  tipo: string;
  criadoEm: Date;
  expiraEm: Date;
  usado: boolean;
}
