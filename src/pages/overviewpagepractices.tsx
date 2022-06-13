import React, { useContext, useEffect, useState } from 'react'
import '../assets/tailwind.css'
import TopNavigation from '../components/topnavigation'
import { graphql, Link, useStaticQuery } from 'gatsby'
import PracticeCard from '../components/practicecard'
import Practice, { Bron, Paragraaf } from '../interfaces/data'
import { ChevronDown } from 'lucide-react'
import Contactsection from '../components/contactsection'
import Footer from '../components/footer'
import ThemeContext from '../context/themecontext'
import FadeInSection from '../components/scrollytelling'
import { goodPractice } from '../interfaces/cmsInterfaces'
import { getMonthFromIndex } from '../utils/filterData'

export default () => {
  const [originalPractices, setOriginalPractices] = useState<Practice[]>()
  const [currentPractices, setCurrentPractices] = useState<Practice[]>()
  const [selected, setSelected] = useState<string>()
  const [hasMounted, setHasMounted] = useState(false)
  const [pracs, setPracs] = useState<goodPractice[]>()

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

  const contextB = useContext(ThemeContext)

  useEffect(() => {
    setHasMounted(true)

    const results: goodPractice[] = []
    for (let item of cms.nodes) {
      if (item.parent.internal.description.includes('goodprac')) {
        results.push({
          title: item.frontmatter.title,
          date: item.frontmatter.date,
          themes: item.frontmatter.thema,
          text: item.frontmatter.text,
          extra: item.frontmatter.extra,
          image: item.frontmatter.image,
          resources: item.frontmatter.resources,
        })
      }
    }

    setPracs(results)
  }, [])

  useEffect(() => {
    if (pracs) {
      const data: Practice[] = []

      pracs.forEach((p: goodPractice) => {
        let practice: Practice = {
          titel: '',
          themas: [],
          extra: [],
          paragrafen: [],
          datum: '',
          image: '',
        }

        practice.titel = p.title
        practice.themas = p.themes
        practice.image = p.image

        const datum = new Date(p.date)
        practice.datum = `${datum.getDate()} ${getMonthFromIndex(
          datum.getMonth(),
        )} ${datum.getFullYear()}`

        let titles = p.text.match(/#+ .+\n{2,}/g)
        let paragraphs = p.text.split(/#+ .+\n{2,}/)
        paragraphs.shift()
        let parResults: any = []

        titles?.forEach((title: string, index: number) => {
          //@ts-ignore
          titles[index] = title.replaceAll('#', '').replaceAll('\n', '').trim()
        })

        paragraphs.forEach((paragraaf: string, index: number) => {
          const proBody = paragraaf
            .replace(/\n+$/, '')
            .replace(/^\* /, '• ')
            .replace(/\n\* /g, '\n\n • ')

          let matches = [...proBody.matchAll(/\[.*?\] ?\(.*?\)/g)].concat([
            ...proBody.matchAll(/\<.*?\>/g),
          ])
          const links: any[] = []

          matches.forEach((m: any, index: number) => {
            let result
            if (m[0].includes('[')) {
              const parts = m[0].split(/\] ?\(/)
              let bron: Bron = {
                naam: parts[0].replace(/^\[/, ''),
                url: parts[1]
                  .replace(/^<\*/, '')
                  .replace(/^</, '')
                  .replace(/\)$/, '')
                  .replace(/>$/, ''),
              }

              result = [bron, m[0]]
            } else {
              result = [m[0].replace(/</, ' ').replace(/>/, ' '), m[0]]
            }

            links.push(result)
          })

          let htmlResult = proBody

          links.forEach((link: any) => {
            if (link[1].includes('[')) {
              htmlResult = htmlResult.replace(
                link[1],
                `<a class="${
                  contextB.dark
                    ? 'text-lightPurpleDesat'
                    : 'text-purple js-switchcolor'
                } font-semibold underline" href="${
                  link[0].url
                }">${link[0].naam.replace(/\\#/, '#')}</a>`,
              )
            } else {
              htmlResult = htmlResult.replace(
                link[1],
                `<a class="${
                  contextB.dark ? 'text-lightPurpleDesat' : 'text-purple'
                } font-semibold underline js-switchcolor" href="${link[0]}">${
                  link[0]
                }</a>`,
              )
            }
          })

          const par: Paragraaf = {
            //@ts-ignore
            header: titles[index],
            body: htmlResult
              .replace(/^\*\*/, ' <strong class="font-semibold">')
              .replace(/\*\*$/, ' </strong>')
              .replace(/ \*\*/g, ' <strong class="font-semibold">')
              .replace(/\n\*\*/g, '\n<strong class="font-semibold">')
              .replace(/\*\*\n/g, ' </strong>\n')
              .replace(/\*\* /g, ' </strong>')
              .replace(/\*\*,/, ' </strong>,')
              .replace(/\*\*\./, ' </strong>.')
              .replace(/\*\*!/, ' </strong>!')
              .replace(/\*\*\?/, ' </strong>?'),
          }
          parResults.push(par)
        })

        practice.paragrafen = parResults

        let regLinks = p.resources.match(/[^(]<.+>/g)
        let hyperLinks = p.resources.match(/\[.+\] ?\n?\(.+\)/g)
        let processedLinks: Bron[] = []

        regLinks?.forEach((link: string) => {
          const bron: Bron = {
            naam: '',
            url: link.replaceAll('\n', '').replace(/^</, '').replace(/>$/, ''),
          }

          processedLinks.push(bron)
        })
        hyperLinks?.forEach((link: string) => {
          const l = link.split(/\] ?\n?\(/)
          let url = ''

          const naam = l[0].replace(/^\[/, '')
          if (l[1]) {
            url = l[1].replace(/\)$/, '').replace(/^</, '').replace(/>$/, '')
          }

          const bron: Bron = {
            naam: naam,
            url: url,
          }

          processedLinks.push(bron)
        })
        practice.extra = processedLinks

        data.push(practice)
      })

      setOriginalPractices(data)
      setCurrentPractices(data)
    }
  }, [pracs, contextB])

  useEffect(() => {
    if (selected && originalPractices && originalPractices.length >= 1) {
      let practices = originalPractices
      let result: Practice[] = []

      if (selected !== 'filter practices' && selected !== 'alle practices') {
        practices.forEach((p) => {
          if (p.themas.includes(selected)) {
            result.push(p)
          }
        })
      } else {
        result = practices
      }

      setCurrentPractices(result)
    }
  }, [selected])

  const handleSelect = (e: any) => {
    setSelected(e.target.value)
  }

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
          <main className="mx-auto my-8 w-full max-w-[104rem] px-3  gridbreak:my-16 gridbreak:px-10">
            <header className="mb-14 flex flex-col gridbreak:flex-row gridbreak:justify-between">
              <div
                className={`mb-4 flex flex-col font-raleway text-4xl font-bold mobileM:text-5xl mobile:flex-row  gridbreak:mb-0 gridbreak:flex-col columnbreak:flex-row ${
                  context.dark ? 'text-white text-opacity-90' : 'text-dark'
                }`}
              >
                <h1>Praktijk</h1>
                <h1>voorbeelden</h1>
              </div>
              <div className="my-auto bg-[transparent]">
                <span className="group relative block bg-[transparent]">
                  {/* note: I hate select  */}
                  <select
                    defaultValue="filter practices"
                    value={selected}
                    onChange={(event) => handleSelect(event)}
                    className={`w-max appearance-none border-none p-2 pb-8 pr-8 text-lg font-semibold outline-none gridbreak:text-2xl   ${
                      context.dark
                        ? 'bg-dark text-white text-opacity-80 hover:text-opacity-90 group-focus-within:text-opacity-100 group-active:text-opacity-100'
                        : 'text-dark text-opacity-70 hover:text-opacity-90 group-focus-within:text-purple group-active:text-purple '
                    }`}
                  >
                    <option
                      disabled={true}
                      className={context.dark ? ' bg-darkGray' : ''}
                      value="filter practices"
                    >
                      Filter voorbeelden
                    </option>
                    <option
                      className={context.dark ? 'bg-darkGray' : ''}
                      value="alle practices"
                    >
                      Alle voorbeelden
                    </option>
                    <option
                      className={context.dark ? 'bg-darkGray' : ''}
                      value="actief bewegen"
                    >
                      Actief bewegen & verplaatsen
                    </option>
                    <option
                      className={context.dark ? 'bg-darkGray' : ''}
                      value="verbonden stadskern"
                    >
                      Verbonden stadskern
                    </option>
                    <option
                      className={context.dark ? 'bg-darkGray' : ''}
                      value="fiets- en wandelroutes"
                    >
                      Fiets- & wandelroutes
                    </option>
                    <option
                      className={context.dark ? 'bg-darkGray' : ''}
                      value="sporten"
                    >
                      Sporten
                    </option>
                    <option
                      className={context.dark ? 'bg-darkGray' : ''}
                      value="spelen"
                    >
                      Spelen
                    </option>
                    <option
                      className={context.dark ? 'bg-darkGray' : ''}
                      value="ontmoeten"
                    >
                      Ontmoeten
                    </option>
                    <option
                      className={context.dark ? 'bg-darkGray' : ''}
                      value="groen"
                    >
                      Groen
                    </option>
                    <option
                      className={context.dark ? 'bg-darkGray' : ''}
                      value="technologie/data"
                    >
                      Technologie & data
                    </option>
                    <option
                      className={context.dark ? 'bg-darkGray' : ''}
                      value="transversaal"
                    >
                      Transversaal beleid
                    </option>
                    <option
                      className={context.dark ? 'bg-darkGray' : ''}
                      value="participatie"
                    >
                      Participatie & inspraak
                    </option>
                  </select>
                  <div
                    className={`absolute top-12 h-1 w-full bg-purple  group-focus-within:bg-opacity-75 group-active:bg-opacity-75 ${
                      context.dark
                        ? 'bg-lightPurpleDesat bg-opacity-20'
                        : 'bg-purple bg-opacity-30'
                    }`}
                  ></div>
                  <ChevronDown
                    className={`pointer-events-none absolute right-0 top-3 opacity-70 ${
                      context.dark ? 'text-white' : 'text-dark'
                    }`}
                  />
                </span>
              </div>
            </header>
            {/* // grid */}
            {currentPractices && currentPractices.length >= 1 ? (
              <div className="flex flex-col gap-y-20 gridbreak:grid gridbreak:grid-cols-2 gridbreak:gap-x-10 navbreak:grid-cols-3 navbreak:gap-x-14">
                {currentPractices.map((e, i) => (
                  <FadeInSection key={i}>
                    <PracticeCard practice={e} key={e.titel} />
                  </FadeInSection>
                ))}
              </div>
            ) : null}
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
