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
    <div>
      <TopNavigation />
      <main className="mx-auto my-20 max-w-[104rem] px-10">
        <header className="mb-11 flex flex-row items-center text-center">
          <ChevronLeft className="mr-6 text-dark opacity-70" />
          <button
            onClick={() => navigate(-1)}
            className=" font-poppins text-2xl font-semibold text-purple"
          >
            naar alle good practices
          </button>
        </header>
        <section className="flex h-[520px] w-full flex-row items-center">
          <div className="h-max w-1/2 bg-purple bg-opacity-10 p-14 pb-10 font-poppins">
            <h1 className="mb-5 font-poppins text-5xl font-bold text-dark">
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
          <div className="h-full w-1/2">
            <div className="h-full w-full bg-gray opacity-50"></div>
          </div>
        </section>
        <section>
          {practice &&
          practice.paragrafen &&
          practice.paragrafen.length >= 1 ? (
            <div className="columns-2 gap-x-12 px-6 py-14">
              {practice.warning ? (
                <div className="mb-8 bg-lightRed p-4 font-poppins">
                  <h2 className="mb-1 text-3xl font-bold text-dark">
                    {practice.warning.header}
                  </h2>
                  <p className="ml-2 text-lg font-medium text-dark">
                    {practice.warning.body}
                  </p>
                </div>
              ) : null}
              {practice.paragrafen.map((e, i) => (
                <PracticeParagraph paragraaf={e} />
              ))}
              {practice.extra && practice.extra.length >= 1 ? (
                <div>
                  <h2 className="mb-6 text-3xl font-bold text-purple">
                    Meer weten
                  </h2>
                  <ul>
                    {practice.extra.map((e, i) => (
                      <li className="mb-6">
                        {e.url ? (
                          <a
                            className=" font-poppins text-lg font-semibold text-purple underline"
                            href={e.url}
                          >
                            {e.naam ? e.naam : e.url}
                          </a>
                        ) : (
                          <a className=" font-poppins text-lg font-semibold text-purple">
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
