import { Task } from '@domain/entities/task.entity';
import { sendSuccessResponse } from '@infra/web/utils/response';
import { NextFunction, Request, Response } from 'express';
import { createOne, getOne } from '@app/use-cases/tasks';

export class TasksController {
  async getTasks(req: Request, res: Response, next: NextFunction) {
    sendSuccessResponse(res, []);
    // return tasks.map(task => task.toDto());
  }

  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const taskProps = Task.fromDto(req.body);
      const task = await createOne(taskProps);
      sendSuccessResponse(res, task.toDto());
    } catch (error) {
      next(error);
    }
  }

  async getOne(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const { includeAuthor } = req.query;
      const task = await getOne(id, { includeAuthor: includeAuthor === 'true' });
      sendSuccessResponse(res, task);
    } catch (error) {
      next(error);
    }
  }
}
