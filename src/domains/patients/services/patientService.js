import Patient from '../models/Patient.js'
import * as patientsApi from '../api/patientsApi.js'

export async function getAllPatients() {
  const rawPatients = await patientsApi.fetchPatients()
  return rawPatients.map((p) => new Patient(p))
}

export async function addPatient(patientData) {
  const created = await patientsApi.createPatientApi(patientData)
  return new Patient(created)
}
