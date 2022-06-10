import React, { useEffect, useState } from 'react'
import '../assets/tailwind.css'
import TopNavigation from '../components/topnavigation'
import Practice from '../interfaces/data'
import { ChevronLeft } from 'lucide-react'
import { graphql, navigate, useStaticQuery } from 'gatsby'
import ThemaCard from '../components/themacard'
import PracticeParagraph from '../components/practiseparagraph'
import { findIndexesSubstring } from '../utils/practiceFunctions'
import Contactsection from '../components/contactsection'
import Footer from '../components/footer'
import ThemeContext from '../context/themecontext'
import FadeInSection from '../components/scrollytelling'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

// NOTE TO SELF: FADE-IN ON A P SECTION SPLIT BETWEEN 2 COLUMNS IS NOT A GOOD IDEA

export default ({ location }: { location: any }) => {
  const [practice, setPractice] = useState<Practice>()
  const [ambities, setAmbities] = useState<string[]>()
  const [overigeThemas, setOverigeThemas] = useState<string[]>()
  const [hasMounted, setHasMounted] = useState(false)
  const [img, setImg] = useState<any>()

  const { allImageSharp } = useStaticQuery(
    graphql`
      query {
        allImageSharp {
          nodes {
            gatsbyImageData
          }
        }
      }
    `,
  )

  useEffect(() => {
    setHasMounted(true)
    setPractice(location.state.practice)
  }, [])

  useEffect(() => {
    if (practice) {
      for (let i of allImageSharp.nodes) {
        if (i.gatsbyImageData.images.fallback.src.includes(practice.image)) {
          setImg(getImage(i))
        }
      }
    }
  }, [practice])

  useEffect(() => {
    if (practice && practice.themas && practice.themas.length >= 1) {
      let arrayA: string[] = []
      let arrayT: string[] = []

      practice.themas.forEach((t) => {
        if (
          ['transversaal', 'technologie/data', 'participatie'].includes(
            t.toLowerCase(),
          )
        ) {
          arrayT.push(t)
        } else {
          arrayA.push(t)
        }
      })

      setAmbities(arrayA)
      setOverigeThemas(arrayT)
    }
  }, [practice])

  if (!hasMounted) {
    return null
  }

  return (
    <ThemeContext.Consumer>
      {(context) => (
        <div
          className={`font-poppins selection:text-white ${
            context.dark
              ? 'bg-dark selection:bg-pinkDesat'
              : 'selection:bg-pink'
          }`}
        >
          <TopNavigation section="#Contact" />
          <main className="mx-auto my-10 max-w-[104rem] px-3  gridbreak:px-10 columnbreak:my-20">
            <header>
              <button
                onClick={() => navigate('../overviewpagepractices')}
                className="mb-11 flex flex-row items-center text-center"
              >
                <ChevronLeft
                  className={`mr-6 opacity-70 ${
                    context.dark ? 'text-white' : 'text-dark'
                  }`}
                />
                <p
                  className={` text-lg font-semibold columnbreak:text-2xl ${
                    context.dark
                      ? 'text-white text-opacity-90 hover:text-lightPurpleDesat'
                      : 'text-purple hover:text-lightPurple'
                  }`}
                >
                  naar overzicht van alle praktijkvoorbeelden
                </p>
              </button>
            </header>
            <section className="flex w-full flex-col-reverse columnbreak:h-[520px] columnbreak:flex-row columnbreak:items-center">
              <div
                className={`h-max w-full  p-7 pb-5  columnbreak:w-1/2 columnbreak:p-14 columnbreak:pb-10 ${
                  context.dark
                    ? 'bg-white bg-opacity-[0.08]'
                    : 'bg-purple bg-opacity-10'
                }`}
              >
                <h1
                  className={`mb-5 font-raleway text-2xl font-bold columnbreak:text-5xl ${
                    context.dark ? 'text-white' : 'text-dark '
                  }`}
                >
                  {practice?.titel}
                </h1>
                <h3
                  className={`mb-5 font-raleway text-lg font-semibold  ${
                    context.dark ? 'text-white text-opacity-75' : 'text-purple'
                  }`}
                >
                  {practice?.datum}
                </h3>
                <div>
                  {ambities && ambities.length >= 1 ? (
                    <div className="flex flex-row flex-wrap">
                      {ambities.map((e, i) => (
                        <ThemaCard thema={e} key={i} />
                      ))}
                    </div>
                  ) : null}
                  {overigeThemas && overigeThemas.length >= 1 ? (
                    <div className="flex flex-row flex-wrap">
                      {overigeThemas.map((e, i) => (
                        <ThemaCard thema={e} key={i} />
                      ))}
                    </div>
                  ) : null}
                </div>
              </div>
              <div className="h-[calc(100vw-40px)] max-h-[520px] w-full columnbreak:w-1/2">
                <GatsbyImage
                  image={img}
                  alt={practice ? practice.titel : 'no description found'}
                  class="h-full w-full"
                />
              </div>
            </section>
            <section>
              {practice &&
              practice.paragrafen &&
              practice.paragrafen.length >= 1 ? (
                <div className="gap-x-12 px-2 py-14 columnbreak:columns-2 columnbreak:px-6">
                  {practice.paragrafen.map((e, i) => (
                    <PracticeParagraph paragraaf={e} key={i} />
                  ))}
                  {practice.extra && practice.extra.length >= 1 ? (
                    <div>
                      <h2
                        className={`mb-6 font-raleway text-2xl font-bold columnbreak:text-3xl ${
                          context.dark ? 'text-white' : 'text-purple'
                        }`}
                      >
                        Meer weten
                      </h2>
                      <ul>
                        {practice.extra.map((e, i) => (
                          <li
                            className={`mb-6 text-base font-semibold columnbreak:text-lg ${
                              context.dark
                                ? 'text-lightPurpleDesat text-opacity-80 hover:text-lightPurpleDesat'
                                : 'text-purple hover:text-lightPurpleDesat '
                            }`}
                            key={i}
                          >
                            {e.url ? (
                              <a className=" underline" href={e.url}>
                                {e.naam ? e.naam : e.url}
                              </a>
                            ) : (
                              <a>{e.naam}</a>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                </div>
              ) : null}
            </section>
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
