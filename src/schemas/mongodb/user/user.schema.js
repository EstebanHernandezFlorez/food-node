import { Schema, model } from 'mongoose'

const userSchema = new Schema({
  TipoDocumento: { type: String },
  Documento: { type: Number },
  Celular: { type: String, required: true },
  NombreCompleto: { type: String, required: true },
  Correo: { type: String, required: true },
  Contraseña: { type: String, required: true },
  Rol: { type: String, required: true },
  Estado: { type: Boolean, required: true, default: true } //Le cambié el nombre al estado "status" a "Estado" como está en el front
  //Adicionalmente el estado deja de ser "string" a ser "boolean" ya que así está en el front
})
export const UserSchema = model('User', userSchema)
