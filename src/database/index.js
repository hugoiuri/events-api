const { MongoClient } = require('mongodb');
const { logger } = require('../logger');
const config = require('../config');

const database = (() => {
  let db = undefined;
  let client = undefined;

  const connect = async () => {
    const databaseUri = config.get('DATABASE_URI');
    const databaseName = config.get('DATABASE_NAME');

    if (!db) {
      client = await MongoClient.connect(databaseUri, { useNewUrlParser: true });
      db = client.db(databaseName);
    }

    logger.info('[MongoDB] Database connected.');

    return db;
  };

  const close = async () => {
    logger.info('[MongoDB] Database trying to disconnect');
    if (client) {
      try {
        await client.close();
      } finally {
        db = undefined;
        client = undefined;
        logger.info('[MongoDB] Database disconnected');
      }
    }
  };

  const getCollection = (name) => {
    if (db) {
      return db.collection(name);
    }
  };

  return {
    connect,
    close,
    getCollection
  };
})();

module.exports = database;
