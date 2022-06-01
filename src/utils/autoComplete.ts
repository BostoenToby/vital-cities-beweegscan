export const searchList = (query: string) => {
  var result: string[] = []
  allResults.forEach((g) => {
    if (g.toLowerCase().startsWith(query.toLowerCase())) {
      result.push(g)
    }
    if (g.toLowerCase() == query.toLowerCase()) {
      let index = result.indexOf(g)
      result.splice(index, 1)
    }
  })
  if (result.length == allResults.length) {
    return
  }
  return result
}

export const allResults: string[] = [
  'Menen',
  'Kortrijk',
  'Wevelgem',
  'Bissegem',
  'Kortemark',
  'Gent',
  'Antwerpen',
  'Ledegem',
  'Kerke'
]
