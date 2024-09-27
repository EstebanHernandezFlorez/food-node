import { Schema, model } from 'mongoose'

const EmployeeSchema = new Schema({
  typeDocument: String,
  document: Number,
  fullName: String,
  dateOfEntry: String,
  emergencyContact: Number,
  Relationship: String,
  nameFamilyMember: String,
  BloodType: String,
  socialSecurityNumber: String,
  Address: String,
  contractType:String,
  status: String
})

export default model('Employees', EmployeeSchema)
 