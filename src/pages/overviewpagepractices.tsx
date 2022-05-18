import React from 'react'
import '../assets/tailwind.css'
import Logo from '../components/Logo'

export default () => {
  return (
    <div>
      <nav className="h-24 w-full">
        <div className="flex h-full w-32 flex-col justify-center bg-yellow">
          <div className="absolute left-16 flex h-16 w-32">
            <Logo />
          </div>
        </div>
        <ul>
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Beweegscan</a>
          </li>
          <li>
            <a>Good practices</a>
          </li>
          <li>
            <a>Over ons</a>
          </li>
        </ul>
        <button>Contacteer ons</button>
      </nav>
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
