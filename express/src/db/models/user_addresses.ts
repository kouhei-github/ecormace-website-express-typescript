import User from './user'
import Address from './address'
import {Column, ForeignKey, Table, Model, DataType} from 'sequelize-typescript'

export type IUserAddress = {
  userId: number
  addressId: number
}

@Table({   modelName: 'user_addresses', underscored: true, timestamps: false })
class UserAddress extends Model implements IUserAddress {
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

  @ForeignKey(() => Address)
  @Column({
    type: DataType.INTEGER,
    field: "address_id",
    references: {
      model: Address,
      key: 'id'
    },
  })
  public addressId!: number
}

export default UserAddress
