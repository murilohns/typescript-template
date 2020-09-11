import APIBaseError from './APIBaseError';

class InternalServerError extends APIBaseError {
  constructor() {
    super({
      message: 'Internal Server Error',
      statusCode: 500,
      parameter: null,
      type: 'internal_error',
    });
  }
}

export default InternalServerError;
