import { FastifyRequest, FastifyReply } from "fastify";
import { TaskService } from "@/app/modules/tasks/services/task.service";

export const TaskController = {
  async list(request: FastifyRequest, reply: FastifyReply) {
    const tasks = await TaskService.list();
    reply.status(200).send(tasks);
  },

  async create(request: FastifyRequest, reply: FastifyReply) {
    const { title } = request.body as { title: string };
    const task = await TaskService.create(title);
    reply.status(201).send(task);
  },
};
