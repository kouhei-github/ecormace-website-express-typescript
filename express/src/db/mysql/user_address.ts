import UserAddress, {IUserAddress} from '../models/user_addresses'

export const createUserAddress = async (record: IUserAddress) => await UserAddress.create(record)
