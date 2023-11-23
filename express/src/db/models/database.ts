import { Sequelize } from 'sequelize-typescript';
import User from './user'
import Address from './address'
import UserAddress from './user_addresses'

export const databaseReflect = () => {
  const sequelize = new Sequelize(process.env.DATABASE ?? "", process.env.USERNAME ?? "", process.env.USER_PASS ?? "", {
    dialect: 'mysql',
    host: process.env.DB_HOST ?? "",
    models: [User, Address, UserAddress]
  });
}

