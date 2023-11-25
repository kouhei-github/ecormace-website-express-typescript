import {Column, Table, Model, DataType, HasMany} from 'sequelize-typescript'
import Clothe from './clothes'

export type IOnSale = {
  percent: number
}

@Table({ modelName: 'on_sales', underscored: true, timestamps: false,})
class OnSale extends Model implements IOnSale {
  @Column({
    type: DataType.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  })
  public id!: number

  @Column(DataType.INTEGER)
  public percent!: number

  @HasMany(() => Clothe)
  public clothes!: Clothe[];
}

export default OnSale
