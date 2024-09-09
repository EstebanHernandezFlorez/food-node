import { Schema, model } from 'mongoose'
import bcrypt from 'bcryptjs'

export const usersSchema = new Schema({
  id_user: Number,
  id_role: Number,
  documentType: String,
  identification: String,
  email: String,
  password: String,
  state: Boolean
})

usersSchema.pre('save', function (next) {
  bcrypt
    .genSalt(10)
    .then((salts) => {
      bcrypt
        .hash(this.password, salts)
        .then((hash) => {
          this.password = hash
          next()
        })
        .catch((err) => {
          next(err)
        })
    })
    .catch((err) => {
      next(err)
    })
})

export const UsersSchema = model('Users', usersSchema)
