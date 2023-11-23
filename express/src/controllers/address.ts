import {Request, Response} from 'express'

import {createAddress} from '../db/mysql/address'
import User, {UserI} from '../db/models/user'
import {get} from 'lodash'
import {createUserAddress} from '../db/mysql/user_address'
import Address from '../db/models/address'
import {getUserByIdAndAddress} from '../db/mysql/users'

export const addAddressHandler = async (req: Request, res: Response) => {
  try{
    // リクエストの取得
    const { pref, city, other } = req.body
    if(!pref || !city || !other ){
      return res.status(400).json({message: "必須呼応目が入力されていません"}).end()
    }

    // 住所の取得
    const address = await createAddress({
      pref, city, other,
    })

    // sessionからuser情報の取得
    const currentUser: UserI & {id: number} = get(req, "identity", {} as UserI & {id: number})

    // 中間テーブルに保存 => Many to Manyのため
    await createUserAddress({userId: currentUser.id, addressId: address.id})

    // 中間テーブルからuser_idを持つaddressの情報を全て取得
    const users = await getUserByIdAndAddress(currentUser.id)

    // レスポンス
    return res.status(201).json(users).end()
  } catch (e) {
    console.log(e)
    return res.status(500).json({message: e}).end()
  }
}

export const getUserAddressesHandler = async (req: Request, res: Response) => {
  try {
    // sessionからuser情報の取得
    const currentUser: UserI & {id: number} = get(req, "identity", {} as UserI & {id: number})

    // 中間テーブルからuser_idを持つaddressの情報を全て取得
    const users = await getUserByIdAndAddress(currentUser.id)

    // レスポンス
    return res.status(201).json(users).end()
  } catch (e) {
    console.log(e)
    return res.status(500).json({message: e}).end()
  }
}
