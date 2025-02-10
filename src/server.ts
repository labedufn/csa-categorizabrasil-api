import { jsonSchemaTransform, serializerCompiler, validatorCompiler, ZodTypeProvider } from "fastify-type-provider-zod";
import { fastifySwaggerUi } from "@fastify/swagger-ui";
import { fastifySwagger } from "@fastify/swagger";
import { fastifyCors } from "@fastify/cors";
import { routes } from "./routes";
import { fastify } from "fastify";
import dotenv from "dotenv";

dotenv.config();

const app = fastify({
  logger: {
    level: "info",
    serializers: {
      req: () => ({}),
      res: (res) => ({ statusCode: res.statusCode }),
    },
  },
});

app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);

app.register(fastifyCors, {
  origin: process.env.CORS_ORIGIN || "*",
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
});

app.register(fastifySwagger, {
  openapi: {
    info: {
      title: "API | CSA - Cultura de Segurança dos Alimentos",
      version: "1.0.0",
      description: "API para o projeto CSA - Cultura de Segurança dos Alimentos / Categoriza Brasil",
    },
  },
  transform: jsonSchemaTransform,
});

app.register(fastifySwaggerUi, {
  routePrefix: "/docs",
  uiConfig: {
    docExpansion: "list",
    deepLinking: false,
  },
  staticCSP: true,
  transformStaticCSP: (header) => header,
  theme: {
    title: "API CSA - Documentação",
  },
});

app.register(routes);

const PORT = Number(process.env.PORT) || 8000;
const HOST = process.env.HOST || "localhost";

const startServer = async () => {
  try {
    await app.listen({ port: PORT, host: HOST });
    console.log(`🚀 API rodando em http://${HOST}:${PORT}`);
  } catch (error) {
    app.log.error(error);
    process.exit(1);
  }
};

startServer();
