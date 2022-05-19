import React from 'react'
import '../assets/tailwind.css'
import TestPractice from '../interfaces/testPractice'
import { Link } from 'gatsby'

export default ({ practice }: { practice: TestPractice }) => {
  return (
    <div className="flex max-w-lg flex-col justify-between">
      <div>
        <section className="mb-8 h-80">
          {/* // image placeholder */}
          <div className="h-full w-full bg-gray opacity-50"></div>
          <div className=" relative bottom-5 left-4 flex flex-row font-poppins text-base font-semibold text-white">
            <div className="-skew-x-12 bg-pink py-2 px-4">
              {practice.themas[0]}
            </div>
            <div className="-skew-x-12 bg-yellow py-2 px-4">
              {practice.datum}
            </div>
          </div>
        </section>
        <section className="mb-4 font-poppins">
          <h2 className="mb-4 text-2xl font-semibold text-dark line-clamp-2">
            {practice.titel}
          </h2>
          <p className="text-base font-medium text-dark opacity-90 line-clamp-6">
            {practice.paragrafen[0].body}
          </p>
        </section>
      </div>
      <button className="w-[93px] font-poppins text-lg font-semibold text-purple text-opacity-90">
        <Link to="/detailscase/" state={{ practice: practice }}>
          Lees meer
        </Link>
        <div className="h-[3px] w-full bg-purple opacity-30"></div>
      </button>
    </div>
  )
}
