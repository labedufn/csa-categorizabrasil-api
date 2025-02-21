import { Types } from "mongoose";

export interface IAvaliacao extends Document {
  idEstabelecimento: Types.ObjectId;
  idCriador: Types.ObjectId;
}
