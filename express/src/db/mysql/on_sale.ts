import OnSale from '../models/onsale'

export const getAllSales = async () => await OnSale.findAll()
