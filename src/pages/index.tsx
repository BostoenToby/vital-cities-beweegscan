import { StaticImage } from "gatsby-plugin-image"
import scrollTo from "gatsby-plugin-smoothscroll"
import { ArrowDown, Copyright, Facebook, Instagram, Twitter } from "lucide-react"
import * as React from "react"
import '../assets/tailwind.css'
import Ambitionblock from "../components/ambitionblock"
import AmbitionPage from "./ambitionpage"

// remove excel files because this can't be processed by Linux

const IndexPage = () => {
  return (
    // <AmbitionPage />
    <div className="font-poppins">
      <header className="relative top-0 left-0 mb-8 flex h-screen">
        <section className="bg-purple h-auto z-10 relative">
          <div className="mb-28 flex">
            <div className="bg-yellow h-16 w-20 absolute z-10 top-0 left-0"></div>
            <a href="https://vitalcities.be/"><StaticImage src="../images/logo_03.png" alt="Logo of Vital Cities" className="w-20 h-auto z-20 relative top-3 left-16"/></a>
          </div>

          <div className="mx-10 pb-10 mobileM:mx-8 tabletportrait:px-2 laptop:mx-16 laptopL:mx-20">
            <h1 className="text-white text-3xl leading-tight max-w-2xl font-xxbold mb-8 tabletportrait:text-5xl laptop:text-6xl laptopL:text-7xl">Beweegscan van Vital Cities</h1>
            <h2 className="text-white text-xl leading-6 font-xlight opacity-75 max-w-2xl mb-12 laptop:text-2xl">Meet de beweegvriendelijkheid van jouw stad of gemeente en vind de inspiratie om die nog te verbeteren</h2>
            <p className="text-lightPurple font-semibold mb-2">scroll</p>
            <ArrowDown className="text-lightPurple animate-bounce"/>
          </div>
        </section>
        <div className="h-screen"><StaticImage src="../images/beweegscan.jpg" alt="header picture" className="z-0 object-cover right-20 top-5 relative hidden tabletportrait:h-[575px] tabletportrait:block laptopL:h-laptop"/></div>      
      </header>
      <div className="flex flex-col items-center gap-4 fixed top-[450px] right-4">
        <a href="https://www.facebook.com/VitalCitiesHowest/"><Facebook className="fill-black hover:fill-pink stroke-0"/></a>
        <a href=""><Twitter className="fill-black hover:fill-pink stroke-0"/></a>
        <a href="https://www.instagram.com/vital.cities/?hl=nl"><Instagram className="stroke-black hover:stroke-pink"/></a>
      </div>
      <section className="mx-16">
        <h2 className="text-xl font-bold mb-4 tabletportrait:text-3xl laptop:text-4xl">Over de beweegscan</h2>
        <p className="mb-2">Een beweegvriendelijke leefomgeving is een omgeving die mensen faciliteert en stimuleert om te bewegen, te spelen, te sporten en te ontmoeten. Als je dus wil bouwen aan een beweegvriendelijke leefomgeving, dan kan je werk maken van de volgende ambities.</p>
        <div className="grid grid-cols-1 gap-4 flex-col mb-8 tabletportrait:grid-cols-2 laptop:grid-cols-3 4K:grid-cols-4">
          <Ambitionblock text="Ambitie 1. Actief bewegen en verplaatsen" />
          <Ambitionblock text="Ambitie 2. Verbonden stadskern" />
          <Ambitionblock text="Ambitie 3. Aantrekkelijke en veilige wandel- en fietsroutes" />
          <Ambitionblock text="Ambitie 4. Stad en buurt als sportplein" />
          <Ambitionblock text="Ambitie 5. Stad en buurt als speelplein" />
          <Ambitionblock text="Ambitie 6. Stad en buurt als ontmoetingsplek" />
          <Ambitionblock text="Ambitie 7. Bruikbaar, gevarieerd en voldoende groen" />
        </div>
        <h2 className="text-xl font-bold mb-4 tabletportrait:text-3xl laptop:text-4xl">In een oogopslag</h2>
        <p className="mb-2">In welke mate jouw stad of gemeente elk van deze ambities vandaag al waarmaakt: dat ontdek je met de Beweegscan van Vital Cities</p>
        <p className="mb-2">Met de handige zoekfunctie selecteer je voor elk van de ambities van beweegvriendelijkheid, de voor jouw stad of gemeente relevante cijfers uit de recentste Gemeente - en Stadsmonitor. En zet je die af tegen het Vlaams gemiddelde.</p>
        <p className="mb-8">Zo zie je in een oogopslag waarop jouw stad of gemeente terecht trots kan zijn (want beter scoort dan het Vlaams gemiddelde), dan wel wat nog beter kan (want minder goed scoort).</p>
        <h2 className="text-xl font-bold mb-4 tabletportrait:text-3xl laptop:text-4xl">Inspirerend</h2>
        <p className="mb-2">De inzichten die voorneomde cijfers jou geven, vullen we aan met andere onderzoeksresultaten, proven tools en good practises. Zij zullen jou beslist inspireren om de beweegvriendelijkheid van jouw stad of gemeente nog te verbeteren.</p>
        <p className="mb-8">Om je te laten inspireren: klik in het overzicht van de ambities op één ervan.</p>
      </section>
      <footer className="grid grid-cols-1 bg-black text-white text-xs px-8 py-8 gap-6 tabletportrait:grid-cols-3">
       <div className="flex gap-1 h-auto justify-center items-center tabletportrait:justify-start">
         <Copyright className="w-4 h-4" />
         <p>2022 Vital Cities, All rights reserved</p>
       </div>
       
        <div className="grid grid-cols-2 gap-4 text-center items-center">
          <a href="https://www.howest.be/nl"><StaticImage src='../images/howest-logo_wit.png' alt="Howest logo" className="w-14 tabletportrait:w-20"/></a>
          <a href="https://vitalcities.be/"><StaticImage src='../images/logo_03.png' alt="Vital Cities logo" className="w-14 tabletportrait:w-20"/></a>
        </div>
      
       
       <div className="flex flex-col items-center tabletportrait:items-end">
         <a href="#Location" className="hover:text-pink active:text-lightPurple">Over de beweegscan</a>
         <a href="#Problem" className="hover:text-pink active:text-lightPurple">In een oogopslag</a>
         <a href="#Solution" className="hover:text-pink active:text-lightPurple">Inspirerend</a>
       </div>
      </footer>
    </div>
  )
}

export default IndexPage
