import { Sequelize } from 'sequelize-typescript';
import User from './user'
import Address from './address'
import UserAddress from './user_addresses'
import Category from './category'
import OnSale from './onsale'
import Designer from './designer'
import Brand from './brand'
import Clothe from './clothes'
import UserPurchaseCloth from './user_purchase_clothe'
import UserShoppingCartCloth from './user_shopping_cart_clothe'
import Purchase from './Purchase'
import Image from './image'
import ImageCloth from './image_cloth'

export const databaseReflect = () => {
  const sequelize = new Sequelize(process.env.DATABASE ?? "", process.env.USERNAME ?? "", process.env.USER_PASS ?? "", {
    dialect: 'mysql',
    host: process.env.DB_HOST ?? "",
    models: [
      User, Address,
      UserAddress, Category,
      OnSale, Designer, Brand,
      Clothe, UserPurchaseCloth,
      UserShoppingCartCloth,Purchase,
      Image,ImageCloth
    ]
  });
}

