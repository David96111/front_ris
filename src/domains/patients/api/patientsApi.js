import axios from 'axios'
import { API_BASE_URL } from '../../../config/api.js'

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 5000,
})

export async function fetchPatients() {
  // For demo, return static data instead of real API call
  return [
    {
      id: '1',
      name: 'John Doe',
      email: 'john.doe@example.com',
      birthDate: '1980-05-15',
    },
    {
      id: '2',
      name: 'Jane Smith',
      email: 'jane.smith@example.com',
      birthDate: '1990-11-22',
    },
  ]
}

export async function createPatientApi(patient) {
  // For demo, simulate API call delay and return patient with id
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ ...patient, id: Date.now().toString() })
    }, 500)
  })
}
