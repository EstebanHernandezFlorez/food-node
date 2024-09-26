import { Schema, model } from 'mongoose';

const listExpensesSchema = new Schema({
  nombreGasto: { type: String, required: true, unique: true },
  tipoOpcion: { type: String, required: true },
  valorOpcion: { type: String, required: true },
  conceptoGasto: { type: String, required: true },
  valor: { type: Number, required: true },
  Estado: { type: Boolean, default: true },
  hasOptions: { type: Boolean, default: false },
  options: { type: [String], default: [] }
});

const ListExpensesModel = model('ListExpenses', listExpensesSchema);

export default ListExpensesModel; // Ensure this is a default export
