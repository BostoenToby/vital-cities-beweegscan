import React, { useEffect, useState } from 'react'
import '../assets/tailwind.css'
import TopNavigation from '../components/topnavigation'
import { Link } from 'gatsby'
import { testJSON } from '../data/testPractices'
import PracticeCard from '../components/practicecard'
import TestPractice from '../interfaces/testPractice'
import { ChevronDown } from 'lucide-react'
import Contactsection from '../components/contactsection'
import Footer from '../components/footer'
import ThemeContext from '../context/themecontext'

export default () => {
  const [originalPractices, setOriginalPractices] = useState<TestPractice[]>()
  const [currentPractices, setCurrentPractices] = useState<TestPractice[]>()
  const [selected, setSelected] = useState<string>()

  useEffect(() => {
    setOriginalPractices(testJSON)
    setCurrentPractices(testJSON)
  }, [])

  useEffect(() => {
    if (selected && originalPractices && originalPractices.length >= 1) {
      console.log(selected)
      let practices = originalPractices
      let result: TestPractice[] = []

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

  return (
    <ThemeContext.Consumer>
      {(context) => (
        <div className={context.dark ? 'bg-dark' : ''}>
          <TopNavigation section="#Contact" />
          <main className="mx-auto my-8 w-full max-w-[104rem] px-3 font-raleway gridbreak:my-16 gridbreak:px-10">
            <header className="mb-14 flex flex-col gridbreak:flex-row gridbreak:justify-between">
              <h1
                className={`mb-4  text-5xl font-bold gridbreak:mb-0 ${
                  context.dark ? 'text-white text-opacity-90' : 'text-dark'
                }`}
              >
                Good practices
              </h1>
              <div className="my-auto">
                <span className="group relative block">
                  {/* note: I hate select  */}
                  <select
                    defaultValue="filter practices"
                    value={selected}
                    onChange={(event) => handleSelect(event)}
                    className={`w-max appearance-none border-none p-2 pb-8 pr-8 text-2xl font-semibold outline-none   ${
                      context.dark
                        ? 'bg-dark text-white text-opacity-90 group-focus-within:text-opacity-100 group-active:text-opacity-100'
                        : 'text-dark text-opacity-70 group-focus-within:text-purple group-active:text-purple '
                    }`}
                  >
                    <option
                      disabled={true}
                      className={context.dark ? 'bg-darkGray' : ''}
                      value="filter practices"
                    >
                      Filter practices
                    </option>
                    <option
                      className={context.dark ? 'bg-darkGray' : ''}
                      value="alle practices"
                    >
                      Alle practices
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
                  <PracticeCard practice={e} key={e.id} />
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
