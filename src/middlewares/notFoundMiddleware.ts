import NotFoundError from '@/errors/NotFoundError';
import { Request, Response, NextFunction } from 'express';

const notFoundMiddleware = (
  _request: Request,
  _response: Response,
  next: NextFunction,
) => next(new NotFoundError('Route not found'));

export default notFoundMiddleware;
