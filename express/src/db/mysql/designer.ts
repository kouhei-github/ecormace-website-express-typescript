import Brand from '../models/brand'
import Designer from '../models/designer'

export const getDesignersAndBrand = async () => {
  return await Designer.findAll({
    include: [
        {
          model: Brand,
          attributes: { exclude: ["designerId"] }
        }
    ],
  })
}
