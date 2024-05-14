import { ApiResponse } from '@domain/dto/responses/api-response';
import { HTTPCodesEnum } from '@domain/errors/enums/error.enum';
import { Response } from 'express';

export const sendSuccessResponse = (res: Response, data: object, code = HTTPCodesEnum.SUCCESSFUL) => {
  res.json(new ApiResponse(HTTPCodesEnum.SUCCESSFUL, data)).status(code);
};

export const sendErrorResponse = (res: Response, error: any, code = HTTPCodesEnum.INTERNAL_SERVER_ERROR) => {
  res.status(code).json(error);
};
