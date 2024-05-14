import { ErrorBadRequest } from '@domain/errors/bad-request';
import { ErrorResourceNotFound } from '@domain/errors/resource-not-found';
import { Options, TasksRepo } from '@domain/repositories/tasks.repo';

type Dependencies = {
  tasksRepo: TasksRepo;
};

export const build = ({ tasksRepo }: Dependencies) => {
  const execute = async (id: string, options: Options) => {
    if (!id) throw new ErrorBadRequest('Id is required');
    if (!options) options = { includeAuthor: true };
    const task = await tasksRepo.getOne(id, options);
    if (!task) throw new ErrorResourceNotFound('Task not found');
    return task;
  };
  return execute;
};
