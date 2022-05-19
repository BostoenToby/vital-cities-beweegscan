import React, { useEffect, useState } from 'react'
import '../assets/tailwind.css'
import TopNavigation from '../components/TopNavigation'
import { Link } from 'gatsby'
import TestPractice from '../interfaces/testPractice'
import { ChevronLeft } from 'lucide-react'
import { navigate } from 'gatsby'

export default ({ location }: { location: any }) => {
  const [practice, setPractice] = useState<TestPractice>()

  useEffect(() => {
    setPractice(location.state.practice)
  }, [])

  return (
    <div>
      <TopNavigation />
      <main className="mx-auto my-20 max-w-[104rem] px-10">
        <header className="mb-11 flex flex-row items-center text-center">
          <ChevronLeft className="mr-6 text-dark opacity-70" />
          <button
            onClick={() => navigate(-1)}
            className="Poppins text-2xl font-semibold text-purple"
          >
            naar alle good practices
          </button>
        </header>
        <section className="flex h-[520px] w-full flex-row">
          <div className="w-1/2"></div>
          <div className="h-full w-1/2"></div>
        </section>
        <section></section>
      </main>
    </div>
  )
}
