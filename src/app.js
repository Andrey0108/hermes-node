import { Server } from './models/server.js'
import { createAuthRouter } from './routes/auth.js'
import { AuthModel } from './models/auth.js'

const server = new Server()
const authModel = new AuthModel()

server.app.use('/auth', createAuthRouter({ authModel }))
server.listen()
