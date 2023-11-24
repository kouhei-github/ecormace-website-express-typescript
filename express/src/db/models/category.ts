import { Column, Table, Model, DataType} from 'sequelize-typescript'

export type ICategory = {
  name: string
}

@Table({ modelName: 'categories', underscored: true, timestamps: false,})
class Category extends Model implements ICategory{
  @Column({
    type: DataType.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  })
  public id!: number

  @Column(DataType.STRING)
  public name!: string
}

export default Category
