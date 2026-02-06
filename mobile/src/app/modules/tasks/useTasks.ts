import { useEffect, useState } from 'react';
import { fetchTasks, Task } from './task.service';

export function useTasks() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);

  async function load() {
    const data = await fetchTasks();
    setTasks(data);
    setLoading(false);
  }

  useEffect(() => {
    load();
  }, []);

  return { tasks, loading };
}
