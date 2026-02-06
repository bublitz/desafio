export interface Task {
  id: string;
  title: string;
  completed: boolean;
}

export class TaskService {
  private tasks: Task[] = [];

  create(title: string): Task {
    const task: Task = {
      id: crypto.randomUUID(),
      title,
      completed: false,
    };

    this.tasks.push(task);
    return task;
  }

  list(): Task[] {
    return this.tasks;
  }
}
