import React, { useEffect, useState } from 'react'
import '../assets/tailwind.css'
import TopNavigation from '../componentsSmall/topnavigation'
import { Link } from 'gatsby'
import { testJSON } from '../data/testPractices'
import PracticeCard from '../componentsSmall/practicecard'
import TestPractice from '../interfaces/testPractice'
import { ChevronDown } from 'lucide-react'

export default () => {
  const [originalPractices, setOriginalPractices] = useState<TestPractice[]>()
  const [currentPractices, setCurrentPractices] = useState<TestPractice[]>()
  const [selected, setSelected] = useState<string>()

  useEffect(() => {
    setOriginalPractices(testJSON)
    setCurrentPractices(testJSON)
  }, [])

  // useEffect(() => {
  //   if (practices) {
  //     console.log(practices)
  //   }
  // }, [practices])

  useEffect(() => {
    if (selected && originalPractices && originalPractices.length >= 1) {
      console.log(selected)
      let practices = originalPractices
      let result: TestPractice[] = []

      if (selected !== 'alle practices') {
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
    <div>
      <TopNavigation />
      <main className="mx-auto my-8 w-full max-w-[104rem] px-5 gridbreak:my-16 gridbreak:px-10">
        <header className="mb-14 flex flex-col gridbreak:flex-row gridbreak:justify-between">
          <h1 className="mb-4 font-poppins text-5xl font-bold text-dark gridbreak:mb-0">
            Good practices
          </h1>
          <div className="my-auto">
            <span className="group relative block">
              {/* note: I hate select  */}
              <select
                value={selected}
                onChange={(event) => handleSelect(event)}
                className="w-max appearance-none border-none p-2 pb-8 pr-8 font-poppins text-2xl font-semibold text-dark text-opacity-70 outline-none group-focus-within:text-purple group-active:text-purple"
              >
                <option value="alle practices">Alle practices</option>
                <option value="actief bewegen">
                  Actief bewegen & verplaatsen
                </option>
                <option value="verbonden stadskern">Verbonden stadskern</option>
                <option value="fiets- en wandelroutes">
                  Fiets- & wandelroutes
                </option>
                <option value="sporten">Sporten</option>
                <option value="spelen">Spelen</option>
                <option value="ontmoeten">Ontmoeten</option>
                <option value="groen">Groen</option>
                <option value="technologie/data">Technologie & data</option>
                <option value="transversaal">Transversaal beleid</option>
                <option value="participatie">Participatie & inspraak</option>
              </select>
              <div className="absolute top-12 h-1 w-full bg-purple bg-opacity-30 group-focus-within:bg-opacity-75 group-active:bg-opacity-75"></div>
              <ChevronDown className="opacity-7 pointer-events-none absolute right-0 top-3 text-dark" />
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
      <footer>{/* // footer wanneer die er is */}</footer>
    </div>
  )
}
