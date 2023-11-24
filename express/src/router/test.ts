import {Request, Response, Router} from 'express'
import {isAuthenticatedHandler} from '../middlewares'
import Designer from '../db/models/designer'
import Brand from '../db/models/brand'
import {getBrandsAndDesigner} from '../db/mysql/brand'


const testHandler = async (req: Request, res: Response) => {
  const category = await getBrandsAndDesigner()
  return res.status(200).json(category).end()
}

export default (router: Router) => {
  router.get("/v1/test", isAuthenticatedHandler, testHandler)
}
