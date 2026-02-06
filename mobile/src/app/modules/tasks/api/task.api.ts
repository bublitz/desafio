import { apiClient } from '../../../../app/shared/api/apiClient';

export interface Task {
  id: string;
  title: string;
  completed: boolean;
}

export const TaskApi = {
  async list(): Promise<Task[]> {
    const response = await apiClient.get('/tasks');
    return response.data;
  },

  async create(title: string): Promise<Task> {
    const response = await apiClient.post('/tasks', { title });
    return response.data;
  },
};
