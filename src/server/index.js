const express = require('express');
const helmet = require('helmet');
const compression = require('compression');
const cors = require('cors');
const router = require('../router');
const errorHandlers = require('../error-handlers');
const config = require('../config');
const { requestLogger, logger } = require('../logger');
const pkg = require('../../package.json');

const server = (() => {
  const app = express();
  const env = process.env.NODE_ENV;
  let serverProcess;

  const start = () => new Promise(resolve => {
    app.set('port', config.get('PORT') || 8339);
    app.use(requestLogger());
    app.use(cors());
    app.use(express.json());
    app.use(helmet());
    app.use(compression());
    app.use('/', router());
    app.use(errorHandlers);

    serverProcess = app.listen(app.get('port'), () => {
      logger.info('------------------------------------------------------------------');
      logger.info(`${pkg.name} - Version: ${pkg.version}`);
      logger.info('------------------------------------------------------------------');
      logger.info(`ATTENTION, ${env} ENVIRONMENT!`);
      logger.info('------------------------------------------------------------------');
      logger.info(`Express server listening on port: ${serverProcess.address().port}`);
      logger.info('------------------------------------------------------------------');

      return resolve(app);
    });
  });

  const stop = () => new Promise((resolve, reject) => {
    if (serverProcess) {
      serverProcess.close(err => {
        if (err) {
          return reject(err);
        }
        return resolve();
      });
    }
  });

  return {
    start,
    stop
  };
})();

module.exports = server;
