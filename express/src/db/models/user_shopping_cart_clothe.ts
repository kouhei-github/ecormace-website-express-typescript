import User from './user'
import Address from './address'
import {Column, ForeignKey, Table, Model, DataType} from 'sequelize-typescript'
import Clothe from './clothes'

export type IUserShoppingCartCloth = {
  userId: number
  clotheId: number
}

@Table({   modelName: 'user_shopping_cart_clothes', underscored: true, timestamps: false })
class UserShoppingCartCloth extends Model implements IUserShoppingCartCloth {
  @Column({
    type: DataType.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  })
  public id!: number

  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
    field: "user_id",
    references: {
      model: User,
      key: 'id'
    },
  })
  public userId!: number

  @ForeignKey(() => Clothe)
  @Column({
    type: DataType.INTEGER,
    field: "clothe_id",
    references: {
      model: Clothe,
      key: 'id'
    },
  })
  public clotheId!: number
}

export default UserShoppingCartCloth
