import { Document, Types } from "mongoose";

export interface ICategoriaTriangulacao {
  escoreAnaliseQuantitativa: number[];
  escoreAnaliseQualitativa: number[];
  triangulacao: {
    escoreCaracteristicas: number[];
    valorMedio: number;
    escoreElemento: string;
  };
}

export interface ITriangulacao extends Document {
  categorias: {
    lideranca: ICategoriaTriangulacao;
    comunicacao: ICategoriaTriangulacao;
    conhecimento: ICategoriaTriangulacao;
    comprometimento: ICategoriaTriangulacao;
    pressaoTrabalhoCrencasNormativas: ICategoriaTriangulacao;
    ambienteTrabalho: ICategoriaTriangulacao;
    sistemaEstilosGestao: ICategoriaTriangulacao;
    percepcaoRisco: ICategoriaTriangulacao;
  };
  valorMedioGeral: number;
  escoreElementoGeral: string;
  criadoEm: Date;
  alteradoEm: Date;
  resultado: Types.ObjectId[];

  idAvaliacao: Types.ObjectId;
}
