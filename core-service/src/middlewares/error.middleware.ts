import HttpException from '@exceptions/http.exception';
import logger from '@configs/logger';
import express, { NextFunction } from 'express';

const errorMiddleware = (
  err: HttpException | Error,
  req: express.Request,
  res: express.Response,
  next: NextFunction,
) => {
  logger.error(err);

  const status = err instanceof HttpException ? err.status : 500;
  const message = err.message || 'Internal Server Error';

  res.status(status).json({
    success: false,
    status,
    message,
  });
};

export default errorMiddleware;
