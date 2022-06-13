import { ArrowDown } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import '../assets/tailwind.css'
import Ambitionblock from '../components/ambitionblock'
import Contactsection from '../components/contactsection'
import Footer from '../components/footer'
import Topnavigation from '../components/topnavigation'
import { graphql, useStaticQuery } from 'gatsby'
import ThemeContext from '../context/themecontext'
import FadeInSection from '../components/scrollytelling'
import { Helmet } from 'react-helmet'
import {
  ambition,
  header,
  sectionLandingspage,
} from '../interfaces/cmsInterfaces'

const IndexPage = () => {
  const [hasMounted, setHasMounted] = useState(false)
  const [texts, setTexts] = useState<sectionLandingspage[]>()
  const [header, setHeader] = useState<header>()
  const [ambitions, setAmbitions] = useState<ambition[]>()

  useEffect(() => {
    setHasMounted(true)
    let textList: sectionLandingspage[] = []
    let ambitionList: ambition[] = []
    for (let item of cms.nodes) {
      if (
        item.parent.internal.description.includes('header') &&
        item.frontmatter.ambition == 'Landingspagina'
      ) {
        setHeader({
          title: item.frontmatter.title,
          subtitle: item.frontmatter.subtitle,
          image: item.frontmatter.image,
        })
      } else if (item.parent.internal.description.includes('landingspage')) {
        textList.push({
          title: item.frontmatter.title,
          text: item.frontmatter.text,
        })
      } else if (item.parent.internal.description.includes('ambitienamen')) {
        ambitionList.push({
          ambition: item.frontmatter.ambition,
          name: item.frontmatter.name,
        })
      }
    }
    setTexts(textList)
    setAmbitions(ambitionList)
  }, [])

  const { cms } = useStaticQuery(
    graphql`
      query {
        cms: allMarkdownRemark {
          nodes {
            frontmatter {
              ambition
              ambitions
              date
              extra
              title
              link
              text
              subtitle
              image
              tag
              name
              boldpart
              thema
              resources
            }
            parent {
              internal {
                description
              }
            }
          }
        }
      }
    `,
  )

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
          <Helmet>
            <meta charSet="utf-8" />
            <title>Vital Cities beweegscan</title>
            <meta
              name="description"
              content="Meet de beweegvriendelijkheid van jouw stad of gemeente en vind de inspiratie om die nog te verbeteren."
            />
            <link rel="icon" type="image/x-icon" href="../favicon.ico" />
          </Helmet>

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
                ? 'indexbreak:bg-white indexbreak:bg-opacity-[0.08]'
                : 'indexbreak:bg-purple'
            }`}
          >
            <section
              className={`h-full w-full p-7 pb-5 columnbreak:w-1/2 columnbreak:p-14 columnbreak:pb-10 ${
                context.dark
                  ? 'bg-white bg-opacity-[0.08] indexbreak:bg-opacity-0'
                  : 'bg-purple'
              }`}
            >
              <h1 className="mb-8 max-w-2xl font-raleway text-3xl font-xxbold leading-tight text-white tabletportrait:text-4xl laptop:text-6xl laptopL:text-7xl">
                {header?.title}
              </h1>
              <p className="mb-12 max-w-2xl text-xl font-xlight leading-6 text-white opacity-75 laptop:text-2xl">
                {header?.subtitle}
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
              {texts &&
                texts.map((item: sectionLandingspage, val: number) => {
                  if (item.title == 'Over de beweegscan') {
                    return (
                      <>
                        <h2
                          className={`mb-4 font-raleway text-xl font-bold tabletportrait:text-3xl laptop:text-4xl ${
                            context.dark ? 'opacity-90' : ''
                          }`}
                        >
                          {item.title}
                        </h2>
                        <p
                          className={`mb-8 whitespace-pre-line ${
                            context.dark ? 'opacity-75' : ''
                          }`}
                        >
                          {item.text}
                        </p>
                      </>
                    )
                  } else {
                    return <></>
                  }
                })}
              <FadeInSection>
                <div className="mb-8 grid grid-cols-1 flex-col gap-8 tabletportrait:grid-cols-2 laptop:grid-cols-3 4K:grid-cols-4">
                  {ambitions &&
                    ambitions.map((item: ambition, val: number) => {
                      let short: string = ''
                      if (item.ambition.includes('bewegen')) {
                        short = 'actief bewegen'
                      } else if (item.ambition.includes('stadskern')) {
                        short = 'verbonden stadskern'
                      } else if (item.ambition.includes('wandel')) {
                        short = 'fiets- en wandelroutes'
                      } else if (item.ambition.includes('sport')) {
                        short = 'sporten'
                      } else if (item.ambition.includes('speel')) {
                        short = 'spelen'
                      } else if (item.ambition.includes('ontmoet')) {
                        short = 'ontmoeten'
                      } else if (item.ambition.includes('groen')) {
                        short = 'groen'
                      }
                      return (
                        <Ambitionblock
                          header={`Ambitie ${val + 1}`}
                          text={item.name}
                          shorttext={short}
                        />
                      )
                    })}
                </div>
              </FadeInSection>
              <FadeInSection>
                {texts &&
                  texts.map((item: sectionLandingspage, val: number) => {
                    if (item.title == 'In een oogopslag') {
                      return (
                        <>
                          <h2
                            className={`mb-4 font-raleway text-xl font-bold tabletportrait:text-3xl laptop:text-4xl ${
                              context.dark ? 'opacity-90' : ''
                            }`}
                          >
                            {item.title}
                          </h2>
                          <p
                            className={`mb-8 whitespace-pre-line ${
                              context.dark ? 'opacity-75' : ''
                            }`}
                          >
                            {item.text}
                          </p>
                        </>
                      )
                    } else {
                      return <></>
                    }
                  })}

                {texts &&
                  texts.map((item: sectionLandingspage, val: number) => {
                    if (item.title == 'Inspirerend') {
                      return (
                        <>
                          <h2
                            className={`mb-4 font-raleway text-xl font-bold tabletportrait:text-3xl laptop:text-4xl ${
                              context.dark ? 'opacity-90' : ''
                            }`}
                          >
                            {item.title}
                          </h2>
                          <p
                            className={`mb-8 whitespace-pre-line ${
                              context.dark ? 'opacity-75' : ''
                            }`}
                          >
                            {item.text}
                          </p>
                        </>
                      )
                    } else {
                      return <></>
                    }
                  })}
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
