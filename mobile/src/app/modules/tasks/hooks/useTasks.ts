import { TaskService } from '../services/task.service';
import { useTaskStore } from '../store/task.store';

export function useTasks() {
  const { tasks, loading, setTasks, setLoading, setError } = useTaskStore();

  const loadTasks = async () => {
    try {
      setLoading(true);
      const data = await TaskService.list();
      setTasks(data);
    } catch {
      setError('Erro ao carregar tarefas');
    } finally {
      setLoading(false);
    }
  };

  const addTask = async (title: string) => {
    try {
      setLoading(true);
      await TaskService.create(title);
      await loadTasks();
    } catch {
      setError('Erro ao criar tarefa');
    } finally {
      setLoading(false);
    }
  };

  return {
    tasks,
    loading,
    loadTasks,
    addTask,
  };
}
