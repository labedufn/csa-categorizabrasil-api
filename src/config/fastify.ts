import { serializerCompiler, validatorCompiler } from "fastify-type-provider-zod";
import { SwaggerTheme, SwaggerThemeNameEnum } from "swagger-themes";
import { FastifyTypedInstance } from "../types/fastifyTypes";
import { fastifySwaggerUi } from "@fastify/swagger-ui";
import { fastifySwagger } from "@fastify/swagger";
import { fastifyCors } from "@fastify/cors";
import { swaggerOptions } from "./swagger";
import { fastify } from "fastify";

export const app: FastifyTypedInstance = fastify({
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

const theme = new SwaggerTheme();
const darkThemeCSS = theme.getBuffer(SwaggerThemeNameEnum.ONE_DARK);

app.register(fastifySwagger, swaggerOptions);
app.register(fastifySwaggerUi, {
  routePrefix: "/docs",
  uiConfig: {
    docExpansion: "none",
  },
  staticCSP: true,
  transformStaticCSP: (header) => header,
  theme: {
    title: "API CSA - Documentação",
    css: [{ filename: "theme.css", content: darkThemeCSS }],
  },
});
