import {Column, Table, Model, DataType, PrimaryKey, AutoIncrement, HasMany, BelongsToMany} from 'sequelize-typescript'
import Brand from './brand'
import Clothe from './clothes'
import ImageCloth from './image_cloth'

export type IImage = {
  url: string
}

@Table({ modelName: 'images', underscored: true, timestamps: false,})
class Image extends Model implements IImage{
  @PrimaryKey
  @AutoIncrement
  @Column({
    type: DataType.INTEGER.UNSIGNED,
  })
  public id!: number

  @Column(DataType.STRING)
  public url!: string

  @BelongsToMany(() => Clothe, () => ImageCloth)
  public clothes!: Clothe[]
}

export default Image
