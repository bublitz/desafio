import { FastifyInstance } from "fastify";
import { TaskController } from "./controller";

export default async function taskRoutes(app: FastifyInstance) {
  app.get("/", TaskController.list);
  app.post("/", TaskController.create);
}
