import { apiClient as api } from '../../shared/api/apiClient';

export interface Task {
  id: string;
  title: string;
  completed: boolean;
}

export async function fetchTasks(): Promise<Task[]> {
  const response = await api.get('/tasks');
  return response.data;
}
