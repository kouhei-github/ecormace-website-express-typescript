import Category from '../models/category'

export const getAllCategory = async (): Promise<Category[]> => await Category.findAll()
