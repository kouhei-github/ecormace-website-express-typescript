import Clothe from '../models/clothes'
import Brand from '../models/brand'
import OnSale from '../models/onsale'
import Category from '../models/category'

export const getAllClothe = async () => {
  return await Clothe.findAll({
    include: [
      {model: Brand},
      {model: OnSale},
      {model: Category}
    ],
    attributes: { exclude: ["brandId", "onSaleId", "categoryId"] }
  })
}
