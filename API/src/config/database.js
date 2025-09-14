const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'mysql',
    logging: false,
  }
);

async function connectWithRetry(retries = 10, delay = 5000) {
  while (retries > 0) {
    try {
      await sequelize.authenticate();
      return sequelize;
    } catch (err) {
      retries -= 1;
      if (retries === 0) {
        throw err;
      }
      await new Promise(res => setTimeout(res, delay));
    }
  }
}

module.exports = { sequelize, connectWithRetry };
