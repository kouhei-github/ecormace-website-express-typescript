import User, {UserI} from '../models/user'
import Address from '../models/address'
import Clothe from '../models/clothes'

export const createUser = async (record: UserI):Promise<User> => await User.create(record)
export const getUserByEmail = async (email: string):Promise<User | null> => await User.findOne({ where: { email: email } })
export const getUserBySessionToken = async (sessionToken: string):Promise<User | null> => await User.findOne({ where: { sessionToken } })
export const getUsers = async ():Promise<User[]> => await User.findAll({attributes: { exclude: ['password', 'salt', 'sessionToken'] }})
export const getUserById = async (id: number)=> await User.findByPk(id)
export const deleteUserById = async (id: number) => await User.destroy({where: {id}})
export const updateUserById = (id: number, user: UserI) => User.update(user, {
  where: {id: id}
})

export const getUsersAndAddress = async () => {
  return await User.findAll({
    where: {},
    include: [{
      model: Address
    }],
    attributes: { exclude: ['password', 'salt', 'sessionToken'] }
  })
}

export const getUserByIdAndAddress = async (userId: number) => {
  return await User.findByPk(userId, {
    include: [{
      model: Address
    }],
    attributes: { exclude: ['password', 'salt', 'sessionToken'] }
  })
}

export const findAllUserPurchaseClothes = async () => {
  return await User.findAll({
    include: [{
      model: Clothe,
      as: 'clothePurchase'
    }],
    attributes: { exclude: ['password', 'salt', 'sessionToken'] }
  })
}

export const findAllUserShoppingCartClothes = async () => {
  return await User.findAll({
    include: [{
      model: Clothe,
      as: 'clotheShoppingCart'
    }],
    attributes: { exclude: ['password', 'salt', 'sessionToken'] }
  })
}
