import { graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import scrollTo from "gatsby-plugin-smoothscroll"
import { ArrowDown, ExternalLink, FileText, Mail, Phone } from "lucide-react"
import * as React from "react"
import { useEffect, useState } from "react"
import { allResults, searchList } from "../utils/autoComplete"
import DonutChart from "../components/donutChart"

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
    <main className="font-poppins">
      <header className="relative top-0 left-0 w-full h-screen mb-8 flex">
          <section className="bg-purple w-full z-10 relative">
            <div className="mb-32 flex">
              <div className="bg-yellow h-24 w-32 absolute z-10 top-0 left-0"></div>
              <a href="https://vitalcities.be/"><StaticImage src="../images/test.png" alt="Logo of Vital Cities" className="w-32 h-auto z-20 relative top-4 left-20"/></a>
            </div>

            <div className="ml-16 pb-10">
              <div className="bg-pink -skew-x-12 max-w-max mb-4">
                <p className="text-white px-2 skew-x-12 font-bold">actief bewegen</p>
              </div>
              <h1 className="text-white text-6xl max-w-2xl font-bold mb-8 mobile:text-2xl tabletportrait:text-5xl tabletlandscape:text-4xl">Aantrekkelijke & veilige wandel- & fietsroutes</h1>
              <p className="text-white text-2xl max-w-2xl mb-12 mobile:text-sm tabletportrait:text-lg tabletlandscape:text-xl">Aantrekkelijke en veilige wandel- en fietsroutes stimuleren een actieve levensstijl en faciliteren mensen om lopend of fietsend naar voorzieningen of het werk of school voorzieningen te gaan</p>
              <p className="text-lightPurple font-semibold mb-2">scroll</p>
              <ArrowDown className="text-lightPurple"/>
            </div>
          </section>
          <div className="h-full mobile:hidden"><StaticImage src="../images/HeaderPictureActiveMovement.png" alt="Logo of Vital Cities" className="z-0 right-20 top-20 h-4/5 relative"/></div>
          <div className="absolute top-6 right-20 space-x-5 mobile:mt-24">
            <button className="bg-pink text-white font-semibold px-2 py-1 drop-shadow-lg z-20 relative">
              <a href="https://vitalcities.be/">Ambities</a>
              {/* Keer terug naar overzicht met ambities/landingspage */}
            </button>
            <button className="bg-pink text-white font-semibold px-2 py-1 drop-shadow-lg z-20 relative" onClick={() => scrollTo('#Practises')}>Good practices</button>
          </div>
          <StaticImage src="../images/Facebook.png" alt="Facebook" className="absolute right-8 top-[380px]" />
          <StaticImage src="../images/Twitter.png" alt="Twitter" className="absolute right-8 top-[410px]" />
          <StaticImage src="../images/Instagram.png" alt="Instagram" className="absolute right-8 top-[440px]" />
      </header>

      <section className="grid grid-cols-2 mx-20 mt-32 gap-28 mobile:grid-cols-1 tabletportrait:grid-cols-1 tabletlandscape:grid-cols-1">
        <div className="flex flex-col max-w-xl pr-10">
            <h2 className="text-3xl font-black">
                Wat is de huidige situatie in
            </h2>
            <select className="text-3xl font-black text-purple -ml-1 underline underline-offset-4">
                <option>het Vlaams gewest</option>
            </select>
            <label className="mt-5 font-medium">
                In het Vlaams gewest is <span className="font-semibold">ongeveer de helft of meer van de
                inwoners</span> <span className="text-pink font-semibold">niet tevreden</span> over de staat, veiligheid en
                aantrekkelijkheid van straten, pleinen, wandel- en fietspaden
                (dus een samenvatting van alle cijfers). 
            </label>
        </div>
        <div className="self-end">
            <label className="opacity-50 text-sm font-black font-mono pl-4">
                HOEVEEL % VAN DE INWONERS IS NIET TEVREDEN OVER ... 
            </label>
            <table>
                <tr>
                  <td className="p-2">
                      <div className="flex items-center">
                      <div className="w-12 h-12 mb-2">
                          <DonutChart percentage={44} />
                      </div>
                      <div className="flex flex-col">
                          <label className="text-sm font-medium">Staat straten & pleinen</label>
                          <label className="text-pink font-bold">44%</label>
                      </div>
                      </div>
                  </td>
                  <td className="p-2">
                      <div className="flex items-center">
                      <div className="w-12 h-12 mb-2">
                          <DonutChart percentage={54} />
                      </div>
                      <div className="flex flex-col">
                          <label className="text-sm font-medium">Staat voetpaden</label>
                          <label className="text-pink font-bold">54%</label>
                      </div>
                      </div>
                  </td>
                  <td className="p-2">
                      <div className="flex items-center">
                      <div className="w-12 h-12 mb-2">
                          <DonutChart percentage={59} />
                      </div>
                      <div className="flex flex-col">
                          <label className="text-sm font-medium">Staat fietspaden</label>
                          <label className="text-pink font-bold">59%</label>
                      </div>
                      </div>
                  </td>
                </tr>

                <tr>
                  <td className="p-2">
                      <div className="flex items-center">
                      <div className="w-12 h-12 mb-2">
                          <DonutChart percentage={55} />
                      </div>
                      <div className="flex flex-col">
                          <label className="text-sm font-medium">Genoeg fietspaden</label>
                          <label className="text-pink font-bold">55%</label>
                      </div>
                      </div>
                  </td>
                  <td className="p-2">
                      <div className="flex items-center">
                      <div className="w-12 h-12 mb-2">
                          <DonutChart percentage={60} />
                      </div>
                      <div className="flex flex-col">
                          <label className="text-sm font-medium">Fietsinfrastructuur</label>
                          <label className="text-pink font-bold">60%</label>
                      </div>
                      </div>
                  </td>
                  <td className="p-2">
                      <div className="flex items-center">
                      <div className="w-12 h-12 mb-2">
                          <DonutChart percentage={57}/>
                      </div>
                      <div className="flex flex-col">
                          <label className="text-sm font-medium">Veilig fietsen</label>
                          <label className="text-pink font-bold">57%</label>
                      </div>
                      </div>
                  </td>
                </tr>
            </table>
        </div>
    </section>
    <section className="flex flex-col items-center font-poppins mt-32 mx-20 mb-32">
        <h2 className="text-3xl font-bold mb-5">Wat is het probleem?</h2>
        <p className="mb-5">
            Als routes geen goede verbinding maken met voorzieningen en werk of school, als ze onveilig zijn of door een weinig aantrekkelijke
            stadsomgeving gaan, zijn mensen niet geneigd om ze te gebruiken. Als je fiets of wandelt, voel je je namelijk kwetsbaarder dan in je auto. 
        </p>
        <p className="font-bold">
            Bij een gebrek aan veilige en/of aantrekkelijke routes zullen mensen dan eerder kiezen voor de auto.
        </p>
    </section>

      <section className="mx-16 mb-16">
        <h2 className="text-3xl font-bold mb-4"><span className="underline decoration-lightPurple">Waarom</span> moeten we dit oplossen?</h2>
        <p className="w-3/5 mb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas corporis mollitia veniam voluptatum! Molestias odio perspiciatis porro expedita</p>
        <div className="flex justify-between">
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
        </div>
      </section>

      <section className="mx-16 mb-16">
        <h2 className="text-3xl font-bold mb-4"><span className="underline decoration-green">Hoe</span> kunnen we dit oplossen?</h2>
        <p className="w-3/5 mb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas corporis mollitia veniam voluptatum! Molestias odio perspiciatis porro expedita</p>
        <div className="flex justify-between">
          <div className="bg-lightGreen skew-x-12 max-w-[275px]">
            <p className="px-6 py-2 line-clamp-2 text-green -skew-x-12 font-semibold">Voldoende fietsen- stallingen voorzien</p>
          </div>
          <div className="bg-lightGreen skew-x-12 max-w-[275px]">
            <p className="px-6 py-2 line-clamp-2 text-green -skew-x-12 font-semibold">Alles moet in een goede staat zijn & blijven</p>
          </div>
          <div className="bg-lightGreen skew-x-12 max-w-[275px]">
            <p className="px-6 py-2 line-clamp-2 text-green -skew-x-12 font-semibold">Inzetten op aan- trekkelijkheid en veiligheid</p>
          </div>
          <div className="bg-lightGreen skew-x-12 max-w-[275px]">
            <p className="px-6 py-2 line-clamp-2 text-green -skew-x-12 font-semibold">Zo weinig mogelijk obstakels en drempels</p>
          </div>
        </div>
      </section>

      <section className="px-16 pb-16 bg-neutral">
        <h2 className="text-3xl font-bold mb-4 pt-4">Interessante bronnen</h2>
        <p className="w-3/5 mb-6 ">We maken je graag wegwijs in wat bronnen en instrumenten om de omgevint te analyseren en te ontwerpen op vlak van wandel- en fietsvriendelijkheid</p>
        <div className="flex justify-between">
          <div className="h-auto w-1/5 bg-white p-4">
            <div className="flex space-x-2">
              <h3 className="underline font-semibold text-[17px] mb-1">Walkabilityscore-tool</h3>
              <ExternalLink />
            </div>
            <p className="text-gray">Deze tool van Vito in opdracht van Gezond Leven brengt de walkabilityscore voor elke hectare in Vlaanderen en Brussel in kaart.</p>
          </div>
          <div className="h-auto w-1/5 bg-white p-4">
            <div className="flex space-x-2">
              <h3 className="underline font-semibold text-[17px] mb-1">The benefits of cycling</h3>
              <ExternalLink />
            </div>
            <p className="text-gray">Dit rapport van de ECF toont aan welke economische voordelen Europa kan halen uit het investeren in een sterk fietsbeleid.</p>
          </div>
          <div className="h-auto w-1/5 bg-white p-4">
            <div className="flex space-x-2">
              <h3 className="underline font-semibold text-[17px] mb-1">Handboek sterk fietsbeleid</h3>
              <ExternalLink />
            </div>
            <p className="text-gray">Dit rapport van Fietsberaad bundelt inzichten en tips voor een lokaal beleid dat méér mensen op de fiets wilt.</p>
          </div>
          <div className="h-auto w-1/5 bg-white p-4">
            <div className="flex space-x-2">
              <h3 className="underline font-semibold text-[17px] mb-1">Quickscan fietsbeleid</h3>
              <ExternalLink />
            </div>
            <p className="text-gray">Deze quickscan van Fietsberaad geeft inzicht in het lokale fietsbeleid aan de hand van een vragenlijst rond 6 thema's.</p>
          </div>
        </div>
      </section>

      <section className="px-16 pb-16" id="Practises">
        <div className="flex items-center justify-between pt-24 mb-2">
          <h2 className="font-bold text-4xl">Relevante good practices</h2>
          {/* <button className="bg-mediumPurple border p-2 text-pink border-pink">Alle cases</button> */}
        </div>
        <p className="mb-6">Je wil je door nog meer good practices laten inspireren? Ontdek ze <span className="underline text-pink font-semibold">hier</span></p>
        <div className="flex justify-between space-x-10">
          <div>
            <StaticImage src="../images/RelevantCases.png" alt="Relevant cases" className="relative w-full"/>
            <div className="flex items-center relative bottom-3 left-3">
              <div className="bg-pink -skew-x-12 max-w-max mb-2">
                  <p className="px-2 skew-x-12 font-bold">actief bewegen</p>
              </div>
              <div className="bg-yellow -skew-x-12 max-w-max mb-2">
                  <p className="px-2 skew-x-12 font-bold">20 september 2020</p>
              </div>
            </div>
            <h3 className="font-semibold text-3xl pl-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
            <p className="pl-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Luctus tristique ornare duis in bibendum nunc amet, adipiscing. Quis laoreet cursus purus.</p>
          </div>
          <div>
            <StaticImage src="../images/RelevantCases.png" alt="Relevant cases" className="relative w-full"/>
            <div className="flex items-center relative bottom-3 left-3">
              <div className="bg-pink -skew-x-12 max-w-max mb-2">
                  <p className="px-2 skew-x-12 font-bold">actief bewegen</p>
              </div>
              <div className="bg-yellow -skew-x-12 max-w-max mb-2">
                  <p className="px-2 skew-x-12 font-bold">20 september 2020</p>
              </div>
            </div>
            <h3 className="font-semibold text-3xl pl-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
            <p className="pl-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Luctus tristique ornare duis in bibendum nunc amet, adipiscing. Quis laoreet cursus purus.</p>
          </div>
        </div>
      </section>

      <section className="bg-mediumPurple flex py-6 w-full items-center" id="CallToAction">
        <StaticImage src='../images/CallToAction.png' alt="Picture of girls riding a bike" className="w-3/4 h-full ml-16 border border-r-0 border-mediumPurple" />
        <div className="p-8 bg-lightxPink h-full mr-16">
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
          <h2 className="font-bold text-4xl pb-4">Benieuwd naar de beweegvriendelijkheid van jouw stad of gemeente?</h2>
          <h4 className="font-semibold text-2xl pb-4">Download hier een rapport</h4>
          <p className="pb-2 text-lg">Vul onderstaande gegevens in en ontvang in jouw mailbox het rapport.</p>

          <div className="pb-3 flex z-0 justify-between" id="autoComplete">
            <div className="flex flex-col">
              <label htmlFor="Stad">Postcode of stad:</label>
              <input type="text" id="Stad" className="z-20 relative w-48 px-2 py-1 border border-lightGray active:border-gray outline-none focus-within:border-gray" placeholder="Postcode/Stad" value={typed} onChange={(ev: any) => {
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
              <input type="text" id="Voornaam" className="w-48 px-2 py-1 border border-lightGray active:border-gray outline-none focus-within:border-gray" placeholder="Voornaam" onInput={(e: React.FormEvent<HTMLInputElement>) => setInfo((u: PersonalInfo) => {
                //@ts-ignore
                u.firstName = e.target.value
                return {...u}
            })}/>
              {error.firstNameError && (<p className="text-red font-semibold text-sm">{error.firstNameError}</p>)}
            </div>
            <div className="flex flex-col">
              <label htmlFor="Naam">Naam:</label>
              <input type="text" id="Naam" className="w-48 px-2 py-1 border border-lightGray active:border-gray outline-none focus-within:border-gray" placeholder="Naam" onInput={(e: React.FormEvent<HTMLInputElement>) => setInfo((u: PersonalInfo) => {
                //@ts-ignore
                u.lastName = e.target.value
                return {...u}
            })}/>
              {error.lastNameError && (<p className="text-red font-semibold text-sm">{error.lastNameError}</p>)}
            </div>
          </div>
          <div className="flex flex-col">
            <label htmlFor="Mail">E-mail:</label>
            <input type="text" id="Mail" className="px-2 py-1 border border-lightGray active:border-gray outline-none focus-within:border-gray w-1/2" placeholder="E-mail" onInput={(e: React.FormEvent<HTMLInputElement>) => setInfo((u: PersonalInfo) => {
                //@ts-ignore
                u.mail = e.target.value
                return {...u}
            })}/>
            {error.mailError && (<p className="text-red font-semibold text-sm">{error.mailError}</p>)}
          </div>
          
          <button className="bg-pink text-white px-2 py-1 mt-4 z-0" onClick={() => checkInfo()}>Maak rapport</button>
        </div>
      </section>
      <footer className="bg-mediumPurple">
        <div className="bg-lightPink mx-16 px-8 py-8">
          <h2 className="text-2xl font-semibold">Vital Cities kan nog veel meer voor jou betekenen</h2>
          <p>Je zoekt nog meer inspiratie? Die vind je op onze <a href="https://vitalcities.be/" className="underline text-pink">website</a></p>
          <p>Je hebt een onderzoeksvraag? Contacteer Lore Cuypers, projectleider van Vital Cities via volgende middelen</p>
          <div className="flex space-x-1 py-2">
            <Mail />
            <a href="mailto:vitalcities@gmail.com" className="underline text-pink">lore.cuypers@vitalcities.be</a>
          </div>
          <div className="flex space-x-1">
            <Phone />
            <p>+32 485 98 89 02</p>
          </div>
        </div>
      </footer>
    </main>
  )
}

export const query = graphql`
  query {
    allBeweegscanXlsxCuS10 {
      edges {
        node {
          Gemeente
        }
      }
    }
  }
`

export default AmbitionPage