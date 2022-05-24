export const months: string[] = ['januari', 'februari', 'maart', 'april', 'mei', 'juni', 'juli', 'augustus', 'september', 'oktober', 'november', 'december']

export const getColor = (thema: string): string => {
  console.log(thema)
  if (
    ['transversaal', 'technologie/data', 'participatie'].includes(
      thema.toLowerCase(),
    )
  ) {
    return 'purple'
  } else {
    return 'pink'
  }
}

export const checkheader = (header: string): boolean => {
  if (
    !['wat', 'hardware', 'orgware', 'software'].includes(header.toLowerCase())
  ) {
    return true
  } else {
    return false
  }
}

export const checkIfRegular = (header: string): boolean => {
  if (
    !['hardware', 'software', 'orgware', 'tip'].includes(header.toLowerCase())
  ) {
    return true
  } else {
    return false
  }
}

export const getParagraphBackground = (header: string): string => {
  switch (header.toLowerCase()) {
    case 'hardware':
      return 'bg-yellow bg-opacity-30'
    case 'software':
      return 'bg-purple bg-opacity-30'
    case 'orgware':
      return 'bg-pink bg-opacity-30'
    default:
      return 'bg-lightGray'
  }
}

export const findIndexesSubstring = (searchIn: string, searhFor: string) => {
  let currentIndex = 0
  let indexes: number[] = []
  let found = true

  while (found) {
    let searchIndex = searchIn.indexOf(searhFor)
    if (searchIndex > -1) {
      currentIndex += searchIndex + searhFor.length
      searchIn = searchIn.substring(searchIndex + searhFor.length)
      indexes.push(currentIndex - searhFor.length)
    } else {
      found = false
    }
  }

  return indexes
}
