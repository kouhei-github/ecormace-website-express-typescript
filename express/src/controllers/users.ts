import {Request, Response} from 'express'
import {authentication, random} from '../services/authentication'
import {deleteUserById, getUserById, getUsers, updateUserById} from '../db/mysql/users'


export const getAllUsersHandler = async (req: Request, res: Response) => {
  try{
    const users = await getUsers()

    return res.status(200).json(users).end()

  } catch (e) {
    console.log(e)
    return res.status(400).json({message: e}).end()
  }
}


export const deleteUserHandler = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params

    const existingUser = await getUserById(Number(userId))

    if (!existingUser){
      const message = "Failed Authenticated"
      return res.status(403).json({message}).end()
    }

    const deleteUser = await deleteUserById(Number(userId))

    return res.status(200).json(deleteUser).end()

  } catch (e) {
    return res.status(400).json({message: e}).end()
  }
}


export const updateUserHandler = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params

    const { firstName, lastName, email, firstKana, lastKana, nickName } = req.body

    const existingUser = await getUserById(Number(userId))

    if (!existingUser){
      const message = "Failed Authenticated"
      return res.status(403).json({message}).end()
    }

    const updateUser = await updateUserById(Number(userId), {
      firstName, lastName, email, firstKana, lastKana, nickName,
      password: existingUser.password
    })

    return res.status(201).json(updateUser).end()
  } catch (e) {
    return res.status(400).json({message: e}).end()
  }
}
