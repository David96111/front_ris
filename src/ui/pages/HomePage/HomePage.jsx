import React from 'react'
import MainLayout from '../../templates/MainLayout/MainLayout.jsx'

export default function HomePage() {
  return (
    <MainLayout>
      <h2 className="text-3xl font-bold mb-6">Welcome to HealthApp</h2>
      <p className="text-gray-700 max-w-prose">
        This is a demo React app structured with Domain-Driven Design and Atomic Design principles.
      </p>
      <img
        src="https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=800&q=80"
        alt="Medical team"
        className="mt-8 rounded-lg shadow-lg max-w-full h-auto"
      />
    </MainLayout>
  )
}
