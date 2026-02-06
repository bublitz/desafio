import Fastify from "fastify";
import cors from "@fastify/cors";
import { FastifyError } from "fastify";

import taskRoutes from "./api/v1/tasks/routes";
import configRoutes from "./api/v1/config/routes";

const app = Fastify({
  logger: true,
});

// Healthcheck
app.get("/hello", async () => {
  return { status: "Hello World: ok" };
});

// Error handler global
app.setErrorHandler((error: FastifyError, request, reply) => {
  app.log.error(error);

  reply.status(error.statusCode ?? 400).send({
    error: error.message,
  });
});

const start = async () => {
  try {
    await app.register(cors, {
      origin: true,
    });

    await app.register(taskRoutes, { prefix: "/api/v1/tasks" });
    await app.register(configRoutes, { prefix: "/api/v1/config" });

    await app.listen({ port: 3000, host: "0.0.0.0" });

    console.log("==> Server rodando em http://localhost:3000");
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

start();
