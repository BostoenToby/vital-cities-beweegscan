import React from 'react'
import '../assets/tailwind.css'
import { getColor } from '../utils/practiceFunctions'

export default ({ thema }: { thema: string }) => {
  const color = getColor(thema)

  return (
    <div className={`bg-${color} mr-4 mb-4 rounded-md`}>
      <p className="whitespace-nowrap px-2 pb-1 pt-[6px] font-poppins text-sm font-medium text-white">
        {thema}
      </p>
    </div>
  )
}
