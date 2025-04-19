import React from 'react'
import styles from './Input.module.css'

export default function Input({ label, id, type = 'text', value, onChange, placeholder, required = false }) {
  return (
    <div className={styles.wrapper}>
      {label && (
        <label htmlFor={id} className={styles.label}>
          {label}
        </label>
      )}
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className={styles.input}
      />
    </div>
  )
}
