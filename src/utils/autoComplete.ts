import { getAllCities } from './filterData'

export const searchList = (allData: any, query: string, limited: boolean) => {
  var result: string[] = []
  const allResults = getAllCities(allData)
  let filteredResults: string[] = []

  if (limited) {
    allResults.forEach((city: string) => {
      if (!forbidden.includes(city)) {
        filteredResults.push(city)
      }
    })
  } else {
    filteredResults = allResults
  }

  filteredResults.forEach((g) => {
    if (g.toLowerCase().startsWith(query.toLowerCase())) {
      result.push(g)
    }
    if (limited) {
      if (g.toLowerCase() == query.toLowerCase()) {
        let index = result.indexOf(g)
        result.splice(index, 1)
      }
    }
  })
  if (result.length == filteredResults.length) {
    return
  }
  return result
}

const forbidden = [
  '13 centrumsteden',
  'Gemeenten groter dan 50.000 inw.',
  'Gemeenten kleiner dan 10.000 inw.',
  'Gemeenten van 10.000 tot 20.000 inw.',
  'Gemeenten van 20.000 tot 30.000 inw.',
  'Gemeenten van 30.000 tot 50.000 inw.',
  'Vlaams Gewest',
]
