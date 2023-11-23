import { Sequelize, Model, DataTypes, BuildOptions } from 'sequelize';
import sequelize from './database';

export type UserI = {
  firstName?: string | null,
  lastName?: string | null,
  email: string,
  firstKana?: string | null,
  lastKana?: string | null,
  password: string,
  sessionToken?: string | null,
  nickName?: string | null
  salt?: string | null
}

class User extends Model implements UserI {
  public id!: number
  public firstName!: string | null
  public lastName!: string | null
  public firstKana!: string | null
  public lastKana!: string | null
  public email!: string
  public password!: string
  public sessionToken!: string | null
  public nickName!: string | null
  public salt!: string | null
}

User.init({
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: true,  // allowNull property set to true
    field: "firstName",
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: true,  // allowNull property set to true
    field: "lastName",
  },
  email: DataTypes.STRING,
  firstKana: {
    type: DataTypes.STRING,
    allowNull: true,  // allowNull property set to true
    field: "firstKana",
  },
  lastKana: {
    type: DataTypes.STRING,
    allowNull: true,  // allowNull property set to true
    field: "lastKana",
  },
  password: DataTypes.STRING,
  sessionToken: {
    type: DataTypes.STRING,
    allowNull: true,  // allowNull property set to true
    field: "sessionToken",
  },
  nickName: {
    type: DataTypes.STRING,
    allowNull: true,  // allowNull property set to true
    field: "nickName",
  },
  salt: {
    type: DataTypes.STRING,
    allowNull: true,  // allowNull property set to true
  },
}, {
  sequelize,
  modelName: 'user',
  underscored: true,
});

export default User
