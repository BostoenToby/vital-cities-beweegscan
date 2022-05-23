import { Mail, Phone } from 'lucide-react'
import * as React from 'react'
import '../assets/tailwind.css'

export default () => {
  return (
    <div className="bg-dark px-8 py-8">
      <h2 className="mb-2 text-lg font-semibold text-white tabletportrait:text-xl">
        Vital Cities kan nog veel meer voor jou betekenen
      </h2>
      <div className="text-xs tabletportrait:text-sm">
        <p className="text-white">
          Je zoekt nog meer inspiratie? Die vind je op onze{' '}
          <a
            href="https://vitalcities.be/"
            className="text-pink underline hover:text-lightPurple"
          >
            website
          </a>
          .
        </p>
        <p className="text-white">
          Je hebt een onderzoeksvraag? Contacteer Lore Cuypers, projectleider
          van Vital Cities via volgende middelen.
        </p>
        <div className="flex space-x-2 py-2 text-white">
          <Mail />
          <a
            href="mailto:vitalcities@gmail.com"
            className="text-pink underline hover:text-lightPurple"
          >
            lore.cuypers@vitalcities.be
          </a>
        </div>
        <div className="flex space-x-2 text-white">
          <Phone />
          <p>+32 485 98 89 02</p>
        </div>
      </div>
    </div>
  )
}
