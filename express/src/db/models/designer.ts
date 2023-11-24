import {Column, Table, Model, DataType, PrimaryKey, AutoIncrement, HasMany} from 'sequelize-typescript'
import Brand from './brand'

export type IDesigner = {
  name: string
}

@Table({ modelName: 'designers', underscored: true, timestamps: false,})
class Designer extends Model implements IDesigner{
  @PrimaryKey
  @AutoIncrement
  @Column({
    type: DataType.INTEGER.UNSIGNED,
  })
  public id!: number

  @Column(DataType.STRING)
  public name!: string

  @HasMany(() => Brand)
  public brands!: Brand[];
}

export default Designer
