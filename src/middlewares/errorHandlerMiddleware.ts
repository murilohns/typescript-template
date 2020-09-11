import APIBaseError from '@/errors/APIBaseError';
import InternalServerError from '@/errors/InternalServerError';
import { Request, Response, NextFunction } from 'express';
import { logger } from '@/lib/logger';

const errorHandlerMiddleware = (
  error: Error,
  _request: Request,
  response: Response,
  _next: NextFunction,
) => {
  const normalizedError =
    error instanceof APIBaseError ? error : new InternalServerError();

  logger.error({
    name: normalizedError.name,
    message: error.message,
    error: normalizedError,
    stack: normalizedError.stack,
  });

  return response
    .status(normalizedError.statusCode)
    .json(normalizedError.toResponse());
};

export default errorHandlerMiddleware;
