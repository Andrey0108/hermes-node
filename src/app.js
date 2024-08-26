import { Server } from './models/server.js'
import { createAuthRouter } from './routes/auth.js'
import { createCustomersRouter } from './routes/customers.js'
import { AuthModel } from './models/auth.js'
import { CustomersModel } from './models/customers.js'
import './config/db.mongo.js'

const server = new Server()
const authModel = new AuthModel()
const customersModel = new CustomersModel()

server.app.use('/auth', createAuthRouter({ authModel }))
server.app.use('/customers', createCustomersRouter({ customersModel }))
server.listen()
