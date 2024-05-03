import { NextFunction, Request, Response } from 'express';
import { getAll } from '../../application/use-cases';
import { ApiResponse } from '@domain/dto/responses/api-response';
import { HTTPCodesEnum } from '@domain/errors/enums/error.enum';

export class UsersController {
  async getUsers(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await getAll();
      res.json(new ApiResponse(HTTPCodesEnum.SUCCESSFUL, result)).status(HTTPCodesEnum.SUCCESSFUL);
    } catch (err: any) {
      next(err);
    }
  }
}
