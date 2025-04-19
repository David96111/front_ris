import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../../atoms/Button/Button.jsx'
import Input from '../../atoms/Input/Input.jsx'
import { AuthContext } from '../../../domains/patients/context/AuthContext.jsx'
import { ROUTES } from '../../../config/routes.js'
import styles from './LoginPage.module.css'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { login } = useContext(AuthContext)
  const navigate = useNavigate()
  const [error, setError] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    setError(null)
    if (!email || !password) {
      setError('Please fill in all fields')
      return
    }
    const success = login(email, password)
    if (success) {
      navigate(ROUTES.HOME)
    } else {
      setError('Invalid credentials')
    }
  }

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form} noValidate>
        <h2 className={styles.title}>Login</h2>
        {error && <p className={styles.error}>{error}</p>}
        <Input
          id="email"
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          required
        />
        <Input
          id="password"
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="••••••••"
          required
        />
        <Button type="submit">Sign In</Button>
      </form>
    </div>
  )
}
