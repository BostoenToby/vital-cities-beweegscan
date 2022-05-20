import React, { useEffect, useState } from 'react'
import '../assets/tailwind.css'
import TopNavigation from '../components/TopNavigation'
import { Link } from 'gatsby'
import TestPractice from '../interfaces/testPractice'
import { ChevronLeft } from 'lucide-react'
import { navigate } from 'gatsby'
import ThemaCard from '../components/ThemaCard'
import PracticeParagraph from '../components/PracticeParagraph'
import { findIndexesSubstring } from '../utils/practiceFunctions'

export default ({ location }: { location: any }) => {
  const [practice, setPractice] = useState<TestPractice>()
  const [ambities, setAmbities] = useState<string[]>()
  const [overigeThemas, setOverigeThemas] = useState<string[]>()

  useEffect(() => {
    setPractice(location.state.practice)
  }, [])

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
    if (practice && practice.paragrafen && practice.paragrafen.length >= 3) {
      let prac = practice

      prac.paragrafen.forEach((par) => {
        if (par.body.includes('•')) {
          let indexes = findIndexesSubstring(par.body, '•')
          let result = ''
          let text = ''
          indexes.forEach((i) => {
            if (indexes.indexOf(i) + 1 == indexes.length) {
              text = par.body.slice(i - 1, i) + '\n' + par.body.slice(i)
            } else if (indexes.indexOf(i) !== 0) {
              text = par.body.slice(indexes[indexes.indexOf(i) - 1], i) + '\n\n'
            }
            result += text
          })
          par.body = result
        }
      })

      setPractice(prac)
    }
  }, [practice])

  return (
    <div className="overflow-x-hidden">
      <TopNavigation />
      <main className="mx-auto my-10 max-w-[104rem] px-5 gridbreak:px-10 columnbreak:my-20">
        <header className="mb-11 flex flex-row items-center text-center">
          <ChevronLeft className="mr-6 text-dark opacity-70" />
          <button
            onClick={() => navigate(-1)}
            className=" font-poppins text-lg font-semibold text-purple columnbreak:text-2xl"
          >
            naar alle good practices
          </button>
        </header>
        <section className="flex w-full flex-col-reverse columnbreak:h-[520px] columnbreak:flex-row columnbreak:items-center">
          <div className="h-max w-full bg-purple bg-opacity-10 p-7 pb-5 font-poppins columnbreak:w-1/2 columnbreak:p-14 columnbreak:pb-10">
            <h1 className="mb-5 font-poppins text-2xl font-bold text-dark columnbreak:text-5xl">
              {practice?.titel}
            </h1>
            <div>
              {ambities && ambities.length >= 1 ? (
                <div className="flex flex-row flex-wrap">
                  {ambities.map((e, i) => (
                    <ThemaCard thema={e} />
                  ))}
                </div>
              ) : null}
              {overigeThemas && overigeThemas.length >= 1 ? (
                <div className="flex flex-row flex-wrap">
                  {overigeThemas.map((e, i) => (
                    <ThemaCard thema={e} />
                  ))}
                </div>
              ) : null}
            </div>
          </div>
          <div className="h-[calc(100vw-40px)] max-h-[520px] w-full columnbreak:w-1/2">
            <div className="h-full w-full bg-gray opacity-50"></div>
          </div>
        </section>
        <section>
          {practice &&
          practice.paragrafen &&
          practice.paragrafen.length >= 1 ? (
            <div className="gap-x-12 px-2 py-14 columnbreak:columns-2 columnbreak:px-6">
              {practice.warning ? (
                <div className="mb-8 bg-lightRed p-4 font-poppins">
                  <h2 className="mb-1 text-2xl font-bold text-dark columnbreak:text-3xl">
                    {practice.warning.header}
                  </h2>
                  <p className="ml-2 text-base font-medium text-dark columnbreak:text-lg">
                    {practice.warning.body}
                  </p>
                </div>
              ) : null}
              {practice.paragrafen.map((e, i) => (
                <PracticeParagraph paragraaf={e} />
              ))}
              {practice.extra && practice.extra.length >= 1 ? (
                <div>
                  <h2 className="mb-6 text-2xl font-bold text-purple columnbreak:text-3xl">
                    Meer weten
                  </h2>
                  <ul>
                    {practice.extra.map((e, i) => (
                      <li className="mb-6">
                        {e.url ? (
                          <a
                            className=" font-poppins text-base font-semibold text-purple underline columnbreak:text-lg"
                            href={e.url}
                          >
                            {e.naam ? e.naam : e.url}
                          </a>
                        ) : (
                          <a className=" column-break:text-lg font-poppins text-base font-semibold text-purple">
                            {e.naam}
                          </a>
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
    </div>
  )
}
