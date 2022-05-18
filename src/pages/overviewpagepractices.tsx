import React from 'react'
import '../assets/tailwind.css'
import TopNavigation from '../components/TopNavigation'

export default () => {
  return (
    <div>
      <TopNavigation />
      <main className="h-screen px-32 py-16">
        <header className="flex flex-row">
          <h1 className="Poppins text-5xl font-bold text-dark">Cases</h1>
          <select></select>
        </header>
        {/* // grid */}
        <div>{/* // content components mapped*/}</div>
      </main>
      <footer>{/* // footer wanneer die er is */}</footer>
    </div>
  )
}
