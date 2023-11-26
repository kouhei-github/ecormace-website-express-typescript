import Brand from '../models/brand'
import Designer from '../models/designer'
import Image, {IImage} from '../models/image'

export const createImages = async (record: IImage[]) => await Image.bulkCreate(record)
