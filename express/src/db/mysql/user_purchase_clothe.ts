import UserPurchaseCloth, {IUserPurchaseCloth} from '../models/user_purchase_clothe'

export const createUserPurchaseClothes = async (records: IUserPurchaseCloth[]) => {
  return await UserPurchaseCloth.bulkCreate(records)
}
