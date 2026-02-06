import { fetchTasks } from '../task.service';
import { apiClient as api } from '../../../shared/api/apiClient';

jest.mock('../../../shared/api/apiClient');

describe('TaskService', () => {
  it('should fetch tasks from API', async () => {
    (api.get as jest.Mock).mockResolvedValue({
      data: [{ id: '1', title: 'Task', completed: false }],
    });

    const tasks = await fetchTasks();

    expect(tasks).toHaveLength(1);
    expect(api.get).toHaveBeenCalledWith('/tasks');
  });
});
