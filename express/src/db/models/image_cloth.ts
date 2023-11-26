import {Column, ForeignKey, Table, Model, DataType} from 'sequelize-typescript'
import Clothe from './clothes'
import Image from './image'

export type IImageCloth = {
  imageId: number
  clothId: number
}

@Table({   modelName: 'image_clothes', underscored: true, timestamps: false })
class ImageCloth extends Model implements IImageCloth {
  @Column({
    type: DataType.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  })
  public id!: number

  @ForeignKey(() => Image)
  @Column({
    type: DataType.INTEGER,
    field: "image_id",
    references: {
      model: Image,
      key: 'id'
    },
  })
  public imageId!: number

  @ForeignKey(() => Clothe)
  @Column({
    type: DataType.INTEGER,
    field: "cloth_id",
    references: {
      model: Clothe,
      key: 'id'
    },
  })
  public clothId!: number
}

export default ImageCloth
