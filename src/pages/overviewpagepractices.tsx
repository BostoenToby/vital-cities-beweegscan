import React, { useEffect, useState } from 'react'
import '../assets/tailwind.css'
import TopNavigation from '../components/TopNavigation'
import { Link } from 'gatsby'
import { testJSON } from '../data/testPractices'
import PracticeCard from '../components/PracticeCard'
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
      <main className="mx-auto my-16 w-full max-w-[104rem] px-10">
        <header className="mb-14 flex flex-row justify-between">
          <h1 className="font-poppins text-5xl font-bold text-dark">
            Good practices
          </h1>
          <div className="my-auto">
            <span className="group relative block">
              {/* note: I hate select  */}
              <select
                value={selected}
                onChange={(event) => handleSelect(event)}
                className="appearance-none border-none p-2 pb-8 pr-8 font-poppins text-2xl font-semibold text-dark text-opacity-70 outline-none group-focus-within:text-purple group-active:text-purple"
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
          <div className="gap grid grid-cols-3 gap-x-14 gap-y-20">
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
