import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { AuthProvider } from '../domains/patients/context/AuthContext.jsx'
import { PatientsProvider } from '../domains/patients/context/PatientsContext.jsx'
import LoginPage from '../ui/pages/LoginPage/LoginPage.jsx'
import HomePage from '../ui/pages/HomePage/HomePage.jsx'
import PatientsPage from '../ui/pages/PatientsPage/PatientsPage.jsx'

export default function App() {
  return (
    <AuthProvider>
      <PatientsProvider>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/patients" element={<PatientsPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </PatientsProvider>
    </AuthProvider>
  )
}
