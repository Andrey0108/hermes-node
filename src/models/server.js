import express from 'express'
import { corsMiddleware } from '../middlewares/cors.js'
import { PORT } from '../config.js'
import { dbConnection } from '../config/db.mongo.js'
import cookieParser from 'cookie-parser'

export class Server {
  constructor () {
    this.app = express()
    this.app.use(express.json())
    this.app.use(cookieParser())
    this.app.use(corsMiddleware())
    this.app.disable('x-powered-by')
  }

  async dbConnection () {
    try {
      await dbConnection()
      console.log('Database connected successfully')
    } catch (error) {
      console.error('Database connection failed', error)
    }
  }

  listen () {
    this.app.listen(PORT, () => {
      console.log(`server listening on port http://localhost:${PORT}`)
    })
  }
}
