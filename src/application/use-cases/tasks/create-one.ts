import { Task } from '@domain/entities/task.entity';
import { TasksRepo } from '@domain/repositories/tasks.repo';
import { getOne } from '../users';
import { ErrorResourceNotFound } from '@domain/errors/resource-not-found';

type Dependencies = {
  tasksRepo: TasksRepo;
};
export const build = ({ tasksRepo }: Dependencies) => {
  const execute = async (task: Task) => {
    if (!task.title) throw new Error('Title is required');
    if (!task.authorId) throw new Error('Author is required');
    const user = await getOne(task.authorId, { includeTasks: false });
    if (!user) throw new ErrorResourceNotFound('Author not found');
    const taskRes = await tasksRepo.create(task);
    return taskRes;
  };
  return execute;
};
