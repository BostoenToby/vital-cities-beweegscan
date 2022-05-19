import React, { useEffect, useState } from 'react'
import '../assets/tailwind.css'
import TopNavigation from '../components/TopNavigation'
import { Link } from 'gatsby'
import { testJSON } from '../data/testPractices'
import PracticeCard from '../components/PracticeCard'
import TestPractice from '../interfaces/testPractice'

export default () => {
  const [practices, setPractices] = useState<TestPractice[]>()

  useEffect(() => {
    setPractices(testJSON)
  }, [])

  useEffect(() => {
    if (practices) {
      console.log(practices)
    }
  }, [practices])

  return (
    <div>
      <TopNavigation />
      <main className="mx-auto my-16 w-full max-w-[104rem] px-10">
        <header className="mb-14 flex flex-row justify-between">
          <h1 className="font-poppins text-5xl font-bold text-dark">
            Good practices
          </h1>
          <div className="my-auto">
            <select className="font-poppins text-2xl font-semibold text-purple">
              <option value="actief bewegen">
                Actief bewegen & verplaatsen
              </option>
              <option value="verbonden stadkern">Verbonden stadskern</option>
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
          </div>
        </header>
        {/* // grid */}
        {practices && practices.length >= 1 ? (
          <div className="gap grid grid-cols-3 gap-x-14 gap-y-20">
            {practices.map((e, i) => (
              <PracticeCard practice={e} key={e.id} />
            ))}
          </div>
        ) : null}
      </main>
      <footer>{/* // footer wanneer die er is */}</footer>
    </div>
  )
}
