import { Router } from 'express'
import {isAuthenticatedHandler} from '../middlewares'
import {addAddressHandler, getUserAddressesHandler} from '../controllers/address'

export default (router: Router) => {
  router.post("/v1/address", isAuthenticatedHandler, addAddressHandler)
  router.get("/v1/address", isAuthenticatedHandler, getUserAddressesHandler)
}
