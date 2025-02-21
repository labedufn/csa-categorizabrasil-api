import { Document, Types } from "mongoose";

export interface IResultado extends Document {
  triangulacaoLideranca: string;
  triangulacaoComunicacao: string;
  triangulacaoConhecimento: string;
  triangulacaoComprometimento: string;
  triangulacaoPercepcaoRisco: string;
  triangulacaoPressaoTrabalhoCrencasNormativas: string;
  triangulacaoAmbienteTrabalho: string;
  triangulacaoSistemaEstilosGestao: string;
  triangulacaoCsa: string;
  triangulacaoResultado: string;

  resultadoLideranca: number;
  resultadoComunicacao: number;
  resultadoConhecimento: number;
  resultadoComprometimento: number;
  resultadoPercepcaoRisco: number;
  resultadoPressaoTrabalhoCrencasNormativas: number;
  resultadoAmbienteTrabalho: number;
  resultadoSistemaEstilosGestao: number;
  resultadoCsa: number;

  criadoEm: Date;
  alteradoEm: Date;

  idAvaliacao: Types.ObjectId;
}
