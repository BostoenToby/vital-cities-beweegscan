import { StaticImage } from "gatsby-plugin-image"
import { ArrowDown } from "lucide-react"
import * as React from "react"

function AmbitionPage () {

    return (
        <main>
          <header className="absolute top-0 left-0 w-full">
              <section className="bg-purple w-1/2 z-10 absolute">
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
        </main>
      )
}

export default AmbitionPage