import React, { useContext } from 'react'
import MainLayout from '../../templates/MainLayout/MainLayout.jsx'
import PatientsTable from '../../organisms/PatientsTable/PatientsTable.jsx'
import PatientForm from '../../organisms/PatientForm/PatientForm.jsx'
import { PatientsContext } from '../../../domains/patients/context/PatientsContext.jsx'

export default function PatientsPage() {
  const { patients, createPatient } = useContext(PatientsContext)

  return (
    <MainLayout>
      <h2 className="text-3xl font-bold mb-6">Patients</h2>
      <PatientForm onCreate={createPatient} />
      <PatientsTable patients={patients} />
    </MainLayout>
  )
}
