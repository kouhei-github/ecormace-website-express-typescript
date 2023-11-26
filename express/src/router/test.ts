import {Request, Response, Router} from 'express'
import {isAuthenticatedHandler} from '../middlewares'
import {findAllClothesAndImages} from '../db/mysql/clothes'

const testHandler = async (req: Request, res: Response) => {
  const category = await findAllClothesAndImages()
  return res.status(200).json(category).end()
}

export default (router: Router) => {
  router.get("/v1/test", isAuthenticatedHandler, testHandler)
}

