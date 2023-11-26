import Purchase, {IPurchase} from '../models/Purchase'
import Address from '../models/address'
import User from '../models/user'
import UserPurchaseCloth from '../models/user_purchase_clothe'


export const createPurchase = async (record: IPurchase) => await Purchase.create(record)

export const findAllPurchasesAddress = async () => {
  return await Purchase.findAll({
    where: {},
    include: [
      {
        model: Address,
        include: [
          {
            model: User,
            as: "users",
            attributes: {exclude: ['password', 'salt', 'sessionToken']}
          }
        ]
      }
    ]
  })
}

export const findAllPurcaseUsers = async () => {
  return await Purchase.findAll({
    where: {},
    include: [
      {
        model: UserPurchaseCloth,
        as: "userPurchases",
      }
    ]
  })
}
