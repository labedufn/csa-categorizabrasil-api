import { mongooseConnection } from "@config/mongoose";
import { app } from "@config/fastify";
import { routes } from "./routes";

const PORT = Number(process.env.PORT) || 8000;
const HOST = process.env.HOST || "localhost";

async function main() {
  if (mongooseConnection.connection.readyState === 0) {
    await mongooseConnection.connect(process.env.MONGODB_URI!);
  }
  await app.register(routes);
  await app.listen({ port: PORT, host: HOST });

  console.log(`🚀 API rodando em http://${HOST}:${PORT}`);
}

main();
