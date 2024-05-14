import { NextFunction, Request, Response } from 'express';
import { getAll, create } from '../../application/use-cases';
import { ApiResponse } from '@domain/dto/responses/api-response';
import { HTTPCodesEnum } from '@domain/errors/enums/error.enum';
import { User } from '@domain/entities/user.entity';
import { sendSuccessResponse } from '@infra/web/utils/response';

export class UsersController {
  async getUsers(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await getAll();
      sendSuccessResponse(res, result);
    } catch (err: any) {
      next(err);
    }
  }

  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await create(User.fromDto(req.body));
      sendSuccessResponse(res, result, HTTPCodesEnum.CREATED);
    } catch (error) {
      next(error);
    }
  }
}
