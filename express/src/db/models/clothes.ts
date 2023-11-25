import {Column, Table, Model, DataType, ForeignKey, BelongsTo, AllowNull} from 'sequelize-typescript'
import Brand from './brand'
import OnSale from './onsale'
import Category from './category'

export type IClothe = {
  name: string
  price: number
  count: number
  brandId: number
  onSaleId: number | null
  categoryId: number
}

@Table({ modelName: 'clothes', underscored: true, timestamps: false,})
class Clothe extends Model implements IClothe {
  @Column({
    type: DataType.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  })
  public id!: number

  @Column(DataType.STRING)
  public name!: string

  @Column(DataType.INTEGER)
  public price!: number

  @Column(DataType.INTEGER)
  public count!: number

  @ForeignKey(() => Brand)
  @Column({
    type: DataType.INTEGER,
    field: "brand_id",
    references: {
      model: Brand,
      key: 'id'
    },
  })
  public brandId!: number

  @BelongsTo(() => Brand)
  public brand!: Brand

  @AllowNull(true)
  @ForeignKey(() => OnSale)
  @Column({
    type: DataType.INTEGER,
    field: "on_sale_id",
    references: {
      model: OnSale,
      key: 'id'
    },
  })
  public onSaleId!: number

  @BelongsTo(() => OnSale)
  public onSale!: OnSale

  @ForeignKey(() => Category)
  @Column({
    type: DataType.INTEGER,
    field: "category_id",
    references: {
      model: Category,
      key: 'id'
    },
  })
  public categoryId!: number

  @BelongsTo(() => Category)
  public category!: Category
}

export default Clothe
