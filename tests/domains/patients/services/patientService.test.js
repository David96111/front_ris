import { getAllPatients, addPatient } from '../../../src/domains/patients/services/patientService.js'

describe('patientService', () => {
  it('getAllPatients returns array of patients', async () => {
    const patients = await getAllPatients()
    expect(Array.isArray(patients)).toBe(true)
    expect(patients.length).toBeGreaterThan(0)
    expect(patients[0]).toHaveProperty('id')
    expect(patients[0]).toHaveProperty('name')
  })

  it('addPatient returns a new patient with id', async () => {
    const newPatientData = { name: 'Test User', email: 'test@example.com', birthDate: '2000-01-01' }
    const patient = await addPatient(newPatientData)
    expect(patient).toHaveProperty('id')
    expect(patient.name).toBe(newPatientData.name)
  })
})
