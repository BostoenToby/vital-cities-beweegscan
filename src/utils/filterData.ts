import { Ambitie, Benchmark } from '../interfaces/data'

const ambitions = [
  'actief bewegen',
  'verbonden stadskern',
  'fiets- en wandelroutes',
  'sporten',
  'spelen',
  'ontmoeten',
  'groen',
]

export const getAllCities = (allData: any) => {
  const results: string[] = []

  allData.forEach((edge: any) => {
    // Herstappe zit in slechts 1 benchmark en is dus niet echt bruikbaar
    edge.edges.forEach((node: any) => {
      const resultsToLower = results.map((g) => g.toLowerCase())
      if (
        !resultsToLower.includes(node.node.gemeente.trim().toLowerCase()) &&
        node.node.gemeente.toLowerCase() !== 'herstappe'
      ) {
        results.push(node.node.gemeente.trim())
      }
    })
  })

  return results
}

export const getPdfData = (
  allData: any,
  city1: string,
  city2: string | undefined,
) => {
  const dataCity1: Ambitie[] = getAllDataForCity(allData, city1)
  const dataCity2: Ambitie[] = city2 ? getAllDataForCity(allData, city2) : []

  let combinedData: any = {}
  combinedData[city1] = dataCity1

  if (city2) {
    combinedData[city2] = dataCity2
  }

  return combinedData
}

export const getGraphData = (
  allData: any,
  ambition: string,
  city1: string,
  city2: string | undefined,
) => {
  const dataCity1: Ambitie[] = getDataForCityAndAmbition(
    allData,
    ambition,
    city1,
  )
  const dataCity2: Ambitie[] = city2
    ? getDataForCityAndAmbition(allData, ambition, city2)
    : []

  let combinedData: any = {}
  combinedData[city1] = dataCity1

  if (city2) {
    combinedData[city2] = dataCity2
  }

  return combinedData
}

export const getAllData = (allData: any) => {
  const results: Ambitie[] = []

  ambitions.forEach((ambition: string) => {
    const ambitionResults: Ambitie[] = getDataForAmbition(allData, ambition)

    results.push({ label: ambition, benchmarks: ambitionResults[0].benchmarks })
  })

  return results
}

export const getAllDataForCity = (allData: any, city: string) => {
  const results: Ambitie[] = []

  ambitions.forEach((ambition: string) => {
    const ambitionResults: Ambitie[] = getDataForCityAndAmbition(
      allData,
      ambition,
      city,
    )

    results.push({
      label: ambition,
      benchmarks: ambitionResults[0].benchmarks,
    })
  })

  return results
}

export const getDataForAmbition = (allData: any, ambition: string) => {
  const relevantEdges: any[] = []
  const results: Ambitie[] = []
  const benches: Benchmark[] = []

  allData.forEach((edge: any) => {
    if (checkIndex(allData.indexOf(edge)) == ambition) {
      relevantEdges.push(edge.edges)
    }
  })

  let label = ''
  const nodes: any[] = []

  relevantEdges.forEach((edge: any, index: number) => {
    if (
      typeof edge[0].node.item == 'undefined' ||
      (ambition == 'actief bewegen' && index == 3)
    ) {
      label = edge[0].node.indicator
    } else {
      label = edge[0].node.item
    }

    edge.forEach((node: any) => {
      nodes.push(node.node)
    })

    benches.push({ label: label, data: nodes })
  })

  results.push({ label: ambition, benchmarks: benches })

  return removeSpacesCities(results)
}

export const getDataForCityAndAmbition = (
  allData: any,
  ambition: string,
  city: string,
) => {
  const ambitionData: Ambitie[] = getDataForAmbition(allData, ambition)
  const results: Ambitie[] = [{ label: ambition, benchmarks: [] }]

  ambitionData[0].benchmarks.forEach((benchmark: Benchmark) => {
    const bench: Benchmark = { label: benchmark.label, data: [] }
    benchmark.data.forEach((node: any) => {
      if (
        node.gemeente &&
        node.gemeente.toLowerCase().trim() == city.toLowerCase().trim() &&
        (bench.label == node.indicator || bench.label == node.item)
      ) {
        bench.data.push(node)
      }
    })
    results[0].benchmarks.push(bench)
  })

  return removeSpacesCities(results)
}

const checkIndex = (index: number): string => {
  if (0 <= index && index <= 3) {
    return 'actief bewegen'
  } else if (4 <= index && index <= 9) {
    return 'verbonden stadskern'
  } else if (10 <= index && index <= 16) {
    return 'fiets- en wandelroutes'
  } else if (17 <= index && index <= 22) {
    return 'sporten'
  } else if (23 <= index && index <= 25) {
    return 'spelen'
  } else if (26 <= index && index <= 30) {
    return 'ontmoeten'
  } else if (31 <= index && index <= 34) {
    return 'groen'
  } else {
    return 'no ambition found'
  }
}

const removeSpacesCities = (data: Ambitie[]) => {
  data.forEach((amb: Ambitie) => {
    amb.benchmarks.forEach((bench: Benchmark) => {
      bench.data.forEach((node: any) => {
        node.gemeente = node.gemeente.trim()
      })
    })
  })

  return data
}

export const getLabelChart = (labelBench: string) => {
  switch (labelBench.toLowerCase()) {
    case 'actief bewegen':
      return 'beweegt niet wekelijks'
    case 'verplaatsingen woon-werk/woon-school: dominant vervoersmiddel':
      return 'gaat vooral met de auto naar het werk/school'
    case 'veilig naar school':
      return 'vindt de weg naar school onveilig'

    case 'duurzaam verplaatsingsgedrag voor korte afstanden':
      return 'gebruikt de auto voor korte afstanden'
    case 'voldoende openbaar vervoer in de gemeente/buurt':
      return 'wil meer openbaar vervoer in gemeente/buurt'
    case 'autoluwe en autovrije zones':
      return 'wil meer autoluwe en autovrije zones'
    case 'deelsystemen':
      return 'wil meer deelsystemen'
    case 'lidmaatschap autodelen':
      return 'is niet lid van een autodeel org.'
    case 'lidmaatschap fietsdelen':
      return 'is niet lid van een fietsdeel org.'

    case 'fietspaden in goede staat':
      return 'is ontevreden over staat fietspaden'
    case 'straten en pleinen in goede staat':
      return 'is ontevreden over staat straten en pleinen'
    case 'voetpaden in goede staat':
      return 'is ontevreden over staat voetpaden'
    case 'voldoende fietspaden':
      return 'wil meer fietspaden'
    case 'fietsinfrastructuur':
      return 'wil meer fietsinfrastructuur'
    case 'voldoende fietsenstallingen in de gemeente/buurt':
      return 'wil meer fietsenstallingen in gemeente/buurt'
    case 'veilig fietsen in de gemeente/buurt':
      return 'voelt zich niet veilig op de fiets'

    case 'sportparticipatie':
      return 'sport niet wekelijks'
    case 'sporten in eigen gemeente':
      return 'sport nooit in eigen gemeente'
    case 'sporten in andere gemeente':
      return 'sport nooit in andere gemeente'
    case 'voldoende sportvoorzieningen':
      return 'wil meer sportvoorzieningen'
    case 'tevredenheid over sportvoorzieningen':
      return 'is ontevreden over sportvoorzieningen'
    case 'leden sportclubs':
      return 'is niet lid van een sportclub'

    case 'voldoende geschikte plekken voor jeugd':
      return 'wil meer plekken voor jeugd'
    case 'voldoende speelvoorzieningen voor kinderen en jongeren':
      return 'wil meer speelvoorzieningen voor kinderen en jongeren'
    case 'tevredenheid over veilig spelen':
      return 'vindt de speelvoorzieningen of omgeving onveilig'

    case 'zich thuis voelen in de buurt':
      return 'voelt zich niet thuis in buurt'
    case 'voldoende ontmoetingsplekken':
      return 'wil meer ontmoetingsplekken'
    case 'voldoende rustplekken':
      return 'wil meer rustplekken'
    case 'onveiligheidsgevoel buurt/wijk':
      return 'voelt zich onveilig in buurt/wijk'
    case 'onveiligheidsgevoel gemeente/stad':
      return 'voelt zich onveilig in gemeente/stad'

    case 'bezoek park, bos, groenzone in andere gemeente':
      return 'bezoekt nooit een park, bos of groenzone in andere gemeente'
    case 'bezoek park, bos, groenzone in eigen gemeente':
      return 'bezoekt nooit een park, bos of groenzone in eigen gemeente'
    case 'tevredenheid over natuur en groenvoorzieningen':
      return 'is ontevreden over natuur en groenvoorzieningen'
    case 'voldoende groen buurt':
      return 'wil meer groen in buurt'

    default:
      return labelBench
  }
}
