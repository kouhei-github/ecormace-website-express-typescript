import { Sequelize } from 'sequelize';

const sequelize = new Sequelize(process.env.DATABASE ?? "", process.env.USERNAME ?? "", process.env.USER_PASS ?? "", {
  dialect: 'mysql',
  host: process.env.DB_HOST ?? ""
});

export default sequelize;
