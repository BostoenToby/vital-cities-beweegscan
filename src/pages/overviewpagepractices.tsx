import React from 'react'
import '../assets/tailwind.css'
import TopNavigation from '../components/TopNavigation'

export default () => {
  return (
    <div>
      <TopNavigation />
      <main>
        <header>
          <h1></h1>
          <select></select>
        </header>
        {/* // grid */}
        <div>{/* // content components mapped*/}</div>
      </main>
      <footer>{/* // footer wanneer die er is */}</footer>
    </div>
  )
}
