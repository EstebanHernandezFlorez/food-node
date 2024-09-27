import { Schema, model } from 'mongoose';

const ProviderShema = new Schema({
  NombreCompleto: { type: String, required: true },
  TipoDocument: { type: String, required: true },
  Document: { type: Number, required: true },
  Telefono: { type: Number, required: true },
  Empresa: { type: String, required: true },
  Estado: { type: String, required: true, default: 'Activo' }
});

// Exporta tanto el esquema como el modelo
export default model('Provider', ProviderShema);
