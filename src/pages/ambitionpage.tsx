import { graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { ArrowDown, ExternalLink, FileText } from "lucide-react"
import * as React from "react"

function AmbitionPage () {
  return (
    <main>
      <header className="relative top-0 left-0 w-full h-auto mb-8">
          <section className="bg-purple w-1/2 z-10 relative">
            <div className="mb-40 flex">
              <div className="bg-yellow h-24 w-32 z-10 absolute top-0 left-0"></div>
              <StaticImage src="../images/test.png" alt="Logo of Vital Cities" className="w-32 h-auto z-20 absolute top-4 left-20"/>
            </div>
  
            <div className="ml-16 pb-16">
              <div className="bg-pink -skew-x-12 max-w-max mb-4">
                <p className="text-white p-2 skew-x-12 font-bold">actief bewegen</p>
              </div>
              <h1 className="text-white text-7xl max-w-2xl font-bold mb-8">Aantrekkelijke & veilige wandel- & fietsroutes</h1>
              <p className="text-white text-[27px] max-w-2xl mb-12">Aantrekkelijke en veilige wandel- en fietsroutes stimuleren een actieve levensstijl en faciliteren mensen om lopend of fietsend naar voorzieningen of het werk of school voorzieningen te gaan</p>
              <p className="text-lightPurple font-semibold mb-2">scroll</p>
              <ArrowDown className="text-lightPurple"/>
            </div>
          </section>
          <StaticImage src="../images/HeaderPictureActiveMovement.png" alt="Logo of Vital Cities" className="w-auto h-auto z-0 absolute right-20 top-10"/>
          <StaticImage src="../images/Facebook.png" alt="Facebook" className="absolute right-8 top-[380px]" />
          <StaticImage src="../images/Twitter.png" alt="Twitter" className="absolute right-8 top-[410px]" />
          <StaticImage src="../images/Instagram.png" alt="Instagram" className="absolute right-8 top-[440px]" />
      </header>

      <section className="mx-16 mb-16">
        <h2 className="text-3xl font-bold mb-4"><span className="underline decoration-lightPurple">Waarom</span> moeten we dit oplossen?</h2>
        <p className="w-3/5 mb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas corporis mollitia veniam voluptatum! Molestias odio perspiciatis porro expedita</p>
        <div className="flex justify-between">
          <div className="bg-lightPink skew-x-12 max-w-sm">
            <p className="px-6 py-2 line-clamp-2 text-purple -skew-x-12"><b className="text-3xl text-purple">€1</b> die men investeert in fiets-infrastructuur leidt tot <b className="text-3xl text-purple">€14 return</b></p>
          </div>
          <div className="bg-lightPink skew-x-12 max-w-sm">
            <p className="px-6 py-2 line-clamp-2 text-purple -skew-x-12">Fietsers consumeren <b className="text-3xl text-purple">€20 meer</b> op uitstap.</p>
          </div>
          <div className="bg-lightPink skew-x-12 max-w-sm">
            <p className="px-6 py-2 line-clamp-2 text-purple -skew-x-12">Waar meer fietsers en wandelaars op straat zijn is er <b className="text-3xl text-purple">minder criminaliteit</b></p>
          </div>
        </div>
        <div className="flex space-x-20 mt-8">
          <div className="bg-lightPink skew-x-12 max-w-lg">
              <p className="px-6 py-2 line-clamp-2 text-purple -skew-x-12">Fietsers en voetgangers zijn tot <b className="text-3xl text-purple">30% meer</b> geneigd om <b className="text-3xl text-purple">lokaal te kopen</b> dan automobilisten</p>
          </div>
          <div className="bg-lightPink skew-x-12 max-w-sm">
              <p className="px-6 py-2 line-clamp-2 text-purple -skew-x-12">Buurten met meer paden, pleinen en parken hebben <b className="text-3xl text-purple">meer wandelaars</b></p>
          </div>
        </div>
      </section>

      <section className="mx-16 mb-16">
        <h2 className="text-3xl font-bold mb-4"><span className="underline decoration-green">Hoe</span> kunnen we dit oplossen?</h2>
        <p className="w-3/5 mb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas corporis mollitia veniam voluptatum! Molestias odio perspiciatis porro expedita</p>
        <div className="flex justify-between">
          <div className="bg-lightGreen skew-x-12 max-w-[250px]">
            <p className="px-6 py-2 line-clamp-2 text-green -skew-x-12 font-semibold">Voldoende fietsen- stallingen voorzien</p>
          </div>
          <div className="bg-lightGreen skew-x-12 max-w-[250px]">
            <p className="px-6 py-2 line-clamp-2 text-green -skew-x-12 font-semibold">Alles moet in een goede staat zijn & blijven</p>
          </div>
          <div className="bg-lightGreen skew-x-12 max-w-[250px]">
            <p className="px-6 py-2 line-clamp-2 text-green -skew-x-12 font-semibold">Inzetten op aan- trekkelijkheid en veiligheid</p>
          </div>
          <div className="bg-lightGreen skew-x-12 max-w-[250px]">
            <p className="px-6 py-2 line-clamp-2 text-green -skew-x-12 font-semibold">Zo weinig mogelijk obstakels en drempels</p>
          </div>
        </div>
      </section>

      <section className="flex pb-8 w-full items-center">
        <StaticImage src='../images/CallToAction.png' alt="Picture of girls riding a bike" className="w-3/4 h-auto ml-16" />
        <div className="p-8 bg-lightxPink h-3/4 mr-16">
          <h2 className="font-bold text-4xl pb-4">Wil je graag weten wat we in jouw stad kunnen verbeteren?</h2>
          <p className="pb-3 text-lg">Om een volledige scan van jouw gemeente te laten maken en een gepersonaliseerd stappenplan te ontvangen, schrijf je in op onze wachtlijst!</p>
          <div className="flex justify-between pb-3">
            <input type="text" placeholder="Vul je e-mailadres in..." className="w-4/5 p-2 px-4" />
            <button className="bg-pink text-white font-semibold p-2 px-4">Schrijf je in!</button>
          </div>
          <p className="text-lg pb-4">Wil je graag eerst meer weten over ons onderzoek en de cijfers in detail bekijken? Klik dan hieronder door naar het volledige onderzoek.</p>
          <div className="flex space-x-1">
            <FileText className="text-purple" />
            <p className="text-purple underline font-semibold">Duik in het volledig onderzoek</p>
          </div>
        </div>
      </section>

      <section className="px-16 pb-16 bg-neutral">
        <h2 className="text-3xl font-bold mb-4 pt-4">Interessante bronnen</h2>
        <p className="w-3/5 mb-6 ">We maken je graag wegwijs in wat bronnen en instrumenten om de omgevint te analyseren en te ontwerpen op vlak van wandel- en fietsvriendelijkheid</p>
        <div className="flex justify-between">
          <div className="h-40 w-1/5 bg-white p-4">
            <div className="flex space-x-2">
              <h3 className="underline font-semibold text-[17px] mb-1">Walkabilityscore-tool</h3>
              <ExternalLink />
            </div>
            <p className="text-gray">Deze tool van Vito in opdracht van Gezond Leven brengt de walkabilityscore voor elke hectare in Vlaanderen en Brussel in kaart.</p>
          </div>
          <div className="h-40 w-1/5 bg-white p-4">
            <div className="flex space-x-2">
              <h3 className="underline font-semibold text-[17px] mb-1">The benefits of cycling</h3>
              <ExternalLink />
            </div>
            <p className="text-gray">Dit rapport van de ECF toont aan welke economische voordelen Europa kan halen uit het investeren in een sterk fietsbeleid.</p>
          </div>
          <div className="h-40 w-1/5 bg-white p-4">
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

      <section className="bg-mediumPurple px-16 pb-16">
        <div className="flex items-center justify-between pt-24 mb-2">
          <h2 className="font-bold text-white text-4xl">Relevante good practices</h2>
          {/* <button className="bg-mediumPurple border p-2 text-pink border-pink">Alle cases</button> */}
        </div>
        <p className="text-white mb-6">Je wil je door nog meer good practices laten inspireren? Ontdek ze <span className="underline text-pink font-semibold">hier</span></p>
        <div className="flex justify-between space-x-10">
          <div>
            <StaticImage src="../images/RelevantCases.png" alt="Relevant cases" className="relative w-full"/>
            <div className="flex items-center relative bottom-3 left-3">
              <div className="bg-pink -skew-x-12 max-w-max mb-2">
                  <p className="text-white px-2 skew-x-12 font-bold">actief bewegen</p>
              </div>
              <div className="bg-yellow -skew-x-12 max-w-max mb-2">
                  <p className="text-white px-2 skew-x-12 font-bold">20 september 2020</p>
              </div>
            </div>
            <h3 className="font-semibold text-white text-3xl pl-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
            <p className="text-white pl-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Luctus tristique ornare duis in bibendum nunc amet, adipiscing. Quis laoreet cursus purus.</p>
          </div>
          <div>
            <StaticImage src="../images/RelevantCases.png" alt="Relevant cases" className="relative w-full"/>
            <div className="flex items-center relative bottom-3 left-3">
              <div className="bg-pink -skew-x-12 max-w-max mb-2">
                  <p className="text-white px-2 skew-x-12 font-bold">actief bewegen</p>
              </div>
              <div className="bg-yellow -skew-x-12 max-w-max mb-2">
                  <p className="text-white px-2 skew-x-12 font-bold">20 september 2020</p>
              </div>
            </div>
            <h3 className="font-semibold text-white text-3xl pl-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
            <p className="text-white pl-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Luctus tristique ornare duis in bibendum nunc amet, adipiscing. Quis laoreet cursus purus.</p>
          </div>
        </div>
      </section>
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