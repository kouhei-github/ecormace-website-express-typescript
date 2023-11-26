import Address, {IAddress} from '../models/address'
import User from '../models/user'
import Purchase from '../models/Purchase'

export const createAddress = async (record: IAddress) => await Address.create(record)

export const getAdrressesAndUser = async () => {
  return await Address.findAll({
    where: {},
    include: [{
      model: User,
      attributes: {exclude: ['password', 'salt', 'sessionToken']}
    }],
    attributes: { exclude: ['password', 'salt', 'sessionToken'] }
  })
}

export const getAdrressesAndPurchase = async () => {
  return await Address.findAll({
    where: {},
    include: [
      {
        model: User,
        attributes: {exclude: ['password', 'salt', 'sessionToken']}
      },
      {
        model: Purchase,
        as: "purchases",
        attributes: {exclude: ['addressId']}
      }
    ],
  })
}
