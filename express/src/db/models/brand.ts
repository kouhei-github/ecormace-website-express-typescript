import {Column, Table, Model, DataType, ForeignKey, BelongsTo} from 'sequelize-typescript'
import Designer from './designer'

export type IBrand = {
  name: string
  designerId: number
}

@Table({ modelName: 'brands', underscored: true, timestamps: false,})
class Brand extends Model implements IBrand {
  @Column({
    type: DataType.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  })
  public id!: number

  @Column(DataType.STRING)
  public name!: string

  @ForeignKey(() => Designer)
  @Column({
    type: DataType.INTEGER,
    field: "designer_id",
    references: {
      model: Designer,
      key: 'id'
    },
  })
  public designerId!: number

  @BelongsTo(() => Designer)
  public designer!: Designer
}

export default Brand
