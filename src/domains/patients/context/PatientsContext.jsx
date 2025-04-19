import React, { createContext, useEffect, useState } from 'react'
import * as patientService from '../services/patientService.js'

export const PatientsContext = createContext()

export function PatientsProvider({ children }) {
  const [patients, setPatients] = useState([])

  useEffect(() => {
    async function loadPatients() {
      const allPatients = await patientService.getAllPatients()
      setPatients(allPatients)
    }
    loadPatients()
  }, [])

  async function createPatient(patientData) {
    const newPatient = await patientService.addPatient(patientData)
    setPatients((prev) => [...prev, newPatient])
  }

  return (
    <PatientsContext.Provider value={{ patients, createPatient }}>
      {children}
    </PatientsContext.Provider>
  )
}
