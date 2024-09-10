import { Server } from './models/server.js'
// routes
// import { createAuthRouter } from './routes/auth.routes.js'
import { createCustomersRouter } from './routes/reservations/customers.routes.js'
import { createReservationsRouter } from './routes/reservations/reservations.routes.js'
import { createReserveCompanionsRouter } from './routes/reservations/reserve-companions.routes.js'
import { createPaysRouter } from './routes/pays/pays.routes.js'
// models
// import { AuthModel } from './models/auth.model.js'
import { CustomersModel } from './models/reservations/customers.model.js'
import { ReservationsModel } from './models/reservations/reservations.model.js'
import { ReserveCompanionsModel } from './models/reservations/reserve-companions.model.js'
import { PaysModel } from './models/pays/pays.model.js'

const server = new Server()
// const authModel = new AuthModel()
const customersModel = new CustomersModel()
const reservationsModel = new ReservationsModel()
const reserveCompanionsModel = new ReserveCompanionsModel()
const paysModel = new PaysModel()

// server.app.use('/auth', createAuthRouter({ authModel }))
server.app.use('/customers', createCustomersRouter({ customersModel }))
server.app.use('/reservations', createReservationsRouter({ reservationsModel }))
server.app.use('/reserve-companions', createReserveCompanionsRouter({ reserveCompanionsModel }))
server.app.use('/pays', createPaysRouter({ paysModel }))

server.dbConnection()
server.listen()
