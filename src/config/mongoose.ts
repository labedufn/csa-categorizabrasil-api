import mongoose from "mongoose";
import { config } from "dotenv";

config();

const MONGODB_URI = process.env.MONGODB_URI!;

if (!MONGODB_URI) {
  console.error("A variável de ambiente MONGODB_URI não foi configurada.");
  process.exit(1);
}

mongoose
  .connect(MONGODB_URI)
  .then(() => console.log("✅ Conectado ao MongoDB:", MONGODB_URI))
  .catch((error) => console.error("❌ Erro ao conectar no MongoDB:", error));

mongoose.connection.on("connected", () => {
  console.log("✅ Mongoose conectado com sucesso.");
});

mongoose.connection.on("error", (error) => {
  console.error("❌ Erro na conexão do Mongoose:", error);
});

mongoose.connection.on("disconnected", () => {
  console.log("Mongoose desconectado.");
});

process.on("SIGINT", async () => {
  await mongoose.connection.close();
  console.log("Mongoose desconectado pelo término da aplicação.");
  process.exit(0);
});

export const mongooseConnection = mongoose;
