import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { LogOut, User } from 'lucide-react'
import { ROUTES } from '../../../config/routes.js'
import styles from './MainLayout.module.css'

export default function MainLayout({ children }) {
  const navigate = useNavigate()

  const handleLogout = () => {
    // For demo, just redirect to login
    navigate(ROUTES.LOGIN)
  }

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.logo}>HealthApp</h1>
        <nav className={styles.nav}>
          <Link to={ROUTES.HOME} className={styles.navLink}>
            Home
          </Link>
          <Link to={ROUTES.PATIENTS} className={styles.navLink}>
            Patients
          </Link>
        </nav>
        <button onClick={handleLogout} className={styles.logoutBtn} aria-label="Logout">
          <LogOut size={20} />
        </button>
      </header>
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}>
        <small>© 2024 HealthApp. All rights reserved.</small>
      </footer>
    </div>
  )
}
