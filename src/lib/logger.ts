import escriba from 'escriba';
import log4js from 'log4js';

const loggerEngine = log4js.getLogger();

const loggerPattern = process.env.NODE_ENV === 'test' ? '%[%m%]%n' : '%m';

log4js.configure({
  appenders: {
    out: {
      type: 'stdout',
      layout: {
        type: 'pattern',
        pattern: loggerPattern,
      },
    },
  },
  categories: {
    default: {
      appenders: ['out'],
      level: 'all',
    },
  },
});

const config = {
  loggerEngine,
  service: 'api',
  httpConf: {
    logIdPath: 'headers.x-request-id',
    propsToLog: {
      request: ['id', 'method', 'url', 'body', 'httpVersion', 'user-agent'],
      response: [
        'id',
        'method',
        'url',
        'body',
        'httpVersion',
        'user-agent',
        'statusCode',
        'latency',
      ],
    },
  },
};

const escribaConfig = escriba(config);

export const { logger } = escribaConfig;
export const { httpLogger } = escribaConfig;
