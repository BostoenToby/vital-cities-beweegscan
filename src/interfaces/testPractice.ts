export default interface TestPractice {
  id: number
  titel: string
  themas: string[]
  warning?: Paragraaf
  extra: Bron[]
  paragrafen: Paragraaf[]
  datum: string
}

export interface Paragraaf {
  header: string
  body: string
}

export interface Bron {
  naam: string
  url: string
}

