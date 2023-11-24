import Brand from '../models/brand'
import Designer from '../models/designer'


export const getBrandsAndDesigner = async () => {
  return await Brand.findAll({
    include: [
      {model: Designer}
    ],
    attributes: { exclude: ["designerId"] }
  })
}
