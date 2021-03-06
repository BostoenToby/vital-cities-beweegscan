export interface PercentageData {
  percentage: string
  label: string
}

export default interface Practice {
  titel: string
  themas: string[]
  extra: Bron[]
  paragrafen: Paragraaf[]
  datum: string
  image: string
}

export interface Paragraaf {
  header: string
  body: string
}

export interface Bron {
  naam: string
  url: string
}

export interface Benchmark {
  label: string
  data: any[]
}

export interface Ambitie {
  label: string
  benchmarks: Benchmark[]
}

// aanpassen!!!
// ambities of 1 ambitie => alle benchmarks voor die ambitie (edges) => ... (afhankelijk van benchmark) = Generic (nodes)
// export interface Data<P extends string, G extends string> {
//   current_ambition: benchmarks<P, G>
// }

// export type Generic<G extends string> = {
//   [g in G]: string
// }

// export type benchmarks<P extends string, G extends string> = {
//   [p in P]: Generic<G>
// }
// betere aproach nodig!!!!!!!!!!!!

// want vind je waar? (.txt voor google sheets)

// actief bewegen: actief bewegen, verplaatsing woon- werk/school, veilig naar school, verplaatsingen (per vervoersmiddel)
// [0-3]

// verbonden stadkern: duurzaam verplaatsgedrag voor korte afstanden, voldoende openbaar vervoer in gemeente/buurt, voldoende aanbod duurzame mobiliteitskeuzes => enkel: [autoluwe/autovrije zones + deelsystemen] (KOMT OOK NOG ANDERE DATA BIJ)
// [4-7]

// aantrekkelijke en veilige fiets- en wandelroutes: tevredenheid over staat wegen van wegen en fietspaden => opgesplitst in: [fietspaden in goede staat + staat van pleinen + voetpaden in goede staat], voldoende fietspaden, voldoende fietstallingen in gemeente/buurt, voldoende aanbod duurzaam mobiliteitskeuzes => enkel: [fietsinfrastructuur] , veilig fietsen in gemeente/buurt,
// [8-14]

// stad en buurt als sportplein: sportparticipatie, sporten in eigen of andere gemeente => opgesplitst in: [sporten in adere gemeente + sporten in eigen gemeente], voldoende sportvoorzieningen, tevredenheid over sport en recreatievoorzieningen => enkel: [tevredenheid over sportvoorzieningen] (KOMT NOG ANDERE DATA BIJ)
// [15-19]

// stad en buurt als speelplein: voldoende speelvoorzieningen en geschikte plekken => opgesplitst in: [voldoende geschikte plekken voor jeugd + voldoende speelvoorzieningen voor kinderen en jongeren], tevredenheid over veilig spelen
// [20-22]

// stad en buurt als ontmoetingsplek: zich thuis voelen in buurt, voldoende rustplekken en ontmoetingsplaatsen => opgesplitst in: [voldoende ontmoetingsplekken + voldoende rustplekken], onderhoudsgevoel gemeente/stad en buurt/wijk => opgesplitst in: [onderhoudsgevoel buurt/wijk + onderhoudsgevoel gemeente/stad]
// [23-27]

// bruikbaar, gevarieerd en voldoende groen: bezoek park bos groenzone eigen of andere gemeente => opgesplitst in: [bezoek park bos groenzone andere gemeente + bezoek park bos groenzone eigen gemeente], tevredenheid over natuur en groenvoorzieningen, voldoende groen buurt
// [28-31]

// mogelijke fields:

// gemeente
// dagelijks____
// meerdereKerenPerMaand____
// minstensWekelijks____
// nooit_minderDan1KeerPerMaand____
// jaar
// indicator
// => beweegt niet minstens wekelijks
// slecht = meerdereKerenPerMaand + nooit_minderDan1keerPerMaand

// gemeente
// andere____
// auto____
// fiets____
// openbaarVervoer____
// teVoet____
// indicator
// => slecht = auto

// gemeente
// eens____
// neutraal____
// oneens____
// indicator
// slecht = oneens

// gemeente
// afEnToe____
// nooit_zelden____
// vaak_altijd____
// item
// indicator
// => let op voor MO_S_11: meerder nodes per chart

// gemeente
// minstensMaandelijks____
// minstensWekelijks____
// nooit_eenUitzonderlijkeKeer____
// indicator
// slecht = minstensMaandelijks + nooit_eenUitzonderlijkeKeer

// gemeente
// _12KeerOfMinder____
// meerDan12Keer____
// nooit____
// item
// indicator
// slecht = nooit

// gemeente
// neutraal____
// ontevreden____
// tevreden____
// item
// indicator
// slecht = ontevreden

// gemeente
// meerDan12Keer____
// nietAanwezigInDeEigenGemeente____
// nooit____
// tot12Keer____
// item
// indicator
// slecht = nietAanweigInDeEigenGemeente + nooit
