export interface TaskResponseDto {
  id: string;
  title: string;
  completed: boolean;
}

export interface CreateTaskDto {
  title: string;
}
