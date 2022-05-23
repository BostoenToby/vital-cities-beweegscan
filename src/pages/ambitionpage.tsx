import { graphql, Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import scrollTo from 'gatsby-plugin-smoothscroll'
import {
  ArrowDown,
  ChevronDown,
  Copyright,
  ExternalLink,
  Facebook,
  FileText,
  Instagram,
  Mail,
  Phone,
  Twitter,
} from 'lucide-react'
import * as React from 'react'
import { useEffect, useState } from 'react'
import DonutChart from '../components/donutchart'
import Input from '../components/input'
import Intsrc from '../components/Intsrc'
import RevPrac from '../components/revprac'
import Tag from '../components/tag'
import Topnavigation from '../components/topnavigation'
import Contactsection from '../components/contactsection'
import Footer from '../components/footer'

import { allResults, searchList } from '../utils/autoComplete'
import { goodPractice, HoeWaarom, intBron } from '../interfaces/cmsInterfaces'
import Textblock from '../components/textblock'

function AmbitionPage({data}: {data: any}) {
  const [intBronnen, setIntBronnen] = React.useState<intBron[]>()
  const [hows, setHows] = React.useState<HoeWaarom[]>()
  const [whys, setWhys] = React.useState<HoeWaarom[]>()
  const [goodPracs, setGoodPracs] = React.useState<goodPractice[]>()
  const [suggestions, setSuggestions] = React.useState<string[]>()
  const [typed, setTyped] = React.useState<string>('')
  const [info, setInfo] = useState<PersonalInfo>({
    place: '',
    firstName: '',
    lastName: '',
    mail: '',
  })

  const [error, setErrors] = useState<FormError>({
    placeError: '',
    firstNameError: '',
    lastNameError: '',
    mailError: '',
  })

  const changeTyped = async (value: string) => {
    console.log('change')
    console.log(value)
    setTyped(value)
  }

  const checkInfo = async () => {
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/.test(info.mail)) {
      setErrors((currentErrors: FormError) => {
        currentErrors.mailError = 'Dit is geen geldig mail adres'
        return { ...currentErrors }
      })
    } else {
      setErrors((currentErrors: FormError) => {
        currentErrors.mailError = ''
        return { ...currentErrors }
      })
    }
    if (info.firstName.length < 2) {
      setErrors((currentErrors: FormError) => {
        currentErrors.firstNameError = 'Moet min. 2 letters zijn'
        return { ...currentErrors }
      })
    } else {
      setErrors((currentErrors: FormError) => {
        currentErrors.firstNameError = ''
        return { ...currentErrors }
      })
    }
    if (info.lastName.length < 2) {
      setErrors((currentErrors: FormError) => {
        currentErrors.lastNameError = 'Moet min. 2 letters zijn'
        return { ...currentErrors }
      })
    } else {
      setErrors((currentErrors: FormError) => {
        currentErrors.lastNameError = ''
        return { ...currentErrors }
      })
    }
    if (!allResults.includes(info.place)) {
      setErrors((currentErrors: FormError) => {
        currentErrors.placeError = 'Deze plaats is niet geldig'
        return { ...currentErrors }
      })
    } else {
      setErrors((currentErrors: FormError) => {
        currentErrors.placeError = ''
        return { ...currentErrors }
      })
    }
  }

  const { allMarkdownRemark} = data
  const { nodes, html } = allMarkdownRemark

  useEffect(() => {
    let list = searchList(typed)
    setSuggestions(list)
  }, [typed])

  useEffect(() => {
    let bronnen: intBron[] = []
    let hoeList: HoeWaarom[] = []
    let waaromList: HoeWaarom[] = []
    let goodPracs : goodPractice[] = []
    for(let item of nodes){
      if(item.parent.internal.description.includes("intbron")){
        let bron = {
          'title': item.frontmatter.title,
          'link': item.frontmatter.link,
          'text': item.frontmatter.text
        }
        bronnen.push(bron)
      } else if(item.parent.internal.description.includes("hoeopl")){
        let hoe = {
          ambition: item.frontmatter.ambition,
          text: item.frontmatter.text
        }
        hoeList.push(hoe)
      } else if(item.parent.internal.description.includes("waaromopl")){
        let waarom = {
          ambition: item.frontmatter.ambition,
          text: item.frontmatter.text
        }
        waaromList.push(waarom)
      } else if(item.parent.internal.description.includes("goodprac")){
        let themesList = item.frontmatter.themes.split(/\r?\n/)
        let extraList = item.frontmatter.extra.split(/\r?\n/)
        let prac = {
          title: item.frontmatter.title,
          date: item.frontmatter.date,
          themes: themesList,
          text: item.frontmatter.text,
          extra: extraList
        }
        goodPracs.push(prac)
      }
    }
    setIntBronnen(bronnen)
    setHows(hoeList)
    setWhys(waaromList)
    setGoodPracs(goodPracs)
    
  }, [nodes])

  return (
    <main className="font-poppins selection:bg-pink selection:text-white">
      <Topnavigation section="#CallToAction" />

      <header className="relative top-0 left-0 mb-8 flex">
        <section className="relative z-10 h-auto bg-purple">
          <div className="mb-28 flex">
            {/* <div className="bg-yellow h-16 w-20 absolute z-10 top-0 left-0"></div>
            <a href="https://vitalcities.be/"><StaticImage src="../images/logo_03.png" alt="Logo of Vital Cities" className="w-20 h-auto z-20 relative top-3 left-16"/></a> */}
          </div>

          <div className="mx-10 pb-10 mobileM:mx-8 tabletportrait:px-2 laptop:mx-16 laptopL:mx-20">
            <Tag text="Actief bewegen" colorBg="pink" colorText="white" />
            <h1 className="mb-8 max-w-2xl text-3xl font-xxbold leading-tight text-white tabletportrait:text-5xl laptop:text-6xl laptopL:text-7xl">
              Aantrekkelijke & veilige wandel- & fietsroutes
            </h1>
            <p className="mb-12 max-w-2xl text-xl font-xlight leading-6 text-white opacity-75 laptop:text-2xl">
              Aantrekkelijke en veilige wandel- en fietsroutes stimuleren een
              actieve levensstijl en faciliteren mensen om lopend of fietsend
              naar voorzieningen of het werk of school voorzieningen te gaan
            </p>
            <p className="mb-2 font-semibold text-lightPurple">scroll</p>
            <ArrowDown className="animate-bounce text-lightPurple" />
          </div>
        </section>
        <div className="h-full align-middle">
          <StaticImage
            src="../images/headerpictureactivemovement.png"
            alt="header picture"
            className="relative top-14 right-20 z-0 hidden items-center object-cover align-middle tabletportrait:block tabletportrait:h-tablet laptop:h-laptop"
          />
        </div>
        {/* <div className="absolute top-24 mx-8 space-x-3 tabletportrait:top-8 tabletportrait:right-10">
          <button tabIndex={-1} className="bg-pink text-white font-semibold px-2 py-1 drop-shadow-lg z-20 relative hover:bg-purple">
            <Link to="..">Ambities</Link>
          </button>
          <button className="bg-pink text-white font-semibold px-2 py-1 drop-shadow-lg z-20 relative hover:bg-purple" onClick={() => scrollTo('#Practices')}>Good practices</button>
        </div>         */}
      </header>

      <div className="fixed top-[350px] right-4 flex flex-col items-center gap-4">
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
      </div>

      <section
        className="mx-14 mt-32 grid grid-cols-1 gap-16 laptopL:mt-36"
        id="Location"
      >
        <div className="flex flex-col">
          <h2 className="text-xl font-xxbold tabletportrait:text-3xl laptop:text-4xl">
            Wat is de huidige situatie in
          </h2>
          <div className="flex items-center">
            <select className="-ml-1 w-fit appearance-none pr-0 text-xl font-xxbold text-purple underline decoration-lightxPurple underline-offset-2 hover:text-pink hover:decoration-pink focus:text-pink focus:decoration-pink tabletportrait:text-3xl laptop:mt-2 laptop:text-4xl">
              <option className="text-xl">het Vlaams gewest</option>
            </select>
            <ChevronDown className="mt-3 h-8 w-8 stroke-purple hover:stroke-pink focus:stroke-pink" />
          </div>

          <label className="mt-5 text-sm font-medium tabletportrait:text-lg laptop:text-xl">
            In het Vlaams gewest is{' '}
            <span className="font-semibold">
              ongeveer de helft of meer van de inwoners
            </span>{' '}
            <span className="font-semibold text-pink">niet tevreden</span> over
            de staat, veiligheid en aantrekkelijkheid van straten, pleinen,
            wandel- en fietspaden (dus een samenvatting van alle cijfers).
          </label>
        </div>
        <div>
          <label className="font-mono text-xs font-xxbold opacity-50 tabletportrait:ml-2 tabletportrait:text-sm laptop:text-lg">
            HOEVEEL % VAN DE INWONERS IS NIET TEVREDEN OVER ...
          </label>
          <div className="grid grid-cols-1 text-sm font-medium tabletportrait:grid-cols-2 tabletportrait:text-lg laptop:grid-cols-3 laptop:text-xl">
            <div className="p-2">
              <div className="flex items-center">
                <div className="mb-2 h-14 w-14 laptop:h-20 laptop:w-20">
                  <DonutChart percentage={44} />
                </div>
                <div className="flex flex-col">
                  <label className="font-medium">Staat straten & pleinen</label>
                  <label className="font-bold text-pink">44%</label>
                </div>
              </div>
            </div>
            <div className="p-2">
              <div className="flex items-center">
                <div className="mb-2 h-14 w-14 laptop:h-20 laptop:w-20">
                  <DonutChart percentage={54} />
                </div>
                <div className="flex flex-col">
                  <label className="font-medium">Staat voetpaden</label>
                  <label className="font-bold text-pink">54%</label>
                </div>
              </div>
            </div>
            <div className="p-2">
              <div className="flex items-center">
                <div className="mb-2 h-14 w-14 laptop:h-20 laptop:w-20">
                  <DonutChart percentage={59} />
                </div>
                <div className="flex flex-col">
                  <label className="font-medium">Staat fietspaden</label>
                  <label className="font-bold text-pink">59%</label>
                </div>
              </div>
            </div>
            <div className="p-2">
              <div className="flex items-center">
                <div className="mb-2 h-14 w-14 laptop:h-20 laptop:w-20">
                  <DonutChart percentage={55} />
                </div>
                <div className="flex flex-col">
                  <label className="font-medium">Genoeg fietspaden</label>
                  <label className="font-bold text-pink">55%</label>
                </div>
              </div>
            </div>
            <div className="p-2">
              <div className="flex items-center">
                <div className="mb-2 h-14 w-14 laptop:h-20 laptop:w-20">
                  <DonutChart percentage={60} />
                </div>
                <div className="flex flex-col">
                  <label className="font-medium">Fietsinfrastructuur</label>
                  <label className="font-bold text-pink">60%</label>
                </div>
              </div>
            </div>
            <div className="p-2">
              <div className="flex items-center">
                <div className="mb-2 h-14 w-14 laptop:h-20 laptop:w-20">
                  <DonutChart percentage={57} />
                </div>
                <div className="flex flex-col">
                  <label className="font-medium">Veilig fietsen</label>
                  <label className="font-bold text-pink">57%</label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="mx-16 mt-32 mb-32 flex flex-col items-center text-center font-poppins"
        id="Problem"
      >
        <h2 className="mb-5 text-xl font-bold tabletportrait:text-3xl laptop:text-4xl">
          Wat is het probleem?
        </h2>
        <p className="mb-5 text-sm tabletportrait:text-lg laptop:text-xl">
          Als routes geen goede verbinding maken met voorzieningen en werk of
          school, als ze onveilig zijn of door een weinig aantrekkelijke
          stadsomgeving gaan, zijn mensen niet geneigd om ze te gebruiken. Als
          je fiets of wandelt, voel je je namelijk kwetsbaarder dan in je auto.
        </p>
        <p className="text-sm font-bold tabletportrait:text-lg laptop:text-xl">
          Bij een gebrek aan veilige en/of aantrekkelijke routes zullen mensen
          dan eerder kiezen voor de auto.
        </p>
      </section>

      <section className="mx-16 mb-16" id="Solution">
        <h2 className="mb-4 text-xl font-bold tabletportrait:text-3xl laptop:text-4xl">
          <span className="underline decoration-lightPurple">Waarom</span>{' '}
          moeten we dit oplossen?
        </h2>
        <p className="mb-6 text-sm tabletportrait:text-lg laptop:w-4/5 laptop:text-2xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas corporis
          mollitia veniam voluptatum! Molestias odio perspiciatis porro expedita
        </p>
        <div className="grid grid-cols-1 gap-6 text-sm tabletportrait:text-lg laptop:grid-cols-2 laptop:text-xl laptopL:grid-cols-3">
          {whys && whys.map((item: any) => (
            <Textblock text={item.text} bgColor="lightPink" textColor="purple" bold={false}/>
          ))}
          {/* <div className="flex max-w-sm skew-x-12 items-center justify-center bg-lightPink">
            <p className="desktop:line-clamp-2 -skew-x-12 px-6 py-3 text-purple">
              <b className="text-xl text-purple tabletportrait:text-2xl laptop:text-3xl">
                €1
              </b>{' '}
              die men investeert in fiets-infrastructuur leidt tot{' '}
              <b className="text-xl text-purple tabletportrait:text-2xl laptop:text-3xl">
                €14 return
              </b>
            </p>
          </div>
          <div className="flex max-w-sm skew-x-12 items-center justify-center bg-lightPink">
            <p className="desktop:line-clamp-2 -skew-x-12 px-6 py-3 text-purple">
              Fietsers consumeren{' '}
              <b className="text-xl text-purple tabletportrait:text-2xl laptop:text-3xl">
                €20 meer
              </b>{' '}
              op uitstap.
            </p>
          </div>
          <div className="flex max-w-md skew-x-12 items-center justify-center bg-lightPink">
            <p className="desktop:line-clamp-2 -skew-x-12 px-6 py-3 text-purple">
              Waar meer fietsers en wandelaars op straat zijn is er{' '}
              <b className="text-xl text-purple tabletportrait:text-2xl laptop:text-3xl">
                minder criminaliteit
              </b>
            </p>
          </div>
          <div className="flex max-w-lg skew-x-12 items-center justify-center bg-lightPink">
            <p className="desktop:line-clamp-2 -skew-x-12 px-6 py-3 text-purple">
              Fietsers en voetgangers zijn tot{' '}
              <b className="text-xl text-purple tabletportrait:text-2xl laptop:text-3xl">
                30% meer
              </b>{' '}
              geneigd om{' '}
              <b className="text-xl text-purple tabletportrait:text-2xl laptop:text-3xl">
                lokaal te kopen
              </b>{' '}
              dan automobilisten
            </p>
          </div>
          <div className="flex max-w-md skew-x-12 items-center justify-center bg-lightPink">
            <p className="desktop:line-clamp-2 -skew-x-12 px-6 py-3 text-purple">
              Buurten met meer paden, pleinen en parken hebben{' '}
              <b className="text-xl text-purple tabletportrait:text-2xl laptop:text-3xl">
                meer wandelaars
              </b>
            </p>
          </div> */}
        </div>
      </section>

      <section className="mx-16 mb-16">
        <h2 className="mb-4 text-xl font-bold tabletportrait:text-3xl laptop:text-4xl">
          <span className="underline decoration-green">Hoe</span> kunnen we dit
          oplossen?
        </h2>
        <p className="mb-6 text-sm tabletportrait:text-lg laptop:w-4/5 laptop:text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas corporis
          mollitia veniam voluptatum! Molestias odio perspiciatis porro expedita
        </p>
        <div className="grid grid-cols-1 gap-6 tabletportrait:text-lg laptop:grid-cols-2 laptopL:grid-cols-4">
          {hows && hows.map((item: HoeWaarom) => (
            <Textblock text={item.text} bgColor="lightGreen" textColor="green" bold={true} />
          ))}
        </div>
      </section>

      <section className="bg-neutral px-16 pb-16" id="Resources">
        <h2 className="mb-4 pt-4 text-xl font-bold tabletportrait:text-3xl laptop:text-4xl">
          Interessante bronnen
        </h2>
        <p className="mb-6 text-sm tabletportrait:text-lg laptop:w-4/5 laptop:text-xl">
          We maken je graag wegwijs in wat bronnen en instrumenten om de
          omgevint te analyseren en te ontwerpen op vlak van wandel- en
          fietsvriendelijkheid
        </p>
        <div className="grid grid-cols-1 gap-10 text-sm tabletportrait:grid-cols-2 laptop:text-lg laptopL:grid-cols-4">
          {intBronnen && intBronnen.map((item: intBron) => (
            <Intsrc title={item.title} text={item.text} link={item.link}/>
          ))}
        </div>
      </section>

      <section className="px-16 pb-16" id="Practices">
        <div className="mb-2 flex items-center justify-between pt-24">
          <h2 className="text-xl font-bold tabletportrait:text-3xl laptop:text-4xl">
            Relevante good practices
          </h2>
          {/* <button className="bg-mediumPurple border p-2 text-pink border-pink">Alle cases</button> */}
        </div>
        <p className="mb-6 text-sm tabletportrait:text-lg laptop:text-xl">
          Je wil je door nog meer good practices laten inspireren? Ontdek ze{' '}
          <Link
            to="/overviewpagepractices"
            className="font-semibold text-pink underline hover:text-purple focus:text-purple"
          >
            hier
          </Link>
        </p>
        <div className="grid grid-cols-1 gap-16 text-sm mobile:grid-cols-2 tabletportrait:text-lg laptop:text-xl">
          <RevPrac
            image="relevantcases.png"
            imageAlt="Relevant cases"
            leftTagText="Actief bewegen"
            leftTagColorBg="pink"
            leftTagColorText="black"
            rightTagText="20 september 2020"
            rightTagColorBg="yellow"
            rightTagColorText="black"
            title="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            subTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Luctus tristique ornare duis in bibendum nunc amet, adipiscing. Quis laoreet cursus purus."
          />
          <RevPrac
            image="relevantcases.png"
            imageAlt="Relevant cases"
            leftTagText="Actief bewegen"
            leftTagColorBg="pink"
            leftTagColorText="black"
            rightTagText="20 september 2020"
            rightTagColorBg="yellow"
            rightTagColorText="black"
            title="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            subTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Luctus tristique ornare duis in bibendum nunc amet, adipiscing. Quis laoreet cursus purus."
          />
        </div>
      </section>

      <section
        className="flex items-center bg-mediumPurple py-2 px-4"
        id="CallToAction"
      >
        <StaticImage
          src="../images/calltoaction.png"
          alt="Picture of girls riding a bike"
          className="ml-14 hidden h-auto border border-r-0 border-mediumPurple laptop:block"
        />
        <div className="h-auto p-8 text-white">
          <h2 className="pb-4 text-xl font-bold tabletportrait:text-2xl">
            Benieuwd naar de beweegvriendelijkheid van jouw stad of gemeente?
          </h2>
          <h4 className="pb-4 text-lg font-semibold tabletportrait:text-xl">
            Download hier een rapport
          </h4>
          <p className="pb-4 text-sm tabletportrait:text-lg">
            Vul onderstaande gegevens in en ontvang in jouw mailbox het rapport.
          </p>

          <div
            className="desktop:grid-cols-3 z-0 grid grid-cols-1 gap-4 pb-3 text-sm tabletportrait:grid-cols-3 tabletportrait:text-lg laptop:grid-cols-1 laptopL:grid-cols-3"
            id="autoComplete"
          >
            <div className="flex max-w-min flex-col">
              <label htmlFor="Stad">Postcode of stad:</label>
              <input
                type="text"
                id="Stad"
                className="peer w-48 border-2 border-lightPink px-2 py-1 text-black outline-none focus-within:border-pink hover:border-pink active:border-pink"
                placeholder="Postcode/Stad"
                value={typed}
                onChange={(ev: any) => {
                  setTyped(ev.target.value)
                  let list = searchList(ev.target.value)
                  setSuggestions(list)
                }}
                onInput={(e: React.FormEvent<HTMLInputElement>) =>
                  setInfo((u: PersonalInfo) => {
                    //@ts-ignore
                    u.place = e.target.value
                    return { ...u }
                  })
                }
              />
              {error.placeError && (
                <p className="text-sm font-semibold text-red">
                  {error.placeError}
                </p>
              )}
              <ul className="absolute z-40 mt-16">
                {suggestions?.map((val: string, index: number) => {
                  if (index < 7) {
                    return (
                      <li
                        key={val}
                        className={`:not(:hover):hidden z-50 w-48 border border-lightGray bg-white px-2 py-1 text-black hover:cursor-pointer hover:bg-neutral`}
                        onClick={() => changeTyped(val)}
                      >
                        {val}
                      </li>
                    )
                  }
                })}
              </ul>
            </div>
            <Input
              label="Voornaam"
              callback={(e: React.FormEvent<HTMLInputElement>) =>
                setInfo((u: PersonalInfo) => {
                  //@ts-ignore
                  u.firstName = e.target.value
                  return { ...u }
                })
              }
            />
            <Input
              label="Naam"
              callback={(e: React.FormEvent<HTMLInputElement>) =>
                setInfo((u: PersonalInfo) => {
                  //@ts-ignore
                  u.lastName = e.target.value
                  return { ...u }
                })
              }
            />
            <Input
              label="E-mail"
              callback={(e: React.FormEvent<HTMLInputElement>) =>
                setInfo((u: PersonalInfo) => {
                  //@ts-ignore
                  u.mail = e.target.value
                  return { ...u }
                })
              }
            />

            <button
              className="z-0 mt-8 border-2 border-pink bg-pink px-2 py-1 text-white hover:bg-white hover:text-pink focus:bg-white focus:text-pink focus:font-semibold"
              onClick={() => checkInfo()}
            >
              Maak rapport
            </button>
          </div>
        </div>
      </section>

      <Contactsection />
      <Footer nav={true} />
    </main>
  )
}

export default AmbitionPage

export const IntBronQuery = graphql`
  query{
    allMarkdownRemark {
      nodes {
        frontmatter {
         title
         link
         text
         ambition
        	text
       }
       parent {
         internal {
           description
         }
       }
      }
    }
  }
`