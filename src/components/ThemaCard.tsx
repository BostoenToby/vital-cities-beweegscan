import React from 'react'
import '../assets/tailwind.css'
import { getColor } from '../utils/practiceFunctions'

export default ({ thema }: { thema: string }) => {
  const color = getColor(thema)

  return (
    <div
      className={`bg-${color} mr-2 mb-2 rounded-md columnbreak:mr-4 columnbreak:mb-4`}
    >
      <p className="whitespace-nowrap px-2 pb-1 pt-[6px] font-poppins text-sm font-medium text-white">
        {thema}
      </p>
    </div>
  )
}
