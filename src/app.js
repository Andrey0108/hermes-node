import { Server } from './models/server.js'
// routes
import { createAuthRouter } from './routes/auth.routes.js'
import { createCustomersRouter } from './routes/reservations/customers.routes.js'
import { createReservationsRouter } from './routes/reservations/reservations.routes.js'
import { createReserveCompanionsRouter } from './routes/reservations/reserve-companions.routes.js'
import { createPaysRouter } from './routes/pays/pays.routes.js'
import { createServicesRouter } from './routes/services/services.routes.js'
import { createUsersRouter } from './routes/users/users.routes.js'
// import { createDetailPackageServicesRouter } from './routes/packs/detail-package-service.routes.js'
// import { createDetailProgrammingPackageServiceRouter } from './routes/packs/detail-programming-packages-service.routes.js'
// import { createDetailProgrammingPackageRouter } from './routes/packs/detail-programming-packages.routes.js'
// import { createPackagesRouter } from './routes/packs/packages.controller.routes.js'
// import { createProgramationPackagesRouter } from './routes/packs/programation-packages.routes.js'

// models
import { AuthModel } from './models/auth.model.js'
import { CustomersModel } from './models/reservations/customers.model.js'
import { ReservationsModel } from './models/reservations/reservations.model.js'
import { ReserveCompanionsModel } from './models/reservations/reserve-companions.model.js'
import { PaysModel } from './models/pays/pays.model.js'
import { ServicesModel } from './models/services/services.model.js'
import { UsersModel } from './models/users/users.model.js'
// import { DetailPackageServicesModel } from './models/packs/detail-package-service.model.js'
// import { DetailProgrammingPackagesServiceModel } from './models/packs/detail-programming-packages-service.model.js'
// import { DetailProgrammingPackageModel } from './models/packs/detail-programming-packages.model.js'
// import { ProgramationPackagesModel } from './models/packs/programation-packages.model.js'
// import { PackagesModel } from './models/packs/packages.model.js'

const server = new Server()
const authModel = new AuthModel()
const customersModel = new CustomersModel()
const reservationsModel = new ReservationsModel()
const reserveCompanionsModel = new ReserveCompanionsModel()
const paysModel = new PaysModel()
const servicesModel = new ServicesModel()
const usersModel = new UsersModel()
// const detailPackageServicesModel = new DetailPackageServicesModel()
// const detailProgrammingPackagesServiceModel = new DetailProgrammingPackagesServiceModel()
// const detailProgrammingPackageModel = new DetailProgrammingPackageModel()
// const programationPackagesModel = new ProgramationPackagesModel()
// const packagesModel = new PackagesModel()

server.app.use('/auth', createAuthRouter({ authModel }))
server.app.use('/customers', createCustomersRouter({ customersModel }))
server.app.use('/reservations', createReservationsRouter({ reservationsModel }))
server.app.use('/reserve-companions', createReserveCompanionsRouter({ reserveCompanionsModel }))
server.app.use('/pays', createPaysRouter({ paysModel }))
server.app.use('/services', createServicesRouter({ servicesModel }))
server.app.use('/users', createUsersRouter({ usersModel }))

// server.app.use('/detail-package-service', createDetailPackageServicesRouter({ detailPackageServicesModel }))
// server.app.use('/detail-programming-packages-service', createDetailProgrammingPackageServiceRouter({ detailProgrammingPackagesServiceModel }))
// server.app.use('/detail-programming-package', createDetailProgrammingPackageRouter({ detailProgrammingPackageModel }))
// server.app.use('/packages', createPackagesRouter({ packagesModel }))
// server.app.use('/programation-packages', createProgramationPackagesRouter({ programationPackagesModel }))

server.dbConnection()
server.listen()
