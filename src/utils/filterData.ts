import { Benchmark } from '../interfaces/data'

export const getDataForAmbition = (allData: any, ambition: string) => {
  const relevantEdges: any[] = []
  const results: Benchmark[] = []

  allData.forEach((edge: any) => {
    if (checkIndex(allData.indexOf(edge)) == ambition) {
      relevantEdges.push(edge.edges)
    }
  })
  console.log(relevantEdges)

  relevantEdges.forEach((edge: any, index: number) => {
    let label = ''
    if (
      typeof edge[0].node.item == 'undefined' ||
      (ambition == 'actief bewegen' && index == 3)
    ) {
      label = edge[0].node.indicator
    } else {
      label = edge[0].node.item
    }
    console.log(label)
  })
}

const checkIndex = (index: number): string => {
  if (0 <= index && index <= 3) {
    return 'actief bewegen'
  } else if (4 <= index && index <= 7) {
    return 'verbonden stadskern'
  } else if (8 <= index && index <= 14) {
    return 'fiets- en wandelroutes'
  } else if (15 <= index && index <= 19) {
    return 'sporten'
  } else if (20 <= index && index <= 22) {
    return 'spelen'
  } else if (23 <= index && index <= 27) {
    return 'ontmoeten'
  } else if (28 <= index && index <= 31) {
    return 'groen'
  } else {
    return 'no ambition found'
  }
}
