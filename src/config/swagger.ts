import { jsonSchemaTransform } from "fastify-type-provider-zod/dist/src/core";
import { FastifyDynamicSwaggerOptions } from "@fastify/swagger";

export const swaggerOptions: FastifyDynamicSwaggerOptions = {
  openapi: {
    openapi: "3.0.0",
    info: {
      title: "API | CSA - Cultura de Segurança dos Alimentos",
      version: "1.0.0",
      description: "API para o projeto CSA - Cultura de Segurança dos Alimentos / Categoriza Brasil",
    },
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
  },
  transform: jsonSchemaTransform,
};
