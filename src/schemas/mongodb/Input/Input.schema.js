import { Schema, model } from 'mongoose'

const inputSchema = new Schema({
  inputName: String,
  quantity: Number,
  grammageType: String,
  provider: String
})

export const InputSchema = model('Input', inputSchema)
