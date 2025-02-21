import { Document, Types } from "mongoose";

export interface IAnaliseQuantitativa extends Document {
  caracteristicasSocioDemograficas: string;
  resultadosAvaliacaoQuantitativas: string;
  viesOtimista: string;
  ativo: boolean;
  dataCadastro: Date;
  dataAlteracao: Date;

  idAvaliacao: Types.ObjectId;
}
