import React from 'react'
import PatientRow from '../../molecules/PatientRow/PatientRow.jsx'

export default function PatientsTable({ patients }) {
  if (!patients.length) {
    return <p className="p-4 text-center text-gray-500">No patients found.</p>
  }

  return (
    <table className="table-auto w-full border-collapse border border-gray-300">
      <thead>
        <tr className="bg-gray-100">
          <th className="border border-gray-300 px-4 py-2 text-left">ID</th>
          <th className="border border-gray-300 px-4 py-2 text-left">Name</th>
          <th className="border border-gray-300 px-4 py-2 text-left">Email</th>
          <th className="border border-gray-300 px-4 py-2 text-left">Birth Date</th>
        </tr>
      </thead>
      <tbody>
        {patients.map((p) => (
          <PatientRow key={p.id} patient={p} />
        ))}
      </tbody>
    </table>
  )
}
