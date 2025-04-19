import React, { useState } from 'react'
import Input from '../../atoms/Input/Input.jsx'
import Button from '../../atoms/Button/Button.jsx'

export default function PatientForm({ onCreate }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [birthDate, setBirthDate] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!name || !email || !birthDate) return
    onCreate({ name, email, birthDate })
    setName('')
    setEmail('')
    setBirthDate('')
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-md p-4 bg-white rounded shadow-md">
      <Input
        id="name"
        label="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Full name"
        required
      />
      <Input
        id="email"
        label="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="email@example.com"
        required
      />
      <Input
        id="birthDate"
        label="Birth Date"
        type="date"
        value={birthDate}
        onChange={(e) => setBirthDate(e.target.value)}
        required
      />
      <Button type="submit">Add Patient</Button>
    </form>
  )
}
