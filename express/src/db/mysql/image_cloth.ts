import ImageCloth, {IImageCloth} from '../models/image_cloth'

export const createImageCloth = async (records: IImageCloth[]) => await ImageCloth.bulkCreate(records)
