import {Column, Table, Model, DataType, ForeignKey, BelongsTo, HasMany, BelongsToMany} from 'sequelize-typescript'
import Address from './address'

export type IPurchase = {
  price: number
  deliveryDate: Date
  addressId: number
}

@Table({ modelName: 'purchases', underscored: true, timestamps: false,})
class Purchase extends Model implements IPurchase {
  @Column({
    type: DataType.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  })
  public id!: number

  @Column({type: DataType.INTEGER, field: "price"})
  public price!: number

  @Column({type: DataType.DATE, field: "delivery_date"})
  public deliveryDate!: Date

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

  @BelongsTo(() => Address)
  public address!: Address
}

export default Purchase
