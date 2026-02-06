import { FastifyReply, FastifyRequest } from "fastify";
import { ConfigService } from "@/app/modules/tasks/services/config.service";

export const ConfigController = {
  async get(request: FastifyRequest, reply: FastifyReply) {
    const config = await ConfigService.getConfig();
    reply.status(200).send(config);
  },
};
