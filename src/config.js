import 'dotenv/config'

export const {
  PORT = 3000,
  MONGO_CNN = 'mongodb://localhost:27017/FoodInProduction'
} = process.env
