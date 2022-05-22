import { graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import scrollTo from "gatsby-plugin-smoothscroll"
import { ArrowDown, ChevronDown, Copyright, ExternalLink, Facebook, FileText, Instagram, Mail, Phone, Twitter } from "lucide-react"
import * as React from "react"
import { useEffect, useState } from "react"
import DonutChart from "../components/donutchart"

import { allResults, searchList } from "../utils/autoComplete"

function AmbitionPage () {
  const [suggestions, setSuggestions] = React.useState<string[]>()
  const [typed, setTyped] = React.useState<string>("")
  const [info, setInfo] = useState<PersonalInfo>({
    place: '',
    firstName: '',
    lastName: '',
    mail: ''
  })

  const [error, setErrors] = useState<FormError>({
    placeError: '',
    firstNameError: '',
    lastNameError: '',
    mailError: ''
  })

  const changeTyped = async(value: string) => {
    console.log("change")
    console.log(value)
    setTyped(value)
  }

  const checkInfo = async() => {
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/.test(info.mail)){
      setErrors((currentErrors: FormError) => {
        currentErrors.mailError = "Dit is geen geldig mail adres"
        return {...currentErrors}
      })
    } else {
      setErrors((currentErrors: FormError) => {
        currentErrors.mailError = ""
        return {...currentErrors}
      })
    }
    if(info.firstName.length < 2){
      setErrors((currentErrors: FormError) => {
        currentErrors.firstNameError = "Moet min. 2 letters zijn"
        return {...currentErrors}
      })
    } else {
      setErrors((currentErrors: FormError) => {
        currentErrors.firstNameError = ""
        return {...currentErrors}
      })
    }
    if(info.lastName.length < 2){
      setErrors((currentErrors: FormError) => {
        currentErrors.lastNameError = "Moet min. 2 letters zijn"
        return {...currentErrors}
      })
    } else {
      setErrors((currentErrors: FormError) => {
        currentErrors.lastNameError = ""
        return {...currentErrors}
      })
    }
    if(!allResults.includes(info.place)){
      setErrors((currentErrors: FormError) => {
        currentErrors.placeError = "Deze plaats is niet geldig"
        return {...currentErrors}
      })
    } else {
      setErrors((currentErrors: FormError) => {
        currentErrors.placeError = ""
        return {...currentErrors}
      })
    }
  }

  useEffect(() => {
    let list = searchList(typed)
    setSuggestions(list)
  }, [typed])

  return (
    <main className="font-poppins selection:bg-pink selection:text-white">
      <header className="relative top-0 left-0 mb-8 flex">
        <section className="bg-purple h-auto z-10 relative">
          <div className="mb-28 flex">
            <div className="bg-yellow h-16 w-20 absolute z-10 top-0 left-0"></div>
            <a href="https://vitalcities.be/"><StaticImage src="../images/logo_03.png" alt="Logo of Vital Cities" className="w-20 h-auto z-20 relative top-3 left-16"/></a>
          </div>

          <div className="mx-10 pb-10 mobileM:mx-8 tabletportrait:px-2 laptop:mx-16 laptopL:mx-20">
            <div className="bg-pink -skew-x-12 max-w-max mb-5">
              <p className="text-white text-xs py-1 px-2 skew-x-12 font-bold">actief bewegen</p>
            </div>
            <h1 className="text-white text-3xl leading-tight max-w-2xl font-xxbold mb-8 tabletportrait:text-5xl laptop:text-6xl laptopL:text-7xl">Aantrekkelijke & veilige wandel- & fietsroutes</h1>
            <p className="text-white text-xl leading-6 font-xlight opacity-75 max-w-2xl mb-12 laptop:text-2xl">Aantrekkelijke en veilige wandel- en fietsroutes stimuleren een actieve levensstijl en faciliteren mensen om lopend of fietsend naar voorzieningen of het werk of school voorzieningen te gaan</p>
            <p className="text-lightPurple font-semibold mb-2">scroll</p>
            <ArrowDown className="text-lightPurple animate-bounce"/>
          </div>
        </section>
        <div className="h-full"><StaticImage src="../images/headerpictureactivemovement.png" alt="header picture" className="z-0 object-cover right-20 top-20 relative hidden tabletportrait:h-tablet tabletportrait:block laptop:h-laptop"/></div>
        <div className="absolute top-24 mx-8 space-x-3 tabletportrait:top-8 tabletportrait:right-10">
          <button tabIndex={-1} className="bg-pink text-white font-semibold px-2 py-1 drop-shadow-lg z-20 relative hover:bg-purple">
            <a href="https://vitalcities.be/">Ambities</a>
            {/* Keer terug naar overzicht met ambities/landingspage */}
          </button>
          <button className="bg-pink text-white font-semibold px-2 py-1 drop-shadow-lg z-20 relative hover:bg-purple" onClick={() => scrollTo('#Practices')}>Good practices</button>
        </div>        
      </header>
      <div className="flex flex-col items-center gap-4 fixed top-[450px] right-4">
        {/* <a href="https://www.facebook.com/VitalCitiesHowest/"><StaticImage src="../images/facebook.png" alt="Facebook" className="stroke-pink"/></a> */}
        <a href="https://www.facebook.com/VitalCitiesHowest/"><Facebook className="fill-black hover:fill-pink stroke-0"/></a>
        {/* <a href=""><StaticImage src="../images/twitter.png" alt="Twitter"/></a> */}
        <a href=""><Twitter className="fill-black hover:fill-pink stroke-0"/></a>
        {/* <a href="https://www.instagram.com/vital.cities/?hl=nl"><StaticImage src="../images/instagram.png" alt="Instagram" /></a>  */}
        <a href="https://www.instagram.com/vital.cities/?hl=nl"><Instagram className="stroke-black hover:stroke-pink"/></a>
      </div>

      <section className="grid grid-cols-1 mx-14 mt-32 gap-16 laptopL:mt-36" id="Location">
        <div className="flex flex-col">
          <h2 className="text-xl font-xxbold tabletportrait:text-3xl laptop:text-4xl">
              Wat is de huidige situatie in
          </h2>
          <div className="flex items-center">
            <select className="text-xl font-xxbold text-purple appearance-none -ml-1 w-fit underline underline-offset-2 decoration-lightxPurple pr-0 hover:text-pink hover:decoration-pink focus:text-pink focus:decoration-pink tabletportrait:text-3xl laptop:text-4xl laptop:mt-2">
              <option className="text-xl">het Vlaams gewest</option>
            </select>
            <ChevronDown className="stroke-purple mt-3 h-8 w-8 hover:stroke-pink focus:stroke-pink"/>
          </div>
          
          <label className="mt-5 font-medium text-sm tabletportrait:text-lg laptop:text-xl">
              In het Vlaams gewest is <span className="font-semibold">ongeveer de helft of meer van de
              inwoners</span> <span className="text-pink font-semibold">niet tevreden</span> over de staat, veiligheid en
              aantrekkelijkheid van straten, pleinen, wandel- en fietspaden
              (dus een samenvatting van alle cijfers). 
          </label>
        </div>
        <div>
            <label className="opacity-50 text-xs font-xxbold font-mono tabletportrait:ml-2 tabletportrait:text-sm laptop:text-lg">
              HOEVEEL % VAN DE INWONERS IS NIET TEVREDEN OVER ... 
            </label>
            <div className="grid grid-cols-1 text-sm font-medium tabletportrait:grid-cols-2 tabletportrait:text-lg laptop:grid-cols-3 laptop:text-xl">
              
                <div className="p-2">
                    <div className="flex items-center">
                    <div className="w-14 h-14 mb-2 laptop:w-20 laptop:h-20">
                        <DonutChart percentage={44} />
                    </div>
                    <div className="flex flex-col">
                        <label className="font-medium">Staat straten & pleinen</label>
                        <label className="text-pink font-bold">44%</label>
                    </div>
                    </div>
                </div>
                <div className="p-2">
                    <div className="flex items-center">
                    <div className="w-14 h-14 mb-2 laptop:w-20 laptop:h-20">
                        <DonutChart percentage={54} />
                    </div>
                    <div className="flex flex-col">
                        <label className="font-medium">Staat voetpaden</label>
                        <label className="text-pink font-bold">54%</label>
                    </div>
                    </div>
                </div>
                <div className="p-2">
                    <div className="flex items-center">
                    <div className="w-14 h-14 mb-2 laptop:w-20 laptop:h-20">
                        <DonutChart percentage={59} />
                    </div>
                    <div className="flex flex-col">
                        <label className="font-medium">Staat fietspaden</label>
                        <label className="text-pink font-bold">59%</label>
                    </div>
                    </div>
                </div>
                <div className="p-2">
                    <div className="flex items-center">
                    <div className="w-14 h-14 mb-2 laptop:w-20 laptop:h-20">
                        <DonutChart percentage={55} />
                    </div>
                    <div className="flex flex-col">
                        <label className="font-medium">Genoeg fietspaden</label>
                        <label className="text-pink font-bold">55%</label>
                    </div>
                    </div>
                </div>
                <div className="p-2">
                    <div className="flex items-center">
                    <div className="w-14 h-14 mb-2 laptop:w-20 laptop:h-20">
                        <DonutChart percentage={60} />
                    </div>
                    <div className="flex flex-col">
                        <label className="font-medium">Fietsinfrastructuur</label>
                        <label className="text-pink font-bold">60%</label>
                    </div>
                    </div>
                </div>
                <div className="p-2">
                    <div className="flex items-center">
                    <div className="w-14 h-14 mb-2 laptop:w-20 laptop:h-20">
                        <DonutChart percentage={57}/>
                    </div>
                    <div className="flex flex-col">
                        <label className="font-medium">Veilig fietsen</label>
                        <label className="text-pink font-bold">57%</label>
                    </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      <section className="flex flex-col items-center text-center font-poppins mt-32 mx-16 mb-32" id="Problem">
        <h2 className="text-xl font-bold mb-5 tabletportrait:text-3xl laptop:text-4xl">Wat is het probleem?</h2>
        <p className="mb-5 text-sm tabletportrait:text-lg laptop:text-xl">
            Als routes geen goede verbinding maken met voorzieningen en werk of school, als ze onveilig zijn of door een weinig aantrekkelijke
            stadsomgeving gaan, zijn mensen niet geneigd om ze te gebruiken. Als je fiets of wandelt, voel je je namelijk kwetsbaarder dan in je auto. 
        </p>
        <p className="font-bold text-sm tabletportrait:text-lg laptop:text-xl">
            Bij een gebrek aan veilige en/of aantrekkelijke routes zullen mensen dan eerder kiezen voor de auto.
        </p>
      </section>

      <section className="mx-16 mb-16" id="Solution" >
        <h2 className="text-xl font-bold mb-4 tabletportrait:text-3xl laptop:text-4xl"><span className="underline decoration-lightPurple">Waarom</span> moeten we dit oplossen?</h2>
        <p className="mb-6 text-sm tabletportrait:text-lg laptop:text-2xl laptop:w-4/5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas corporis mollitia veniam voluptatum! Molestias odio perspiciatis porro expedita</p>
        <div className="grid grid-cols-1 gap-6 text-sm tabletportrait:text-lg laptop:text-xl laptop:grid-cols-2 laptopL:grid-cols-3">
          <div className="flex items-center justify-center bg-lightPink skew-x-12 max-w-sm">
            <p className="px-6 py-3 text-purple -skew-x-12 desktop:line-clamp-2"><b className="text-xl text-purple tabletportrait:text-2xl laptop:text-3xl">€1</b> die men investeert in fiets-infrastructuur leidt tot <b className="text-xl text-purple tabletportrait:text-2xl laptop:text-3xl">€14 return</b></p>
          </div>
          <div className="flex items-center justify-center bg-lightPink skew-x-12 max-w-sm">
            <p className="px-6 py-3 text-purple -skew-x-12 desktop:line-clamp-2">Fietsers consumeren <b className="text-xl text-purple tabletportrait:text-2xl laptop:text-3xl">€20 meer</b> op uitstap.</p>
          </div>
          <div className="flex items-center justify-center bg-lightPink skew-x-12 max-w-md">
            <p className="px-6 py-3 text-purple -skew-x-12 desktop:line-clamp-2">Waar meer fietsers en wandelaars op straat zijn is er <b className="text-xl text-purple tabletportrait:text-2xl laptop:text-3xl">minder criminaliteit</b></p>
          </div>
          <div className="flex items-center justify-center bg-lightPink skew-x-12 max-w-lg">
              <p className="px-6 py-3 text-purple -skew-x-12 desktop:line-clamp-2">Fietsers en voetgangers zijn tot <b className="text-xl text-purple tabletportrait:text-2xl laptop:text-3xl">30% meer</b> geneigd om <b className="text-xl text-purple tabletportrait:text-2xl laptop:text-3xl">lokaal te kopen</b> dan automobilisten</p>
          </div>
          <div className="flex items-center justify-center bg-lightPink skew-x-12 max-w-md">
              <p className="px-6 py-3 text-purple -skew-x-12 desktop:line-clamp-2">Buurten met meer paden, pleinen en parken hebben <b className="text-xl text-purple tabletportrait:text-2xl laptop:text-3xl">meer wandelaars</b></p>
          </div>
        </div>
        
        {/* <div className="flex justify-between">
          <div className="bg-lightPink skew-x-12 max-w-sm">
            <p className="px-6 py-2 line-clamp-2 text-purple -skew-x-12"><b className="text-2xl text-purple">€1</b> die men investeert in fiets-infrastructuur leidt tot <b className="text-3xl text-purple">€14 return</b></p>
          </div>
          <div className="bg-lightPink skew-x-12 max-w-sm">
            <p className="px-6 py-2 line-clamp-2 text-purple -skew-x-12">Fietsers consumeren <b className="text-2xl text-purple">€20 meer</b> op uitstap.</p>
          </div>
          <div className="bg-lightPink skew-x-12 max-w-md">
            <p className="px-6 py-2 line-clamp-2 text-purple -skew-x-12">Waar meer fietsers en wandelaars op straat zijn is er <b className="text-2xl text-purple">minder criminaliteit</b></p>
          </div>
        </div>
        <div className="flex space-x-20 mt-8">
          <div className="bg-lightPink skew-x-12 max-w-lg">
              <p className="px-6 py-2 line-clamp-2 text-purple -skew-x-12">Fietsers en voetgangers zijn tot <b className="text-2xl text-purple">30% meer</b> geneigd om <b className="text-3xl text-purple">lokaal te kopen</b> dan automobilisten</p>
          </div>
          <div className="bg-lightPink skew-x-12 max-w-md">
              <p className="px-6 py-2 line-clamp-2 text-purple -skew-x-12">Buurten met meer paden, pleinen en parken hebben <b className="text-2xl text-purple">meer wandelaars</b></p>
          </div>
        </div> */}
      </section>

      <section className="mx-16 mb-16">
        <h2 className="text-xl font-bold mb-4 tabletportrait:text-3xl laptop:text-4xl"><span className="underline decoration-green">Hoe</span> kunnen we dit oplossen?</h2>
        <p className="mb-6 text-sm tabletportrait:text-lg laptop:text-xl laptop:w-4/5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas corporis mollitia veniam voluptatum! Molestias odio perspiciatis porro expedita</p>
        <div className="grid grid-cols-1 gap-6 tabletportrait:text-lg laptop:grid-cols-2 laptopL:grid-cols-4">
          <div className="flex items-center justify-center bg-lightGreen skew-x-12 max-w-[275px]">
            <p className="px-6 py-3 text-green -skew-x-12 font-medium desktop:line-clamp-2">Voldoende fietsen- stallingen voorzien</p>
          </div>
          <div className="flex items-center justify-center bg-lightGreen skew-x-12 max-w-[275px]">
            <p className="px-6 py-3 text-green -skew-x-12 font-medium desktop:line-clamp-2">Alles moet in een goede staat zijn & blijven</p>
          </div>
          <div className="flex items-center justify-center bg-lightGreen skew-x-12 max-w-[275px]">
            <p className="px-6 py-3 text-green -skew-x-12 font-medium desktop:line-clamp-2">Inzetten op aan- trekkelijkheid en veiligheid</p>
          </div>
          <div className="flex items-center justify-center bg-lightGreen skew-x-12 max-w-[275px]">
            <p className="px-6 py-3 text-green -skew-x-12 font-medium desktop:line-clamp-2">Zo weinig mogelijk obstakels en drempels</p>
          </div>
        </div>
      </section>

      <section className="px-16 pb-16 bg-neutral" id="Resources">
        <h2 className="text-xl font-bold mb-4 pt-4 tabletportrait:text-3xl laptop:text-4xl">Interessante bronnen</h2>
        <p className="mb-6 text-sm tabletportrait:text-lg laptop:text-xl laptop:w-4/5">We maken je graag wegwijs in wat bronnen en instrumenten om de omgevint te analyseren en te ontwerpen op vlak van wandel- en fietsvriendelijkheid</p>
        <div className="grid grid-cols-1 gap-10 text-sm tabletportrait:grid-cols-2 laptop:text-lg laptopL:grid-cols-4">
          <div className="h-auto bg-white p-6">
            <div className="flex space-x-2">
              <h3 className="underline font-semibold text-[17px] mb-1">Walkabilityscore-tool</h3>
              <ExternalLink />
            </div>
            <p className="text-gray">Deze tool van Vito in opdracht van Gezond Leven brengt de walkabilityscore voor elke hectare in Vlaanderen en Brussel in kaart.</p>
          </div>
          <div className="h-auto bg-white p-6">
            <div className="flex space-x-2">
              <h3 className="underline font-semibold text-[17px] mb-1">The benefits of cycling</h3>
              <ExternalLink />
            </div>
            <p className="text-gray">Dit rapport van de ECF toont aan welke economische voordelen Europa kan halen uit het investeren in een sterk fietsbeleid.</p>
          </div>
          <div className="h-auto bg-white p-6">
            <div className="flex space-x-2">
              <h3 className="underline font-semibold text-[17px] mb-1">Handboek sterk fietsbeleid</h3>
              <ExternalLink />
            </div>
            <p className="text-gray">Dit rapport van Fietsberaad bundelt inzichten en tips voor een lokaal beleid dat méér mensen op de fiets wilt.</p>
          </div>
          <div className="h-auto bg-white p-6">
            <div className="flex space-x-2">
              <h3 className="underline font-semibold text-[17px] mb-1">Quickscan fietsbeleid</h3>
              <ExternalLink />
            </div>
            <p className="text-gray">Deze quickscan van Fietsberaad geeft inzicht in het lokale fietsbeleid aan de hand van een vragenlijst rond 6 thema's.</p>
          </div>
        </div>
      </section>

      <section className="px-16 pb-16" id="Practices">
        <div className="flex items-center justify-between pt-24 mb-2">
          <h2 className="font-bold text-xl tabletportrait:text-3xl laptop:text-4xl">Relevante good practices</h2>
          {/* <button className="bg-mediumPurple border p-2 text-pink border-pink">Alle cases</button> */}
        </div>
        <p className="mb-6 text-sm tabletportrait:text-lg laptop:text-xl">Je wil je door nog meer good practices laten inspireren? Ontdek ze <span className="underline text-pink font-semibold">hier</span></p>
        <div className="grid grid-cols-1 gap-16 mobile:grid-cols-2 text-sm tabletportrait:text-lg laptop:text-xl">
          <div>
            <StaticImage src="../images/relevantcases.png" alt="Relevant cases" className="relative w-auto"/>
            <div className="flex items-center text-xs relative bottom-3 left-3 tabletportrait:text-sm laptop:text-lg">
              <div className="bg-pink -skew-x-12 max-w-max mb-2">
                  <p className="px-2 skew-x-12 font-bold">actief bewegen</p>
              </div>
              <div className="bg-yellow -skew-x-12 max-w-max mb-2">
                  <p className="px-2 skew-x-12 font-bold">20 september 2020</p>
              </div>
            </div>
            <h3 className="font-semibold text-xl pl-3 mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
            <p className="pl-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Luctus tristique ornare duis in bibendum nunc amet, adipiscing. Quis laoreet cursus purus.</p>
          </div>
          <div>
            <StaticImage src="../images/relevantcases.png" alt="Relevant cases" className="relative w-auto"/>
            <div className="flex items-center text-xs relative bottom-3 left-3 tabletportrait:text-sm laptop:text-lg">
              <div className="bg-pink -skew-x-12 max-w-max mb-2">
                  <p className="px-2 skew-x-12 font-bold">actief bewegen</p>
              </div>
              <div className="bg-yellow -skew-x-12 max-w-max mb-2">
                  <p className="px-2 skew-x-12 font-bold">20 september 2020</p>
              </div>
            </div>
            <h3 className="font-semibold text-xl pl-3 mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
            <p className="pl-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Luctus tristique ornare duis in bibendum nunc amet, adipiscing. Quis laoreet cursus purus.</p>
          </div>
        </div>
      </section>

      <section className="bg-mediumPurple flex py-2 px-2 items-center" id="CallToAction">
        <StaticImage src='../images/calltoaction.png' alt="Picture of girls riding a bike" className="h-auto ml-16 border border-r-0 border-mediumPurple hidden laptop:block" />
        <div className="p-8 h-auto text-white">
          {/* <h2 className="font-bold text-4xl pb-4">Wil je graag weten wat we in jouw stad kunnen verbeteren?</h2>
          <p className="pb-3 text-lg">Om een volledige scan van jouw gemeente te laten maken en een gepersonaliseerd stappenplan te ontvangen, schrijf je in op onze wachtlijst!</p>
          <div className="flex justify-between pb-3">
            <input type="text" placeholder="Vul je e-mailadres in..." className="w-4/5 p-2 px-4" />
            <button className="bg-pink text-white font-semibold p-2 px-4">Schrijf je in!</button>
          </div>
          <p className="text-lg pb-4">Wil je graag eerst meer weten over ons onderzoek en de cijfers in detail bekijken? Klik dan hieronder door naar het volledige onderzoek.</p>
          <div className="flex space-x-1">
            <FileText className="text-purple" />
            <p className="text-purple underline font-semibold">Duik in het volledig onderzoek</p>
          </div> */}
          <h2 className="font-bold text-xl pb-4 tabletportrait:text-2xl">Benieuwd naar de beweegvriendelijkheid van jouw stad of gemeente?</h2>
          <h4 className="font-semibold text-lg pb-4 tabletportrait:text-xl">Download hier een rapport</h4>
          <p className="pb-4 text-sm tabletportrait:text-lg">Vul onderstaande gegevens in en ontvang in jouw mailbox het rapport.</p>

          <div className="grid grid-cols-1 gap-4 pb-3 z-0 text-sm desktop:grid-cols-3 tabletportrait:text-lg tabletportrait:grid-cols-3 laptop:grid-cols-1 laptopL:grid-cols-3" id="autoComplete">
            <div className="flex flex-col">
              <label htmlFor="Stad">Postcode of stad:</label>
              <input type="text" id="Stad" className="z-20 relative w-48 px-2 py-1 border-2 border-lightPink active:border-pink outline-none focus-within:border-pink hover:border-pink" placeholder="Postcode/Stad" value={typed} onChange={(ev: any) => {
                setTyped(ev.target.value)
                let list = searchList(ev.target.value)
                setSuggestions(list)
                }} 
                onInput={(e: React.FormEvent<HTMLInputElement>) => setInfo((u: PersonalInfo) => {
                //@ts-ignore
                u.place = e.target.value
                return {...u}
                })}/>
              {error.placeError && (<p className="text-red font-semibold text-sm">{error.placeError}</p>)}
              <ul className="absolute z-20 mt-14">
                {suggestions?.map((val: string, index: number) => {
                  if(index < 7){
                    return(<li key={val} className={`z-10 bg-white px-2 py-1 w-48 border border-lightGray hover:bg-neutral`} onClick={() => changeTyped(val)}>{val}</li>)
                  }
                })}
              </ul>
            </div>
            <div className="flex flex-col">
              <label htmlFor="Voornaam">Voornaam:</label>
              <input type="text" id="Voornaam" className="w-48 px-2 py-1 border-2 border-lightPink active:border-pink outline-none focus-within:border-pink hover:border-pink" placeholder="Voornaam" onInput={(e: React.FormEvent<HTMLInputElement>) => setInfo((u: PersonalInfo) => {
                //@ts-ignore
                u.firstName = e.target.value
                return {...u}
              })}/>
              {error.firstNameError && (<p className="text-red font-semibold text-sm">{error.firstNameError}</p>)}
            </div>
            <div className="flex flex-col">
              <label htmlFor="Naam">Naam:</label>
              <input type="text" id="Naam" className="w-48 px-2 py-1 border-2 border-lightPink active:border-pink outline-none focus-within:border-pink hover:border-pink" placeholder="Naam" onInput={(e: React.FormEvent<HTMLInputElement>) => setInfo((u: PersonalInfo) => {
                //@ts-ignore
                u.lastName = e.target.value
                return {...u}
              })}/>
              {error.lastNameError && (<p className="text-red font-semibold text-sm">{error.lastNameError}</p>)}
            </div>
          </div>
          <div className="flex flex-col text-sm pt-2 tabletportrait:text-lg">
            <label htmlFor="Mail">E-mail:</label>
            <input type="text" id="Mail" className="px-2 py-1 border-2 w-1/2 border-lightPink active:border-pink outline-none focus-within:border-pink hover:border-pink" placeholder="E-mail" onInput={(e: React.FormEvent<HTMLInputElement>) => setInfo((u: PersonalInfo) => {
                //@ts-ignore
                u.mail = e.target.value
                return {...u}
            })}/>
            {error.mailError && (<p className="text-red font-semibold text-sm">{error.mailError}</p>)}
          </div>
          
          <button className="bg-pink text-white px-2 py-1 mt-8 z-0 hover:bg-white hover:text-pink hover:border-2 hover:border-pink" onClick={() => checkInfo()}>Maak rapport</button>
        </div>
      </section>
      
      
      <div className="bg-dark px-8 py-8">
        <h2 className="text-lg text-white font-semibold mb-2 tabletportrait:text-xl">Vital Cities kan nog veel meer voor jou betekenen</h2>
        <div className="text-xs tabletportrait:text-sm">
          <p className="text-white">Je zoekt nog meer inspiratie? Die vind je op onze <a href="https://vitalcities.be/" className="underline text-pink hover:text-lightPurple">website</a>.</p>
          <p className="text-white">Je hebt een onderzoeksvraag? Contacteer Lore Cuypers, projectleider van Vital Cities via volgende middelen.</p>
          <div className="flex space-x-2 py-2 text-white">
            <Mail />
            <a href="mailto:vitalcities@gmail.com" className="underline text-pink hover:text-lightPurple">lore.cuypers@vitalcities.be</a>
          </div>
          <div className="flex space-x-2 text-white">
            <Phone />
            <p>+32 485 98 89 02</p>
          </div>
        </div>
      </div>

      <footer className="grid grid-cols-1 bg-black text-white text-xs px-8 py-8 gap-6 tabletportrait:grid-cols-3">
       <div className="flex gap-1 h-auto justify-center items-center tabletportrait:justify-start">
         <Copyright className="w-4 h-4" />
         <p>2022 Vital Cities, All rights reserved</p>
       </div>
       
        <div className="grid grid-cols-2 gap-4 text-center items-center">
          <a href="https://www.howest.be/nl"><StaticImage src='../images/howest logo_wit.png' alt="Howest logo" className="w-14 tabletportrait:w-20"/></a>
          <a href="https://vitalcities.be/"><StaticImage src='../images/logo_03.png' alt="Vital Cities logo" className="w-14 tabletportrait:w-20"/></a>
        </div>
      
       
       <div className="flex flex-col items-center tabletportrait:items-end">
         <a href="#Location" className="hover:text-pink active:text-lightPurple">Sitatie a.d.h.v. locatie</a>
         <a href="#Problem" className="hover:text-pink active:text-lightPurple">Probleem</a>
         <a href="#Solution" className="hover:text-pink active:text-lightPurple">Oplossing</a>
         <a href="#Resources" className="hover:text-pink active:text-lightPurple">Bronnen</a>
         <a href="#Practices" className="hover:text-pink active:text-lightPurple">Practices</a>
       </div>
      </footer>
    </main>
  )
}

export default AmbitionPage
