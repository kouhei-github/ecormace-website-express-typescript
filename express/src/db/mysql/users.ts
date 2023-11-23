import User, {UserI} from '../models/user'

export const createUser = async (record: UserI):Promise<User> => await User.create(record)
export const getUserByEmail = async (email: string):Promise<User | null> => await User.findOne({ where: { email: email } })
export const getUserBySessionToken = async (sessionToken: string):Promise<User | null> => await User.findOne({ where: { sessionToken } })
export const getUsers = async ():Promise<User[]> => await User.findAll({attributes: { exclude: ['password', 'salt', 'sessionToken'] }})
export const getUserById = async (id: number)=> await User.findByPk(id)
export const deleteUserById = async (id: number) => await User.destroy({where: {id}})
export const updateUserById = (id: number, user: UserI) => User.update(user, {
  where: {id: id}
})