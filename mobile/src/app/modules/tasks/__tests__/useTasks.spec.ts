import { renderHook, waitFor } from '@testing-library/react-native';
import { useTasks } from '../useTasks';
import * as service from '../task.service';

jest
  .spyOn(service, 'fetchTasks')
  .mockResolvedValue([{ id: '1', title: 'Task', completed: false }]);

describe('useTasks', () => {
  it('should load tasks on init', async () => {
    const { result } = renderHook(() => useTasks());

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });

    expect(result.current.tasks).toHaveLength(1);
  });
});
