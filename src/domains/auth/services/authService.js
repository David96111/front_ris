import User from '../models/User.js'

const fakeUserDB = [
  { id: '1', email: 'user@example.com', password: 'password123', name: 'Demo User' },
]

export async function login(email, password) {
  // Simulate API call delay
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const found = fakeUserDB.find(
        (u) => u.email === email && u.password === password
      )
      if (found) {
        resolve(new User({ id: found.id, email: found.email, name: found.name }))
      } else {
        reject(new Error('Invalid credentials'))
      }
    }, 500)
  })
}

export async function logout() {
  // Simulate logout API call
  return new Promise((resolve) => {
    setTimeout(() => resolve(true), 200)
  })
}
