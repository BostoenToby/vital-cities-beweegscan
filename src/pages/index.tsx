import scrollTo from 'gatsby-plugin-smoothscroll'
import {
  ArrowDown,
  Copyright,
  Facebook,
  Instagram,
  Twitter,
} from 'lucide-react'
import * as React from 'react'
import { StaticImage } from "gatsby-plugin-image"
import '../assets/tailwind.css'
import Ambitionblock from '../components/ambitionblock'
import Contactsection from '../components/contactsection'
import Footer from '../components/footer'
import Topnavigation from '../components/topnavigation'
import { Bron } from '../interfaces/testPractice'
import AmbitionPage from './ambitionpage'

// remove excel files because this can't be processed by Linux

const IndexPage = () => {
  const bottomNav: Bron[] = [
    { naam: 'Over de beweegscan', url: '#Location' },
    { naam: 'In een oogopslag', url: '#Problem' },
    { naam: 'Inspirerend', url: '#Solution' },
  ]

  return (
    // <AmbitionPage />
    <div className="font-poppins selection:bg-pink selection:text-white">
      <Topnavigation section="#Contact" />
      {/* <div className="fixed top-[350px] right-4 flex flex-col items-center gap-4">
        <div className="rounded-lg bg-white p-[2px]">
          <a href="https://www.facebook.com/VitalCitiesHowest/">
            <Facebook className="fill-black stroke-0 hover:fill-pink" />
          </a>
        </div>
        <div className="rounded-lg bg-white p-[2px]">
          <a href="">
            <Twitter className="fill-black stroke-0 hover:fill-pink" />
          </a>
        </div>
        <div className="rounded-lg bg-white p-[2px]">
          <a href="https://www.instagram.com/vital.cities/?hl=nl">
            <Instagram className="stroke-black hover:stroke-pink" />
          </a>
        </div>
      </div> */}

      <header className="relative top-0 left-0 mb-8 flex h-screen">
        <section className="relative z-10 h-auto bg-purple">
          <div className="mb-28 flex">
            {/* <div className="absolute top-0 left-0 z-10 h-16 w-20 bg-yellow"></div>
            <a href="https://vitalcities.be/">
              <StaticImage
                src="../images/logo_03.png"
                alt="Logo of Vital Cities"
                className="relative top-3 left-16 z-20 h-auto w-20"
              />
            </a> */}
          </div>

          <div className="mx-10 pb-10 mobileM:mx-8 tabletportrait:px-2 laptop:mx-16 laptopL:mx-20">
            <h1 className="mb-8 max-w-2xl text-3xl font-xxbold leading-tight text-white tabletportrait:text-5xl laptop:text-6xl laptopL:text-7xl">
              Beweegscan van Vital Cities
            </h1>
            <h2 className="mb-12 max-w-2xl text-xl font-xlight leading-6 text-white opacity-75 laptop:text-2xl">
              Meet de beweegvriendelijkheid van jouw stad of gemeente en vind de
              inspiratie om die nog te verbeteren
            </h2>
            <p className="mb-2 font-semibold text-lightPurple">scroll</p>
            <ArrowDown className="animate-bounce text-lightPurple" />
          </div>
        </section>
        <div className="h-screen">
          <StaticImage
            src="../images/beweegscan.jpg"
            alt="header picture"
            className="relative right-20 top-6 z-0 hidden object-cover tabletportrait:block tabletportrait:h-[575px] laptopL:h-laptop"
          />
        </div>
      </header>
      <div className="flex flex-col items-center gap-4 fixed top-[350px] right-4">
        <div className="bg-white rounded-lg p-[2px]"><a tabIndex={2} href="https://www.facebook.com/VitalCitiesHowest/"><Facebook className="fill-black hover:fill-pink stroke-0"/></a></div>
        <div className="bg-white rounded-lg p-[2px]"><a tabIndex={3} href=""><Twitter className="fill-black hover:fill-pink stroke-0"/></a></div>
        <div className="bg-white rounded-lg p-[2px]"><a tabIndex={4} href="https://www.instagram.com/vital.cities/?hl=nl"><Instagram className="stroke-black hover:stroke-pink"/></a></div>
      </div>
      <section className="mx-16">
        <h2 className="mb-4 text-xl font-bold tabletportrait:text-3xl laptop:text-4xl">
          Over de beweegscan
        </h2>
        <p className="mb-2">
          Een beweegvriendelijke leefomgeving is een omgeving die mensen
          faciliteert en stimuleert om te bewegen, te spelen, te sporten en te
          ontmoeten. Als je dus wil bouwen aan een beweegvriendelijke
          leefomgeving, dan kan je werk maken van de volgende ambities.
        </p>
        <div className="mb-8 grid grid-cols-1 flex-col gap-4 tabletportrait:grid-cols-2 laptop:grid-cols-3 4K:grid-cols-4">
          <Ambitionblock
            header="Ambitie 1."
            text="Actief bewegen en verplaatsen"
          />
          <Ambitionblock header="Ambitie 2." text="Verbonden stadskern" />
          <Ambitionblock
            header="Ambitie 3."
            text="Aantrekkelijke en veilige wandel- en fietsroutes"
          />
          <Ambitionblock
            header="Ambitie 4."
            text="Stad en buurt als sportplein"
          />
          <Ambitionblock
            header="Ambitie 5."
            text="Stad en buurt als speelplein"
          />
          <Ambitionblock
            header="Ambitie 6."
            text="Stad en buurt als ontmoetingsplek"
          />
          <Ambitionblock
            header="Ambitie 7."
            text="Bruikbaar, gevarieerd en voldoende groen"
          />
        </div>
        <h2 className="mb-4 text-xl font-bold tabletportrait:text-3xl laptop:text-4xl">
          In een oogopslag
        </h2>
        <p className="mb-2">
          In welke mate jouw stad of gemeente elk van deze ambities vandaag al
          waarmaakt: dat ontdek je met de Beweegscan van Vital Cities
        </p>
        <p className="mb-2">
          Met de handige zoekfunctie selecteer je voor elk van de ambities van
          beweegvriendelijkheid, de voor jouw stad of gemeente relevante cijfers
          uit de recentste Gemeente - en Stadsmonitor. En zet je die af tegen
          het Vlaams gemiddelde.
        </p>
        <p className="mb-8">
          Zo zie je in een oogopslag waarop jouw stad of gemeente terecht trots
          kan zijn (want beter scoort dan het Vlaams gemiddelde), dan wel wat
          nog beter kan (want minder goed scoort).
        </p>
        <h2 className="mb-4 text-xl font-bold tabletportrait:text-3xl laptop:text-4xl">
          Inspirerend
        </h2>
        <p className="mb-2">
          De inzichten die voorneomde cijfers jou geven, vullen we aan met
          andere onderzoeksresultaten, proven tools en good practises. Zij
          zullen jou beslist inspireren om de beweegvriendelijkheid van jouw
          stad of gemeente nog te verbeteren.
        </p>
        <p className="mb-8">
          Om je te laten inspireren: klik in het overzicht van de ambities op
          één ervan.
        </p>
      </section>
      <div id="Contact">
        {/* <Contactsection /> */}
        <Footer nav={true} items={bottomNav} />
      </div>
    </div>
  )
}

export default IndexPage
