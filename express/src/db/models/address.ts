import User from './user'
import {BelongsToMany, Column, Table, Model, DataType} from 'sequelize-typescript'
import UserAddress from './user_addresses'

export type IAddress = {
  pref: string
  city: string
  other: string
}

@Table({ modelName: 'addresses', underscored: true, timestamps: false,})
class Address extends Model implements IAddress{
  @Column({
    type: DataType.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  })
  public id!: number

  @Column(DataType.STRING)
  public pref!: string
  @Column(DataType.STRING)
  public city!: string
  @Column(DataType.STRING)
  public other!: string

  @BelongsToMany(() => User, () => UserAddress)
  public users!: User[];
}

export default Address
