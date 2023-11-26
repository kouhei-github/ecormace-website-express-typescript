import UserShoppingCartCloth, {IUserShoppingCartCloth} from '../models/user_shopping_cart_clothe'

export const createShoppingCartClothes = async (records: IUserShoppingCartCloth[]) => {
  return await UserShoppingCartCloth.bulkCreate(records)
}
