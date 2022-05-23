import { StaticImage } from 'gatsby-plugin-image'
import { Copyright, Mail, Phone } from 'lucide-react'
import * as React from 'react'
import { Bron } from '../interfaces/testPractice'

const defaultItems: Bron[] = [
  { naam: 'Sitatie a.d.h.v. locatie', url: '#Location' },
  { naam: 'Probleem', url: '#Problem' },
  { naam: 'Oplossing', url: '#Solution' },
  { naam: 'Bronnen', url: '#Resources' },
  { naam: 'Practices', url: '#Practices' },
]

export default ({
  nav,
  items = defaultItems,
}: {
  nav: boolean
  items?: Bron[]
}) => {
  //   TODO: mogelijkheid geven om lijst van objecten met naam + url mee te geven
  return (
    <footer className="grid grid-cols-1 gap-6 bg-black px-8 py-8 text-xs text-white tabletportrait:grid-cols-3">
      <div className="flex h-auto items-center justify-center gap-1 tabletportrait:justify-start">
        <Copyright className="h-4 w-4" />
        <p>2022 Vital Cities, All rights reserved</p>
      </div>

      <div className="grid grid-cols-2 items-center gap-4 text-center">
        <a href="https://www.howest.be/nl">
          <StaticImage
            src="../images/howest-logo_wit.png"
            alt="Howest logo"
            className="w-14 tabletportrait:w-20"
          />
        </a>
        <a href="https://vitalcities.be/">
          <StaticImage
            src="../images/logo_03.png"
            alt="Vital Cities logo"
            className="w-14 tabletportrait:w-20"
          />
        </a>
      </div>

      {nav ? (
        <div className="flex flex-col items-center tabletportrait:items-end">
          {items.map((e, i) => (
            <a
              key={i}
              href={e.url}
              className="hover:text-pink active:text-lightPurple focus:text-pink"
            >
              {e.naam}
            </a>
          ))}
        </div>
      ) : null}
    </footer>
  )
}
