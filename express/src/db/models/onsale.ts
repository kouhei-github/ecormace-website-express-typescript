import { Column, Table, Model, DataType} from 'sequelize-typescript'

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
}

export default OnSale
