import { Schema, model } from 'mongoose'

const productionOrderSchema = new Schema({
  H_FStarOrder: { type: String, default: () => new Date().toLocaleString() },
  H_FFinal: {
    type: String,
    required: true,
    validate: {
      validator: function (v) {
        // Expresión regular para validar fecha y hora en formato 'DD/MM/YYYY HH:MM'
        return /^\d{2}\/\d{2}\/\d{4} \d{2}:\d{2}$/.test(v)
      },
      message: props => `${props.value} no es un formato de fecha y hora válido. Debe ser DD/MM/YYYY HH:MM.`
    }
  },
  idProduct: { type: Number, required: true },
  initial_amount: { type: Number, required: true },
  final_QuantityProduct: { type: Number, required: true },
  final_weight: { type: Number, required: true },
  final_Quantity: { type: Number, required: true },
  observations: { type: String, required: true },
  idSpecShee: { type: Number, required: true },
  status: String
})
export const ProductionOrderSchema = model('ProductionOrder', productionOrderSchema)
