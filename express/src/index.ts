import express from "express"
import cors from "cors"
import * as http from 'http'
import compression from 'compression'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'
import router from './router'


const app = express()
app.use(cors({
  credentials: true
}))

app.use(compression())
app.use(cookieParser())
app.use(bodyParser.json())

const server = http.createServer(app)

server.listen(8000, () => {
  console.log("Server running")
})

app.use("/api/", router())

