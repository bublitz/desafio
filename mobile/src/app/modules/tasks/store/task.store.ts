import { create } from 'zustand';
import { Task } from '../api/task.api';

interface TaskState {
  tasks: Task[];
  loading: boolean;
  error?: string;

  setTasks: (tasks: Task[]) => void;
  setLoading: (value: boolean) => void;
  setError: (message?: string) => void;
}

export const useTaskStore = create<TaskState>(set => ({
  tasks: [],
  loading: false,

  setTasks: tasks => set({ tasks }),
  setLoading: value => set({ loading: value }),
  setError: message => set({ error: message }),
}));
