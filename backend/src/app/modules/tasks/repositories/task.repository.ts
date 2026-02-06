import { v4 as uuid } from "uuid";

const tasks: any[] = [];

export const TaskRepository = {
  findAll: async () => tasks,

  create: async (title: string) => {
    const task = { id: uuid(), title, completed: false };
    tasks.push(task);
    return task;
  },
};
