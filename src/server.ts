import { app } from "@config/fastify";
import { routes } from "./routes";

const PORT = Number(process.env.PORT) || 8000;
const HOST = process.env.HOST || "localhost";

async function main() {
  await app.register(routes);

  await app.listen({ port: PORT, host: HOST });
  console.log(`🚀 API rodando em http://${HOST}:${PORT}`);
}

main();
