import { Task } from '@domain/entities/task.entity';

export type Options = {
  includeAuthor?: boolean;
};
export type TasksRepo = {
  create: (task: Task) => Promise<Task>;
  getOne: (id: string, options: Options) => Promise<Task | null>;
};
