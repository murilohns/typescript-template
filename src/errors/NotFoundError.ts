import APIBaseError from './APIBaseError';

class NotFoundError extends APIBaseError {
  constructor(message) {
    super({
      message,
      statusCode: 404,
      parameter: null,
      type: 'not_found',
    });
  }
}

export default NotFoundError;
