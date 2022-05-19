export default interface TestPractice {
  id: number
  titel: string
  themas: string[]
  warning?: Paragraaf
  extra: Bron[]
  paragrafen: Paragraaf[]
  datum: string
}

interface Paragraaf {
  header: string
  body: string
}

interface Bron {
  naam: string
  url: string
}
