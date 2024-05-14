import { Task, TaskStatus } from '@domain/entities/task.entity';
import { Options, TasksRepo } from '@domain/repositories/tasks.repo';
import { TaskAttributes, TaskModel } from '../models/task.model';
import { mapToEntity as mapUserToEntity } from './users.psql';
import { userAlias } from '../models/user.model';

export class TasksPsqlImpl implements TasksRepo {
  create = async (task: Task) => {
    const taskModel = mapToModel(task);
    const taskRes = await taskModel.save();
    return mapToEntity(taskRes);
  };

  getOne = async (id: string, options: Options) => {
    const include: any = [];
    if (options.includeAuthor) include.push(userAlias);
    const task = await TaskModel.findByPk(id, {
      include
    });
    if (!task) return null;
    return mapToEntity(task);
  };
}

export function mapToModel(task: Task): TaskModel {
  const taskM: TaskAttributes = {
    id: task.id ? parseInt(task.id) : undefined,
    title: task.title,
    description: task.description,
    authorId: parseInt(task.authorId),
    status: task.status,
    dueDate: task.dueDate,
    createdAt: task.createdAt,
    updatedAt: task.updatedAt,
    deletedAt: task.deletedAt
  };
  return new TaskModel(taskM);
}

export function mapToEntity(task: TaskModel): Task {
  let status = Object.values(TaskStatus).find(value => value === task.status);
  if (!status) status = TaskStatus.OPEN;
  const author = task.userData;
  const taskDOM = new Task({
    id: task.id ? task.id.toString() : undefined,
    title: task.title,
    description: task.description,
    authorId: task.authorId.toString(),
    status,
    createdAt: task.createdAt,
    updatedAt: task.updatedAt,
    deletedAt: task.deletedAt
  });
  if (author) {
    taskDOM.authorData = mapUserToEntity(author);
  }
  return taskDOM;
}
