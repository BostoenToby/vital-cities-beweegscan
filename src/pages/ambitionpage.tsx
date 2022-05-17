import { StaticImage } from "gatsby-plugin-image"
import { ArrowDown } from "lucide-react"
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
    </main>
  )
}

export default AmbitionPage