import React from 'react'
import { formatDate } from '../../../lib/formatDate.js'

export default function PatientRow({ patient }) {
  return (
    <tr>
      <td className="border px-4 py-2">{patient.id}</td>
      <td className="border px-4 py-2">{patient.name}</td>
      <td className="border px-4 py-2">{patient.email}</td>
      <td className="border px-4 py-2">{formatDate(patient.birthDate)}</td>
    </tr>
  )
}
