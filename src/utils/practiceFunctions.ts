export const getColor = (thema: string, dark: boolean): string => {
  if (
    ['transversaal', 'technologie/data', 'participatie'].includes(
      thema.toLowerCase(),
    )
  ) {
    if (dark) {
      return 'purpleDesat'
    } else {
      return 'purple'
    }
  } else {
    if (dark) {
      return 'pinkDesat'
    } else {
      return 'pink'
    }
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

export const getParagraphBackground = (
  header: string,
  dark: boolean,
): string => {
  switch (header.toLowerCase()) {
    case 'hardware':
      if (dark) {
        return 'bg-yellowDesat'
      } else {
        return 'bg-yellow bg-opacity-30'
      }
    case 'software':
      if (dark) {
        return 'bg-purpleDesat'
      } else {
        return 'bg-purple bg-opacity-30'
      }
    case 'orgware':
      if (dark) {
        return 'bg-pinkDesat'
      } else {
        return 'bg-pink bg-opacity-30'
      }
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
