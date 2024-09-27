import { Schema, model } from 'mongoose';

const monthlyExpenseSchema = new Schema({
  Mes: { type: String, required: true },
  Año: { type: Number, required: true },
  ValorTotalG: { type: Number, required: true },
  Novedades: { type: String, required: true },
  Alquiler: { type: Number, required: true },
  Seguro: { type: Number, required: true },
  Internet: { type: Number, required: true },
  Servicios: { type: Number, required: true },
  Contador: { type: Number, required: true },
  Publicidad: { type: Number, required: true },
  TramitadoraSS: { type: Number, required: true },
  PlanCelular: { type: Number, required: true },
  ControlIPlag: { type: Number, required: true },
  SueldoEmple: { type: String, required: true },
  valorSueld: { type: Number, required: true },
  CantidadEmpl: { type: Number, required: true },
  SueldoEmplea: { type: String, required: true },
  valorSueldoJ: { type: Number, required: true },
  bonoAdi: { type: Number, required: true }
});

const MonthlyExpenseModel = model('MonthlyExpense', monthlyExpenseSchema);

export default MonthlyExpenseModel; // Ensure this is a default export
