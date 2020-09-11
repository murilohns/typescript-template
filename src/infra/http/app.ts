import express from 'express';
import notFoundMiddleware from '@/middlewares/notFoundMiddleware';
import errorHandlerMiddleware from '@/middlewares/errorHandlerMiddleware';

import { httpLogger } from '@/lib/logger';

const app = express();

app.use(httpLogger);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.all('/status', (_request, response, _next) =>
  response.json({
    message: 'Ok',
  }),
);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

export default app;
