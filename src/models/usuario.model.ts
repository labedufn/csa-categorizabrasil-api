import { IUsuario } from "@interfaces/IUsuario";
import { Schema, model } from "mongoose";

const UsuarioSchema = new Schema<IUsuario>(
  {
    nome: { type: String, required: true },
    sobrenome: { type: String, required: true },
    cpf: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    senha: { type: String, required: true },
    instituicao: { type: String, required: true },
    tipo: {
      type: String,
      required: true,
      enum: ["ADMINISTRADOR", "GESTOR", "AVALIADOR"],
    },
    ativo: { type: Boolean, default: true },
  },
  {
    timestamps: { createdAt: "criadoEm", updatedAt: "atualizadoEm" },
  },
);

export const Usuario = model<IUsuario>("Usuario", UsuarioSchema);
