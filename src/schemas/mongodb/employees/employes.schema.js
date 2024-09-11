import { Schema, model } from 'mongoose'

const employeesSchema = new Schema({
  typeDocument: String,
  document: Number,
  fullName: Number,
  dateOfEntry: Date,
  emergencyContact: Number,
  Relationship: String,
  nameFamilyMember: String,
  BloodType: String,
  socialSecurityNumber: String,
  Address: String,
  contractType:String,
  status: String
})

export const PaysSchema = model('Employees', employeesSchema)
