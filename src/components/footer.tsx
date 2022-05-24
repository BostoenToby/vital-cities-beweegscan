import { StaticImage } from 'gatsby-plugin-image'
import { Copyright, Mail, Phone } from 'lucide-react'
import * as React from 'react'

export default () => {
  return (
    <footer className="flex justify-between p-6 text-white text-xs bg-black">
      <div className="flex h-auto items-center justify-center gap-1 tabletportrait:justify-start">
         <Copyright className="h-4 w-4" />
         <p>2022 Vital Cities, All rights reserved</p>
       </div>
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
    </footer>
  )
}

