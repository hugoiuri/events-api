const winston = require('winston');
const config = require('../config');

let winstonLogger;

const formatter = ({ level, message, timestamp }) => `${timestamp} ${level}: ${message}`;

const logger = () => {
  if (!winstonLogger) {
    winstonLogger = winston.createLogger({
      level: config.get('LOG_LEVEL'),
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.timestamp(),
        winston.format.printf(formatter)),
        transports: [new winston.transports.Console()],
        exitOnError: false
      });
      
      winstonLogger.stream = {
        write: (message) => {
          winston.info(message);
        }
      };
    }
    
  return winstonLogger;
};

module.exports = logger();
