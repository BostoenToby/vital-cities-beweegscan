import React from 'react'
import '../assets/tailwind.css'
import TopNavigation from '../components/TopNavigation'
import { Link } from 'gatsby'

const testJSON = [{}, {}, {}, {}, {}, {}]

export default () => {
  return (
    <div>
      <TopNavigation />
      <main className="mx-auto my-16 w-full max-w-[104rem] px-10">
        <header className="mb-14 flex flex-row justify-between">
          <h1 className="Poppins text-5xl font-bold text-dark">
            Good practices
          </h1>
          <div className="my-auto">
            <select className="Poppins text-2xl font-semibold text-purple">
              <option>Actief bewegen & verplaatsen</option>
              <option>Verbonden stadskern</option>
              <option>Fiets- & wandelroutes</option>
              <option>Sporten</option>
              <option>Spelen</option>
              <option>Ontmoeten</option>
              <option>Groen</option>
              <option>Technologie & data</option>
              <option>Transversaal beleid</option>
              <option>Participatie & inspraak</option>
            </select>
          </div>
        </header>
        {/* // grid */}
        <div className="gap grid grid-cols-3 gap-14">
          <div className="max-w-lg">
            <section className="mb-8 h-80">
              {/* // image placeholder */}
              <div className="h-full w-full bg-gray opacity-50"></div>
              <div className="Poppins relative bottom-5 left-4 flex flex-row text-base font-bold text-white">
                <div className="-skew-x-12 bg-pink py-2 px-4">
                  actief bewegen
                </div>
                <div className="-skew-x-12 bg-yellow py-2 px-4">
                  20 december 2021
                </div>
              </div>
            </section>
            <section className="Poppins mb-4">
              <h2 className="mb-4 text-2xl font-bold text-black line-clamp-2">
                Aalst: Beweegvriendelijke omgeving als vast onderdeel van
                stadsvernieuwing
              </h2>
              <p className="text-base font-medium text-dark opacity-90 line-clamp-6">
                In een procesnota (Stad Aalst, 2020) worden een aantal
                belangrijke principes gebundeld om toe te passen bij
                stadsvernieuwingstrajecten die bijdragen tot duurzaam
                samenleven. Een aantal principes zijn een hefboom voor
                beweegvriendelijke gemeentes. Die principeszijn gebaseerd op de
                ervaring om woonzorgwijk Mijlbeek te creëren in het kader van de
                zorgproeftuin AIPA (Ageing in Place Aalst, nu Zorglab Aalst) in
                2015. Samen met ouderen en betrokken actoren werden
                aandachtspunten gebundeld in functie van levenslang wonen.
                Hieruit ontstond het concept van woonzorgwijken voor een
                verouderende bevolking. Deze principes zijn nu juridisch
                verankerd in de ruimtelijk uitvoeringsplannen (RUP’s) voor alle
                standvernieuwingsprojecten. Hierdoor worden ze meer afdwingbaar.
              </p>
            </section>
            <button className="Poppin text-lg font-bold text-purple text-opacity-90">
              <Link to="/">Lees meer</Link>
              <div className="h-[3px] w-full bg-purple opacity-30"></div>
            </button>
          </div>
          <div className="max-w-lg">
            <section className="mb-8 h-80">
              {/* // image placeholder */}
              <div className="h-full w-full bg-gray opacity-50"></div>
              <div className="Poppins relative bottom-5 left-4 flex flex-row text-base font-bold text-white">
                <div className="-skew-x-12 bg-pink py-2 px-4">
                  actief bewegen
                </div>
                <div className="-skew-x-12 bg-yellow py-2 px-4">
                  20 december 2021
                </div>
              </div>
            </section>
            <section className="Poppins mb-4">
              <h2 className="mb-4 text-2xl font-bold text-black line-clamp-2">
                Aalst: Beweegvriendelijke omgeving als vast onderdeel van
                stadsvernieuwing
              </h2>
              <p className="text-base font-medium text-dark opacity-90 line-clamp-6">
                In een procesnota (Stad Aalst, 2020) worden een aantal
                belangrijke principes gebundeld om toe te passen bij
                stadsvernieuwingstrajecten die bijdragen tot duurzaam
                samenleven. Een aantal principes zijn een hefboom voor
                beweegvriendelijke gemeentes. Die principeszijn gebaseerd op de
                ervaring om woonzorgwijk Mijlbeek te creëren in het kader van de
                zorgproeftuin AIPA (Ageing in Place Aalst, nu Zorglab Aalst) in
                2015. Samen met ouderen en betrokken actoren werden
                aandachtspunten gebundeld in functie van levenslang wonen.
                Hieruit ontstond het concept van woonzorgwijken voor een
                verouderende bevolking. Deze principes zijn nu juridisch
                verankerd in de ruimtelijk uitvoeringsplannen (RUP’s) voor alle
                standvernieuwingsprojecten. Hierdoor worden ze meer afdwingbaar.
              </p>
            </section>
            <button className="Poppin text-lg font-bold text-purple text-opacity-90">
              <Link to="/">Lees meer</Link>
              <div className="h-[3px] w-full bg-purple opacity-30"></div>
            </button>
          </div>
          <div className="max-w-lg">
            <section className="mb-8 h-80">
              {/* // image placeholder */}
              <div className="h-full w-full bg-gray opacity-50"></div>
              <div className="Poppins relative bottom-5 left-4 flex flex-row text-base font-bold text-white">
                <div className="-skew-x-12 bg-pink py-2 px-4">
                  actief bewegen
                </div>
                <div className="-skew-x-12 bg-yellow py-2 px-4">
                  20 december 2021
                </div>
              </div>
            </section>
            <section className="Poppins mb-4">
              <h2 className="mb-4 text-2xl font-bold text-black line-clamp-2">
                Aalst: Beweegvriendelijke omgeving als vast onderdeel van
                stadsvernieuwing
              </h2>
              <p className="text-base font-medium text-dark opacity-90 line-clamp-6">
                In een procesnota (Stad Aalst, 2020) worden een aantal
                belangrijke principes gebundeld om toe te passen bij
                stadsvernieuwingstrajecten die bijdragen tot duurzaam
                samenleven. Een aantal principes zijn een hefboom voor
                beweegvriendelijke gemeentes. Die principeszijn gebaseerd op de
                ervaring om woonzorgwijk Mijlbeek te creëren in het kader van de
                zorgproeftuin AIPA (Ageing in Place Aalst, nu Zorglab Aalst) in
                2015. Samen met ouderen en betrokken actoren werden
                aandachtspunten gebundeld in functie van levenslang wonen.
                Hieruit ontstond het concept van woonzorgwijken voor een
                verouderende bevolking. Deze principes zijn nu juridisch
                verankerd in de ruimtelijk uitvoeringsplannen (RUP’s) voor alle
                standvernieuwingsprojecten. Hierdoor worden ze meer afdwingbaar.
              </p>
            </section>
            <button className="Poppin text-lg font-bold text-purple text-opacity-90">
              <Link to="/">Lees meer</Link>
              <div className="h-[3px] w-full bg-purple opacity-30"></div>
            </button>
          </div>
          <div className="max-w-lg">
            <section className="mb-8 h-80">
              {/* // image placeholder */}
              <div className="h-full w-full bg-gray opacity-50"></div>
              <div className="Poppins relative bottom-5 left-4 flex flex-row text-base font-bold text-white">
                <div className="-skew-x-12 bg-pink py-2 px-4">
                  actief bewegen
                </div>
                <div className="-skew-x-12 bg-yellow py-2 px-4">
                  20 december 2021
                </div>
              </div>
            </section>
            <section className="Poppins mb-4">
              <h2 className="mb-4 text-2xl font-bold text-black line-clamp-2">
                Aalst: Beweegvriendelijke omgeving als vast onderdeel van
                stadsvernieuwing
              </h2>
              <p className="text-base font-medium text-dark opacity-90 line-clamp-6">
                In een procesnota (Stad Aalst, 2020) worden een aantal
                belangrijke principes gebundeld om toe te passen bij
                stadsvernieuwingstrajecten die bijdragen tot duurzaam
                samenleven. Een aantal principes zijn een hefboom voor
                beweegvriendelijke gemeentes. Die principeszijn gebaseerd op de
                ervaring om woonzorgwijk Mijlbeek te creëren in het kader van de
                zorgproeftuin AIPA (Ageing in Place Aalst, nu Zorglab Aalst) in
                2015. Samen met ouderen en betrokken actoren werden
                aandachtspunten gebundeld in functie van levenslang wonen.
                Hieruit ontstond het concept van woonzorgwijken voor een
                verouderende bevolking. Deze principes zijn nu juridisch
                verankerd in de ruimtelijk uitvoeringsplannen (RUP’s) voor alle
                standvernieuwingsprojecten. Hierdoor worden ze meer afdwingbaar.
              </p>
            </section>
            <button className="Poppin text-lg font-bold text-purple text-opacity-90">
              <Link to="/">Lees meer</Link>
              <div className="h-[3px] w-full bg-purple opacity-30"></div>
            </button>
          </div>
          <div className="max-w-lg">
            <section className="mb-8 h-80">
              {/* // image placeholder */}
              <div className="h-full w-full bg-gray opacity-50"></div>
              <div className="Poppins relative bottom-5 left-4 flex flex-row text-base font-bold text-white">
                <div className="-skew-x-12 bg-pink py-2 px-4">
                  actief bewegen
                </div>
                <div className="-skew-x-12 bg-yellow py-2 px-4">
                  20 december 2021
                </div>
              </div>
            </section>
            <section className="Poppins mb-4">
              <h2 className="mb-4 text-2xl font-bold text-black line-clamp-2">
                Aalst: Beweegvriendelijke omgeving als vast onderdeel van
                stadsvernieuwing
              </h2>
              <p className="text-base font-medium text-dark opacity-90 line-clamp-6">
                In een procesnota (Stad Aalst, 2020) worden een aantal
                belangrijke principes gebundeld om toe te passen bij
                stadsvernieuwingstrajecten die bijdragen tot duurzaam
                samenleven. Een aantal principes zijn een hefboom voor
                beweegvriendelijke gemeentes. Die principeszijn gebaseerd op de
                ervaring om woonzorgwijk Mijlbeek te creëren in het kader van de
                zorgproeftuin AIPA (Ageing in Place Aalst, nu Zorglab Aalst) in
                2015. Samen met ouderen en betrokken actoren werden
                aandachtspunten gebundeld in functie van levenslang wonen.
                Hieruit ontstond het concept van woonzorgwijken voor een
                verouderende bevolking. Deze principes zijn nu juridisch
                verankerd in de ruimtelijk uitvoeringsplannen (RUP’s) voor alle
                standvernieuwingsprojecten. Hierdoor worden ze meer afdwingbaar.
              </p>
            </section>
            <button className="Poppin text-lg font-bold text-purple text-opacity-90">
              <Link to="/">Lees meer</Link>
              <div className="h-[3px] w-full bg-purple opacity-30"></div>
            </button>
          </div>
          <div className="max-w-lg">
            <section className="mb-8 h-80">
              {/* // image placeholder */}
              <div className="h-full w-full bg-gray opacity-50"></div>
              <div className="Poppins relative bottom-5 left-4 flex flex-row text-base font-bold text-white">
                <div className="-skew-x-12 bg-pink py-2 px-4">
                  actief bewegen
                </div>
                <div className="-skew-x-12 bg-yellow py-2 px-4">
                  20 december 2021
                </div>
              </div>
            </section>
            <section className="Poppins mb-4">
              <h2 className="mb-4 text-2xl font-bold text-black line-clamp-2">
                Aalst: Beweegvriendelijke omgeving als vast onderdeel van
                stadsvernieuwing
              </h2>
              <p className="text-base font-medium text-dark opacity-90 line-clamp-6">
                In een procesnota (Stad Aalst, 2020) worden een aantal
                belangrijke principes gebundeld om toe te passen bij
                stadsvernieuwingstrajecten die bijdragen tot duurzaam
                samenleven. Een aantal principes zijn een hefboom voor
                beweegvriendelijke gemeentes. Die principeszijn gebaseerd op de
                ervaring om woonzorgwijk Mijlbeek te creëren in het kader van de
                zorgproeftuin AIPA (Ageing in Place Aalst, nu Zorglab Aalst) in
                2015. Samen met ouderen en betrokken actoren werden
                aandachtspunten gebundeld in functie van levenslang wonen.
                Hieruit ontstond het concept van woonzorgwijken voor een
                verouderende bevolking. Deze principes zijn nu juridisch
                verankerd in de ruimtelijk uitvoeringsplannen (RUP’s) voor alle
                standvernieuwingsprojecten. Hierdoor worden ze meer afdwingbaar.
              </p>
            </section>
            <button className="Poppin text-lg font-bold text-purple text-opacity-90">
              <Link to="/">Lees meer</Link>
              <div className="h-[3px] w-full bg-purple opacity-30"></div>
            </button>
          </div>
          <div className="max-w-lg">
            <section className="mb-8 h-80">
              {/* // image placeholder */}
              <div className="h-full w-full bg-gray opacity-50"></div>
              <div className="Poppins relative bottom-5 left-4 flex flex-row text-base font-bold text-white">
                <div className="-skew-x-12 bg-pink py-2 px-4">
                  actief bewegen
                </div>
                <div className="-skew-x-12 bg-yellow py-2 px-4">
                  20 december 2021
                </div>
              </div>
            </section>
            <section className="Poppins mb-4">
              <h2 className="mb-4 text-2xl font-bold text-black line-clamp-2">
                Aalst: Beweegvriendelijke omgeving als vast onderdeel van
                stadsvernieuwing
              </h2>
              <p className="text-base font-medium text-dark opacity-90 line-clamp-6">
                In een procesnota (Stad Aalst, 2020) worden een aantal
                belangrijke principes gebundeld om toe te passen bij
                stadsvernieuwingstrajecten die bijdragen tot duurzaam
                samenleven. Een aantal principes zijn een hefboom voor
                beweegvriendelijke gemeentes. Die principeszijn gebaseerd op de
                ervaring om woonzorgwijk Mijlbeek te creëren in het kader van de
                zorgproeftuin AIPA (Ageing in Place Aalst, nu Zorglab Aalst) in
                2015. Samen met ouderen en betrokken actoren werden
                aandachtspunten gebundeld in functie van levenslang wonen.
                Hieruit ontstond het concept van woonzorgwijken voor een
                verouderende bevolking. Deze principes zijn nu juridisch
                verankerd in de ruimtelijk uitvoeringsplannen (RUP’s) voor alle
                standvernieuwingsprojecten. Hierdoor worden ze meer afdwingbaar.
              </p>
            </section>
            <button className="Poppin text-lg font-bold text-purple text-opacity-90">
              <Link to="/">Lees meer</Link>
              <div className="h-[3px] w-full bg-purple opacity-30"></div>
            </button>
          </div>
          <div className="max-w-lg">
            <section className="mb-8 h-80">
              {/* // image placeholder */}
              <div className="h-full w-full bg-gray opacity-50"></div>
              <div className="Poppins relative bottom-5 left-4 flex flex-row text-base font-bold text-white">
                <div className="-skew-x-12 bg-pink py-2 px-4">
                  actief bewegen
                </div>
                <div className="-skew-x-12 bg-yellow py-2 px-4">
                  20 december 2021
                </div>
              </div>
            </section>
            <section className="Poppins mb-4">
              <h2 className="mb-4 text-2xl font-bold text-black line-clamp-2">
                Aalst: Beweegvriendelijke omgeving als vast onderdeel van
                stadsvernieuwing
              </h2>
              <p className="text-base font-medium text-dark opacity-90 line-clamp-6">
                In een procesnota (Stad Aalst, 2020) worden een aantal
                belangrijke principes gebundeld om toe te passen bij
                stadsvernieuwingstrajecten die bijdragen tot duurzaam
                samenleven. Een aantal principes zijn een hefboom voor
                beweegvriendelijke gemeentes. Die principeszijn gebaseerd op de
                ervaring om woonzorgwijk Mijlbeek te creëren in het kader van de
                zorgproeftuin AIPA (Ageing in Place Aalst, nu Zorglab Aalst) in
                2015. Samen met ouderen en betrokken actoren werden
                aandachtspunten gebundeld in functie van levenslang wonen.
                Hieruit ontstond het concept van woonzorgwijken voor een
                verouderende bevolking. Deze principes zijn nu juridisch
                verankerd in de ruimtelijk uitvoeringsplannen (RUP’s) voor alle
                standvernieuwingsprojecten. Hierdoor worden ze meer afdwingbaar.
              </p>
            </section>
            <button className="Poppin text-lg font-bold text-purple text-opacity-90">
              <Link to="/">Lees meer</Link>
              <div className="h-[3px] w-full bg-purple opacity-30"></div>
            </button>
          </div>
        </div>
      </main>
      <footer>{/* // footer wanneer die er is */}</footer>
    </div>
  )
}
