import { Schema, model } from 'mongoose'

const detailStatusSchema = new Schema({
  idOrder: { type: Number, require: true },
  idUsers: { type: Number, require: true },
  state: {
    type: String,
    require: true,
    default: 'Por iniciar',
    enum: ['Por iniciar', 'En produccion', 'Cancelada', 'Terminado', 'Pausada']
  },
  H_FChangesState: { type: String },
  execution_time: { type: String }
})
export const DetailStatusSchema = model('User', detailStatusSchema)
