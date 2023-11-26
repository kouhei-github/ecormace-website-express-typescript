import Clothe from '../models/clothes'
import Brand from '../models/brand'
import OnSale from '../models/onsale'
import Category from '../models/category'
import User from '../models/user'
import Image from '../models/image'

export const findAllClothe = async () => {
  return await Clothe.findAll({
    include: [
      {model: Brand},
      {model: OnSale},
      {model: Category}
    ],
    attributes: { exclude: ["brandId", "onSaleId", "categoryId"] }
  })
}

export const findAllClothesAndPurchaseUsers = async () => {
  return await Clothe.findAll({
    where: {},
    include: [
      {
        model: User,
        as: "userPurchases",
        attributes: {exclude: ['password', 'salt', 'sessionToken']}
      },
      {model: Brand},
    ],
    attributes: { exclude: ['password', 'salt', 'sessionToken'] }
  })
}

export const findAllClothesAndPShoppingCartUsers = async () => {
  return await Clothe.findAll({
    where: {},
    include: [
      {
        model: User,
        as: "userShoppingCarts",
        attributes: {exclude: ['password', 'salt', 'sessionToken']}
      },
      {model: Brand},
    ],
    attributes: { exclude: ['password', 'salt', 'sessionToken'] }
  })
}

export const findAllClothesAndImages = async () => {
  return await Clothe.findAll({
    where: {},
    include: [
      {
        model: Image,
        as: "images",
      },
      {model: Brand},
    ],
  })
}
