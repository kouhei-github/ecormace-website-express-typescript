import User from './user'
import {Column, ForeignKey, Table, Model, DataType, BelongsToMany} from 'sequelize-typescript'
import Clothe from './clothes'

export type IUserPurchaseCloth = {
  userId: number
  clotheId: number
}

@Table({   modelName: 'user_purchase_clothes', underscored: true, timestamps: false })
class UserPurchaseCloth extends Model implements IUserPurchaseCloth {
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

export default UserPurchaseCloth
