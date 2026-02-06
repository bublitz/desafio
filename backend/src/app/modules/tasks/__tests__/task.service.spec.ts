import { TaskService } from "../task.service";

describe("TaskService", () => {
  let service: TaskService;

  beforeEach(() => {
    service = new TaskService();
  });

  it("should create a task with default values", () => {
    const task = service.create("Estudar Clean Architecture");

    expect(task).toHaveProperty("id");
    expect(task.title).toBe("Estudar Clean Architecture");
    expect(task.completed).toBe(false);
  });

  it("should list created tasks", () => {
    service.create("Task 1");
    service.create("Task 2");

    const tasks = service.list();

    expect(tasks).toHaveLength(2);
  });
});
