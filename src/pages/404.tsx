import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Facebook, Instagram, Twitter } from "lucide-react"

const NotFoundPage = () => {
  return (
    <main>
      <header className="relative top-0 left-0 w-full h-screen flex">
          <section className="bg-purple w-full z-10 relative">
            <div className="mb-32 flex">
              <div className="bg-yellow h-24 w-32 absolute z-10 top-0 left-0"></div>
              <a href="https://vitalcities.be/"><StaticImage src="../images/test.png" alt="Logo of Vital Cities" className="w-32 h-auto z-20 relative top-4 left-20"/></a>
            </div>
            <div className="ml-16 pb-10">
              <h1 className="text-white text-6xl max-w-2xl font-bold mb-8 mobile:text-2xl tabletportrait:text-5xl tabletlandscape:text-4xl">Pagina niet gevonden</h1>
              <p className="text-white text-2xl max-w-2xl mb-12 mobile:text-sm tabletportrait:text-lg tabletlandscape:text-xl">Deze url bestaat jammer genoeg niet. Klik <a href="https://vitalcities.be/" className="text-pink underline">hier</a> om terug te keren naar de ambities van Vital Cities</p>
            </div>
          </section>
          <div className="h-full mobile:hidden"><StaticImage src="../images/headerpictureactivemovement.png" alt="Logo of Vital Cities" className="z-0 right-20 top-20 h-4/5 relative"/></div>
          <div className="absolute top-6 right-20 space-x-5 mobile:mt-24">
            <button className="bg-pink text-white font-semibold px-2 py-1 drop-shadow-lg z-20 relative">
              <a href="https://vitalcities.be/">Vital Cities</a>
            </button>
            <button className="bg-pink text-white font-semibold px-2 py-1 drop-shadow-lg z-20 relative">
              <a href="https://vitalcities.be">Ambities</a>
            </button>
          </div>
          <a href="https://www.facebook.com/VitalCitiesHowest/"><Facebook className="fill-black hover:fill-pink stroke-0"/></a>
          <a href=""><Twitter className="fill-black hover:fill-pink stroke-0"/></a>
          <a href="https://www.instagram.com/vital.cities/?hl=nl"><Instagram className="stroke-black hover:stroke-pink"/></a>
      </header>
    </main>
  )
}

export default NotFoundPage
