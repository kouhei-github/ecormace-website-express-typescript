import Address from './address'
import {BelongsToMany, Column, Table, Model, DataType, PrimaryKey, AutoIncrement} from 'sequelize-typescript'
import UserAddress from './user_addresses'
import Clothe from './clothes'
import UserPurchaseCloth from './user_purchase_clothe'
import UserShoppingCartCloth from './user_shopping_cart_clothe'


export type UserI = {
  firstName?: string | null
  lastName?: string | null
  email: string
  firstKana?: string | null
  lastKana?: string | null
  password: string
  sessionToken?: string | null
  nickName?: string | null
  salt?: string | null
}

@Table({ modelName: "user", underscored: true })
class User extends Model implements UserI {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER.UNSIGNED)
  public id!: number

  @Column( {type: DataType.STRING,allowNull: true, field: "firstName",})
  public firstName!: string | null

  @Column({
    type: DataType.STRING,
    allowNull: true,  // allowNull property set to true
    field: "lastName",
  })
  public lastName!: string | null

  @Column({
    type: DataType.STRING,
    allowNull: true,  // allowNull property set to true
    field: "firstKana",
  })
  public firstKana!: string | null

  @Column({
    type: DataType.STRING,
    allowNull: true,  // allowNull property set to true
    field: "lastKana",
  })
  public lastKana!: string | null

  @Column(DataType.STRING)
  public email!: string

  @Column(DataType.STRING)
  public password!: string

  @Column({
    type: DataType.STRING,
    allowNull: true,  // allowNull property set to true
    field: "sessionToken",
  })
  public sessionToken!: string | null

  @Column({
    type: DataType.STRING,
    allowNull: true,  // allowNull property set to true
    field: "nickName",
  })
  public nickName!: string | null

  @Column({
    type: DataType.STRING,
    allowNull: true,  // allowNull property set to true
  })
  public salt!: string | null

  @BelongsToMany(() => Address, () => UserAddress)
  public addresses!: Address[];

  @BelongsToMany(() => Clothe, () => UserPurchaseCloth)
  public clothePurchase!: Clothe[]

  @BelongsToMany(() => Clothe, () => UserShoppingCartCloth)
  public clotheShoppingCart!: Clothe[]
}

export default User
