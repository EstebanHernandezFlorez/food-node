import { Schema, model } from 'mongoose'

const userSchema = new Schema({
  documentType: { type: String, required: true },
  document: { type: Number, required: true, unique: true },
  cellphone: { type: String, required: true },
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  status: { type: String, required: true, default: 'Activo' }
})
export const UserSchema = model('User', userSchema)
