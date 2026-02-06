import { TaskApi } from '../api/task.api';

export const TaskService = {
  list: () => TaskApi.list(),
  create: (title: string) => TaskApi.create(title),
};
