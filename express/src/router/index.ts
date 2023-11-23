import { Router } from 'express'
import authentication from './authentication'
import user from './user'
import address from './address'

const router = Router()

export default (): Router => {
  authentication(router)
  user(router)
  address(router)
  return router
}
