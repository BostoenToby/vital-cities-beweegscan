import React, { useEffect, useState } from 'react'
import '../assets/tailwind.css'
import TopNavigation from '../components/TopNavigation'
import { Link } from 'gatsby'
import TestPractice from '../interfaces/testPractice'

export default ({ location }: { location: any }) => {
  const [practice, setPractice] = useState<TestPractice>()

  useEffect(() => {
    setPractice(location.state.practice)
  }, [])

  return (
    <div>
      <TopNavigation />
      <p>{practice?.id}</p>
    </div>
  )
}
