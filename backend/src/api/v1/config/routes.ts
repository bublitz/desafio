import { FastifyInstance } from "fastify";
import { ConfigController } from "./controller";

export default async function configRoutes(app: FastifyInstance) {
  app.get("/", ConfigController.get);
}
