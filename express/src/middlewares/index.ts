import {NextFunction, Request, Response} from 'express'
import {get, merge} from 'lodash'
import {UserI} from '../db/models/user'
import {getUserBySessionToken} from '../db/mysql/users'

export const isOwnerHandler = async (req: Request, res: Response, next: NextFunction) => {
  try{
    const { userId } = req.params
    const currentUserId: UserI & {id: number} = get(req, "identity", {} as UserI & {id: number})

    if(!currentUserId.id){
      return res.status(400).json({message: "userid is not equal"}).end()
    }

    if(currentUserId.id.toString() !== userId){
      const message = "Failed Authenticated"
      return res.status(403).json({message}).end()
    }

    return next()
  } catch (error) {
    return res.status(400).json({message: error}).end()
  }
}

export const isAuthenticatedHandler = async (req: Request, res: Response, next: NextFunction) => {
  try{
    const sessionToken = req.cookies["RULE-THE-FATE-AUTH"]
    if(!sessionToken){
      return res.status(400).json({message: "session token is nothing"}).end()
    }

    const existingUser = await getUserBySessionToken(sessionToken)

    if (!existingUser){
      const message = "Failed Authenticated"
      return res.status(403).json({message}).end()
    }

    merge(req, { identity: existingUser.toJSON() })

    return next()
  } catch (error) {
    return res.status(400).json({message: error}).end()
  }
}
