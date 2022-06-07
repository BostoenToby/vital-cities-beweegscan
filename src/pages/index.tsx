import { ArrowDown } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import '../assets/tailwind.css'
import Ambitionblock from '../components/ambitionblock'
import Contactsection from '../components/contactsection'
import Footer from '../components/footer'
import Topnavigation from '../components/topnavigation'
import { Bron } from '../interfaces/data'
import AmbitionPage from './ambitionpage'
import Pdf from '../components/pdf'
import { graphql } from 'gatsby'
import ThemeContext from '../context/themecontext'
import FadeInSection from '../components/scrollytelling'

// remove excel files because this can't be processed by Linux

const IndexPage = ({ data }: { data: any }) => {
  const [hasMounted, setHasMounted] = useState(false)

  useEffect(() => {
    setHasMounted(true)
  }, [])

  if (!hasMounted) {
    return null
  }

  return (
    <ThemeContext.Consumer>
      {(context) => (
        <div
          className={`font-poppins font-light selection:text-white ${
            context.dark
              ? 'bg-dark selection:bg-pinkDesat '
              : 'selection:bg-pink'
          }`}
        >
          <Topnavigation section="#Contact" />
          <div
            className={`absolute top-0 left-0 h-24 w-full tabletportrait:w-1/2 ${
              context.dark ? 'bg-white bg-opacity-[0.08]' : 'bg-purple'
            }`}
          ></div>
          <div
            className={`absolute top-0 right-0 hidden h-24 w-full tabletportrait:block tabletportrait:w-1/2 ${
              context.dark ? 'bg-dark' : 'bg-white'
            }`}
          ></div>
          <div
            className={`absolute top-0 right-0 hidden h-24 w-full tabletportrait:block tabletportrait:w-1/2  ${
              context.dark
                ? 'bg-white bg-opacity-[0.08] columnbreak:bg-dark'
                : 'bg-purple columnbreak:bg-white'
            }`}
          ></div>
          <header
            className={`flex w-full flex-col columnbreak:flex-row columnbreak:items-center  ${
              context.dark
                ? 'laptopXL:bg-white laptopXL:bg-opacity-[0.08]'
                : 'laptopXL:bg-purple'
            }`}
          >
            <section
              className={`h-full w-full p-7 pb-5 columnbreak:w-1/2 columnbreak:p-14 columnbreak:pb-10 ${
                context.dark
                  ? 'bg-white bg-opacity-[0.08] laptopXL:bg-opacity-0'
                  : 'bg-purple'
              }`}
            >
              <h1 className="mb-8 max-w-2xl font-raleway text-3xl font-xxbold leading-tight text-white tabletportrait:text-4xl laptop:text-6xl laptopL:text-7xl">
                Beweegscan van Vital Cities
              </h1>
              <p className="mb-12 max-w-2xl text-xl font-xlight leading-6 text-white opacity-75 laptop:text-2xl">
                Meet de beweegvriendelijkheid van jouw stad of gemeente en vind
                de inspiratie om die nog te verbeteren
              </p>
              <p
                className={`mb-2 font-semibold ${
                  context.dark ? 'text-lightPurpleDesat' : 'text-lightPurple'
                }`}
              >
                scroll
              </p>
              <ArrowDown
                className={`animate-bounce ${
                  context.dark ? 'text-lightPurpleDesat' : 'text-lightPurple'
                }`}
              />
            </section>
            <section className="h-full w-full columnbreak:w-1/2">
              <StaticImage
                src="../images/beweegscan.jpg"
                alt="header picture"
                className="h-full w-full"
              />
            </section>
          </header>
          <main className="mx-auto max-w-[104rem]">
            <div
              className={`mx-4 my-8 mobile:mx-8 columnbreak:my-16 columnbreak:mx-16 ${
                context.dark ? 'text-white' : 'text-dark'
              }`}
            >
              <h2
                className={`mb-4 font-raleway text-xl font-bold tabletportrait:text-3xl laptop:text-4xl ${
                  context.dark ? 'opacity-90' : ''
                }`}
              >
                Over de beweegscan
              </h2>
              <p className={`mb-8 ${context.dark ? 'opacity-75' : ''}`}>
                Een beweegvriendelijke leefomgeving is een omgeving die mensen
                faciliteert en stimuleert om te bewegen, te spelen, te sporten
                en te ontmoeten. Als je dus wil bouwen aan een
                beweegvriendelijke leefomgeving, dan kan je werk maken van de
                volgende ambities.
              </p>
              <FadeInSection>
                <div className="mb-8 grid grid-cols-1 flex-col gap-8 tabletportrait:grid-cols-2 laptop:grid-cols-3 4K:grid-cols-4">
                  <Ambitionblock
                    header="Ambitie 1"
                    text="Actief bewegen en verplaatsen"
                    shorttext="actief bewegen"
                  />
                  <Ambitionblock
                    header="Ambitie 2"
                    text="Verbonden stadskern"
                    shorttext="verbonden stadskern"
                  />
                  <Ambitionblock
                    header="Ambitie 3"
                    text="Aantrekkelijke en veilige wandel- en fietsroutes"
                    shorttext="fiets- en wandelroutes"
                  />
                  <Ambitionblock
                    header="Ambitie 4"
                    text="Stad en buurt als sportplein"
                    shorttext="sporten"
                  />
                  <Ambitionblock
                    header="Ambitie 5"
                    text="Stad en buurt als speelplein"
                    shorttext="spelen"
                  />
                  <Ambitionblock
                    header="Ambitie 6"
                    text="Stad en buurt als ontmoetingsplek"
                    shorttext="ontmoeten"
                  />
                  <Ambitionblock
                    header="Ambitie 7"
                    text="Bruikbaar, gevarieerd en voldoende groen"
                    shorttext="groen"
                  />
                </div>
              </FadeInSection>
              <FadeInSection>
                <h2
                  className={`mb-4 font-raleway text-xl font-bold tabletportrait:text-3xl laptop:text-4xl ${
                    context.dark ? 'opacity-90' : ''
                  }`}
                >
                  In een oogopslag
                </h2>
                <p className={`mb-2 ${context.dark ? 'opacity-75' : ''}`}>
                  In welke mate jouw stad of gemeente elk van deze ambities
                  vandaag al waarmaakt: dat ontdek je met de Beweegscan van
                  Vital Cities
                </p>
                <p className={`mb-2 ${context.dark ? 'opacity-75' : ''}`}>
                  Met de handige zoekfunctie selecteer je voor elk van de
                  ambities van beweegvriendelijkheid, de voor jouw stad of
                  gemeente relevante cijfers uit de recentste Gemeente - en
                  Stadsmonitor. En zet je die af tegen het Vlaams gemiddelde.
                </p>
                <p className={`mb-8 ${context.dark ? 'opacity-75' : ''}`}>
                  Zo zie je in een oogopslag waarop jouw stad of gemeente
                  terecht trots kan zijn (want beter scoort dan het Vlaams
                  gemiddelde), dan wel wat nog beter kan (want minder goed
                  scoort).
                </p>

                <h2
                  className={`mb-4 font-raleway text-xl font-bold tabletportrait:text-3xl laptop:text-4xl ${
                    context.dark ? 'opacity-90' : ''
                  }`}
                >
                  Inspirerend
                </h2>
                <p className={`mb-2 ${context.dark ? 'opacity-75' : ''}`}>
                  De inzichten die voornoemde cijfers jou geven, vullen we aan
                  met andere onderzoeksresultaten, proven tools en good
                  practises. Zij zullen jou beslist inspireren om de
                  beweegvriendelijkheid van jouw stad of gemeente nog te
                  verbeteren.
                </p>
                <p className={`mb-8 ${context.dark ? 'opacity-75' : ''}`}>
                  Om je te laten inspireren: klik in het overzicht van de
                  ambities op één ervan.
                </p>
              </FadeInSection>
            </div>
          </main>
          <div id="Contact">
            <Contactsection />
            <Footer />
          </div>
        </div>
      )}
    </ThemeContext.Consumer>
  )
}

export default IndexPage
