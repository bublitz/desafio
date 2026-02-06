import { TaskRepository } from "../repositories/task.repository";
import { TaskResponseDto } from "../dtos/task.dto";

export const TaskService = {
  list: async (): Promise<TaskResponseDto[]> => {
    return TaskRepository.findAll();
  },

  create: async (title: string): Promise<TaskResponseDto> => {
    if (!title || title.trim().length < 3) {
      throw new Error("Título deve ter pelo menos 3 caracteres");
    }

    return TaskRepository.create(title);
  },
};
