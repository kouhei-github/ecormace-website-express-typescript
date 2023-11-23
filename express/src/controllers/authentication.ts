import { Request, Response } from 'express'
import {authentication, random} from '../services/authentication'
import * as process from 'process'
import {createUser, getUserByEmail} from '../db/mysql/users'


export const loginHandler = async (req: Request, res: Response) => {
  const {email, password} = req.body
  if (!email || !password){
    return res.status(400).json({message: "必須呼応目が入力されていません"}).end()
  }

  const user = await getUserByEmail(email)

  if(!user){
    return res.status(400).json({message: "Emailが存在しません"}).end()
  }
  if(user.salt === null){
    return res.status(400).json({message: "ユーザー情報が取得できませんでした"}).end()
  }

  const expectedHash = authentication(user.salt, password)

  if (user.password !== expectedHash){
    return res.status(403).json({message: "メールアドレスとパスワードが正しくありません"}).end()
  }

  const salt = random()
  user.sessionToken = authentication(salt, user.id.toString())

  await user.save()

  res.cookie(
      "RULE-THE-FATE-AUTH",
      user.sessionToken,
      {domain: process.env.DOMAIN, path: "/", }
  )

  const {id, nickName, firstName, firstKana, lastName, lastKana, sessionToken} = user

  return res.status(201).json({
    id, nickName, firstName, firstKana, lastName, lastKana, sessionToken,
    email: user.email
  }).end()
}


export const registerHandler = async (req: Request, res: Response) => {
  try{
    const { email, password } = req.body
    if(!email || !password ){
      return res.status(400).json({message: "必須呼応目が入力されていません"}).end()
    }

    const existingUser = await getUserByEmail(email)

    if (existingUser){
      const message = "Email is already exist."
      return res.status(400).json({message}).end()
    }

    const salt = random()
    const user = await createUser({
      email: email as string,
      password: authentication(salt, password as string),
      salt: salt
    })

    const {id} = user

    return res.status(201).json({id, email}).end()
  } catch (e) {
    console.log(e)
    return res.status(500).json({message: e}).end()
  }
}
