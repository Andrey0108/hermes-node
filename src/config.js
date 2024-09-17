import 'dotenv/config'

export const {
  PORT = 3000,
  MONGO_CNN = 'mongodb://localhost:27017/hermes',
  DB_HOST = 'localhost',
  DB_DATABASE = 'hermes',
  DB_PORT = '27017',
  JWT_SECRET = '!"#$$%&hermes!"#$$%&',
  JWT_EXPIRES = '1d',
  SALT_ROUNDS = 10
} = process.env
