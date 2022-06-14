import { graphql, Link, useStaticQuery } from 'gatsby'
import { GatsbyImage, getImage, StaticImage } from 'gatsby-plugin-image'
import { ArrowDown, ChevronDown, Search } from 'lucide-react'
import * as React from 'react'
import { useEffect, useState, useContext } from 'react'
import Input from '../components/input'
import Intsrc from '../components/Intsrc'
import RevPrac from '../components/revprac'
import Tag from '../components/tag'
import Topnavigation from '../components/topnavigation'
import Contactsection from '../components/contactsection'
import Footer from '../components/footer'
import { searchList } from '../utils/autoComplete'
import {
  ambitionTitle,
  cmsInt,
  goodPractice,
  header,
  hoeWaarom,
  intBron,
  problem,
} from '../interfaces/cmsInterfaces'
import Textblock from '../components/textblock'
import { navigate } from 'gatsby'
import { ChevronLeft } from 'lucide-react'
import ThemeContext from '../context/themecontext'
import { text } from 'stream/consumers'
import Practice, { Benchmark, PercentageData } from '../interfaces/data'
import FadeInSection from '../components/scrollytelling'
import {
  getAllCities,
  getAllDataForCity,
  getDataForAmbition,
  getDataForCityAndAmbition,
  getGraphData,
  getLabelChart,
  getMonthFromIndex,
  getPdfData,
} from '../utils/filterData'
import genPDF from '../components/pdf'
import axios from 'axios'
import Barchart from '../components/barchart'
import Lottie, { useLottie } from 'lottie-react'
import lightbulb from '../assets/animations/lightbulb.json'
import long_arrow from '../assets/animations/long_arrow.json'
import { replaceColor } from 'lottie-colorify'
import { Bron, Paragraaf } from '../interfaces/data'
import erroranim from '../assets/animations/erroranim.json'
import complete from '../assets/animations/complete.json'
import { netlifyError } from '../interfaces/sendgrid'
import Barchartgeneric from '../components/barchartgeneric'

export default ({ location }: { location: any }) => {
  const [btnRapport, setBtnRapport] = useState<boolean>(false)
  const [checkNews, setCheckNews] = useState<boolean>(false)
  const [netlifyError, setNetlifyError] = useState<netlifyError>({
    google: true,
    changed: false,
  })
  const [hasMounted, setHasMounted] = useState(false)
  const [locationShort, setLocationShort] = useState<string>()

  const [cmsData, setCmsData] = useState<cmsInt>({
    header: {
      title: '',
      subtitle: '',
      image: '',
      tag: '',
    },
    sectionTitles: [],
    problem: {
      text: '',
      bold: '',
    },
    hows: [],
    whys: [],
    intBron: [],
    goodPracs: [],
  })

  const [img, setImg] = useState<any>()
  const [suggestions, setSuggestions] = useState<string[]>()
  const [typed, setTyped] = useState<string>('')
  const [searchQuery, setSearchQuery] = useState<string>()
  const [selectedCities, setSelectedCities] = useState<string[]>(['', ''])
  const [showCitySelection, setShowCitySelection] = useState<boolean[]>([
    false,
    false,
  ])
  const [filteredCities, setFilteredCities] = useState<string[]>()
  const [graphData, setGraphData] = useState<Benchmark[][]>()
  const [allData, setAllData] = useState<any>()
  const [info, setInfo] = useState<PersonalInfo>({
    place: '',
    firstName: '',
    lastName: '',
    mail: '',
    newsletter: false,
  })
  const [error, setErrors] = useState<FormError>({
    placeError: '',
    firstNameError: '',
    lastNameError: '',
    mailError: '',
  })
  const [practices, setPractices] = useState<Practice[]>()
  const [toggleBenches, setToggleBenches] = useState(true)
  const [showMore, setShowMore] = useState(false)

  useEffect(() => {
    setHasMounted(true)
    setLocationShort(location.state.short)
    setSelectedCities(['Vlaams Gewest', ''])

    if (typeof window !== 'undefined') {
      window.addEventListener('click', handleClick)
      return () => window.removeEventListener('click', handleClick)
    }
  }, [])

  useEffect(() => {
    if (selectedCities && locationShort) {
      const data = getGraphData(
        allAmbitionData,
        locationShort,
        selectedCities[0],
        selectedCities[1],
      )

      let benches1: Benchmark[] = data[selectedCities[0]][0].benchmarks
      let benches2: Benchmark[] = []

      if (selectedCities[1]) {
        benches2 = data[selectedCities[1]][0].benchmarks
      }

      setGraphData([benches1, benches2])
    }
  }, [selectedCities])

  const {
    cms,
    allImages,
    ambitie1bench1,
    ambitie1bench2,
    ambitie1bench3,
    ambitie1bench4,
    ambitie2bench1,
    ambitie2bench2,
    ambitie2bench3,
    ambitie2bench4,
    ambitie2bench5,
    ambitie2bench6,
    ambitie3bench1,
    ambitie3bench2,
    ambitie3bench3,
    ambitie3bench4,
    ambitie3bench5,
    ambitie3bench6,
    ambitie3bench7,
    ambitie4bench1,
    ambitie4bench2,
    ambitie4bench3,
    ambitie4bench4,
    ambitie4bench5,
    ambitie4bench6,
    ambitie5bench1,
    ambitie5bench2,
    ambitie5bench3,
    ambitie6bench1,
    ambitie6bench2,
    ambitie6bench3,
    ambitie7bench1,
    ambitie7bench2,
    ambitie7bench3,
    ambitie7bench4,
  } = useStaticQuery(
    graphql`
      query {
        cms: allMarkdownRemark {
          nodes {
            frontmatter {
              ambition
              ambitions
              date
              extra
              title
              link
              text
              subtitle
              image
              tag
              boldpart
              thema
              animation
              resources
            }
            parent {
              internal {
                description
              }
            }
          }
        }
        allImages: allImageSharp {
          nodes {
            gatsbyImageData
          }
        }
        ambitie1bench1: allGsVitalCitiesDataZoS03 {
          edges {
            node {
              jaar
              gemeente
              dagelijks____
              meerdereKerenPerMaand____
              minstensWekelijks____
              nooit_minderDan1KeerPerMaand____
              jaar
              indicator
            }
          }
        }
        ambitie1bench2: allGsVitalCitiesDataMoS12 {
          edges {
            node {
              jaar
              gemeente
              andere____
              auto____
              fiets____
              openbaarVervoer____
              teVoet____
              indicator
            }
          }
        }
        ambitie1bench3: allGsVitalCitiesDataMoS07 {
          edges {
            node {
              jaar
              gemeente
              eens____
              neutraal____
              oneens____
              indicator
            }
          }
        }
        ambitie1bench4: allGsVitalCitiesDataMoS11 {
          edges {
            node {
              jaar
              gemeente
              afEnToe____
              nooit_zelden____
              vaak_altijd____
              item
              indicator
            }
          }
        }
        ambitie2bench1: allGsVitalCitiesDataMoS17 {
          edges {
            node {
              jaar
              gemeente
              minstensMaandelijks____
              minstensWekelijks____
              nooit_eenUitzonderlijkeKeer____
              indicator
            }
          }
        }
        ambitie2bench2: allGsVitalCitiesDataMoS04 {
          edges {
            node {
              jaar
              gemeente
              neutraal____
              oneens____
              eens____
              indicator
            }
          }
        }
        ambitie2bench3: allGsVitalCitiesDataMoS09(
          filter: { item: { eq: "Autoluwe en autovrije zones" } }
        ) {
          edges {
            node {
              jaar
              gemeente
              eens____
              neutraal____
              oneens____
              item
              indicator
            }
          }
        }
        ambitie2bench4: allGsVitalCitiesDataMoS09(
          filter: { item: { eq: "Deelsystemen" } }
        ) {
          edges {
            node {
              jaar
              gemeente
              eens____
              neutraal____
              oneens____
              item
              indicator
            }
          }
        }
        ambitie2bench5: allGsVitalCitiesDataMoS13(
          filter: { item: { eq: "Lidmaatschap autodelen" } }
        ) {
          edges {
            node {
              jaar
              resultaatGemeente
              item
              indicator
              gemeente
            }
          }
        }
        ambitie2bench6: allGsVitalCitiesDataMoS13(
          filter: { item: { eq: "Lidmaatschap fietsdelen" } }
        ) {
          edges {
            node {
              jaar
              resultaatGemeente
              indicator
              item
              gemeente
            }
          }
        }
        ambitie3bench1: allGsVitalCitiesDataMoS01(
          filter: { item: { eq: "Fietspaden in goede staat" } }
        ) {
          edges {
            node {
              jaar
              gemeente
              eens____
              neutraal____
              oneens____
              item
              indicator
            }
          }
        }
        ambitie3bench2: allGsVitalCitiesDataMoS01(
          filter: { item: { eq: "Straten en pleinen in goede staat" } }
        ) {
          edges {
            node {
              jaar
              gemeente
              eens____
              neutraal____
              oneens____
              item
              indicator
            }
          }
        }
        ambitie3bench3: allGsVitalCitiesDataMoS01(
          filter: { item: { eq: "Voetpaden in goede staat" } }
        ) {
          edges {
            node {
              jaar
              gemeente
              eens____
              neutraal____
              oneens____
              item
              indicator
            }
          }
        }
        ambitie3bench4: allGsVitalCitiesDataMoS03 {
          edges {
            node {
              jaar
              gemeente
              eens____
              neutraal____
              oneens____
              indicator
            }
          }
        }
        ambitie3bench5: allGsVitalCitiesDataMoS09(
          filter: { item: { eq: "Fietsinfrastructuur" } }
        ) {
          edges {
            node {
              jaar
              gemeente
              eens____
              neutraal____
              oneens____
              item
              indicator
            }
          }
        }
        ambitie3bench6: allGsVitalCitiesDataMoS02 {
          edges {
            node {
              jaar
              gemeente
              eens____
              neutraal____
              oneens____
              indicator
            }
          }
        }
        ambitie3bench7: allGsVitalCitiesDataMoS06 {
          edges {
            node {
              jaar
              gemeente
              eens____
              neutraal____
              oneens____
              indicator
            }
          }
        }
        ambitie4bench1: allGsVitalCitiesDataCuS11 {
          edges {
            node {
              jaar
              gemeente
              minstensMaandelijks____
              minstensWekelijks____
              nooit_eenUitzonderlijkeKeer____
              indicator
            }
          }
        }
        ambitie4bench2: allGsVitalCitiesDataCuS10(
          filter: { item: { eq: "Sporten in eigen gemeente" } }
        ) {
          edges {
            node {
              jaar
              gemeente
              _12KeerOfMinder____
              meerDan12Keer____
              nooit____
              item
              indicator
            }
          }
        }
        ambitie4bench3: allGsVitalCitiesDataCuS10(
          filter: { item: { eq: "Sporten in andere gemeente" } }
        ) {
          edges {
            node {
              jaar
              gemeente
              _12KeerOfMinder____
              meerDan12Keer____
              nooit____
              item
              indicator
            }
          }
        }
        ambitie4bench4: allGsVitalCitiesDataCuS13 {
          edges {
            node {
              jaar
              gemeente
              eens____
              neutraal____
              oneens____
              indicator
            }
          }
        }
        ambitie4bench5: allGsVitalCitiesDataCuS12(
          filter: { item: { eq: "Tevredenheid over sportvoorzieningen" } }
        ) {
          edges {
            node {
              jaar
              gemeente
              neutraal____
              ontevreden____
              tevreden____
              item
              indicator
            }
          }
        }
        ambitie4bench6: allGsVitalCitiesDataCuS07 {
          edges {
            node {
              jaar
              indicator
              gemeente
              percentage
            }
          }
        }
        ambitie5bench1: allGsVitalCitiesDataCuS24(
          filter: { item: { eq: "Voldoende geschikte plekken voor jeugd" } }
        ) {
          edges {
            node {
              jaar
              gemeente
              eens____
              neutraal____
              oneens____
              item
              indicator
            }
          }
        }
        ambitie5bench2: allGsVitalCitiesDataCuS24(
          filter: {
            item: {
              eq: "Voldoende speelvoorzieningen voor kinderen en jongeren"
            }
          }
        ) {
          edges {
            node {
              jaar
              gemeente
              eens____
              neutraal____
              oneens____
              item
              indicator
            }
          }
        }
        ambitie5bench3: allGsVitalCitiesDataCuS21 {
          edges {
            node {
              jaar
              gemeente
              eens____
              neutraal____
              oneens____
              indicator
            }
          }
        }
        ambitie6bench1: allGsVitalCitiesDataSaS18 {
          edges {
            node {
              jaar
              gemeente
              eens____
              neutraal____
              oneens____
              indicator
            }
          }
        }
        ambitie6bench2: allGsVitalCitiesDataSaS17(
          filter: { item: { eq: "Voldoende ontmoetingsplekken" } }
        ) {
          edges {
            node {
              jaar
              gemeente
              eens____
              neutraal____
              oneens____
              item
              indicator
            }
          }
        }
        ambitie6bench3: allGsVitalCitiesDataSaS17(
          filter: { item: { eq: "Voldoende rustplekken" } }
        ) {
          edges {
            node {
              jaar
              gemeente
              eens____
              neutraal____
              oneens____
              item
              indicator
            }
          }
        }
        ambitie7bench1: allGsVitalCitiesDataKlS01(
          filter: {
            item: { eq: "Bezoek park, bos, groenzone in andere gemeente" }
          }
        ) {
          edges {
            node {
              jaar
              gemeente
              meerDan12Keer____
              nietAanwezigInDeEigenGemeente____
              nooit____
              tot12Keer____
              item
              indicator
            }
          }
        }
        ambitie7bench2: allGsVitalCitiesDataKlS01(
          filter: {
            item: { eq: "Bezoek park, bos, groenzone in eigen gemeente" }
          }
        ) {
          edges {
            node {
              jaar
              gemeente
              meerDan12Keer____
              nietAanwezigInDeEigenGemeente____
              nooit____
              tot12Keer____
              item
              indicator
            }
          }
        }
        ambitie7bench3: allGsVitalCitiesDataKlS02 {
          edges {
            node {
              jaar
              gemeente
              neutraal____
              ontevreden____
              tevreden____
              indicator
            }
          }
        }
        ambitie7bench4: allGsVitalCitiesDataKlS03 {
          edges {
            node {
              jaar
              gemeente
              eens____
              neutraal____
              oneens____
              indicator
            }
          }
        }
      }
    `,
  )

  const allAmbitionData: any[] = [
    ambitie1bench1,
    ambitie1bench2,
    ambitie1bench3,
    ambitie1bench4,
    ambitie2bench1,
    ambitie2bench2,
    ambitie2bench3,
    ambitie2bench4,
    ambitie2bench5,
    ambitie2bench6,
    ambitie3bench1,
    ambitie3bench2,
    ambitie3bench3,
    ambitie3bench4,
    ambitie3bench5,
    ambitie3bench6,
    ambitie3bench7,
    ambitie4bench1,
    ambitie4bench2,
    ambitie4bench3,
    ambitie4bench4,
    ambitie4bench5,
    ambitie4bench6,
    ambitie5bench1,
    ambitie5bench2,
    ambitie5bench3,
    ambitie6bench1,
    ambitie6bench2,
    ambitie6bench3,
    ambitie7bench1,
    ambitie7bench2,
    ambitie7bench3,
    ambitie7bench4,
  ]

  const contextB = useContext(ThemeContext)

  const handleSearch = (input: any) => {
    setSearchQuery(input)
    const results = searchList(allAmbitionData, input, false)

    if (results?.includes(selectedCities[0])) {
      results.splice(results.indexOf(selectedCities[0]), 1)
    }
    if (results?.includes(selectedCities[1])) {
      results.splice(results.indexOf(selectedCities[1]), 1)
    }

    setFilteredCities(results)
  }

  const handleCitySelectionShown = (index: number) => {
    if (index == 0) {
      setShowCitySelection([!showCitySelection[0], false])
    } else {
      setShowCitySelection([false, !showCitySelection[1]])
    }

    setSearchQuery('')
    setFilteredCities([])
  }

  const handleCitySelected = (c: string, index: number) => {
    setSearchQuery('')
    if (index == 0) {
      setSelectedCities([c, selectedCities[1]])
    } else {
      setSelectedCities([selectedCities[0], c])
    }

    setShowCitySelection([false, false])
    setFilteredCities([])
  }

  const changeTyped = async (value: string) => {
    setTyped(value)
  }

  const netlifyFunctions = async (data: object) => {
    const errors: netlifyError = await genPDF(data)
    setNetlifyError((currentError: netlifyError) => {
      currentError.google = errors.google
      currentError.changed = errors.changed
      return { ...currentError }
    })
  }

  const checkInfo = async () => {
    let errorsMail = true
    let errorsFirstname = true
    let errorsLastname = true
    let errorsPlace = true

    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/.test(info.mail)) {
      setErrors((currentErrors: FormError) => {
        currentErrors.mailError = 'Dit is geen geldige email'
        return { ...currentErrors }
      })
    } else {
      errorsMail = false
      setErrors((currentErrors: FormError) => {
        currentErrors.mailError = ''
        return { ...currentErrors }
      })
    }
    if (info.firstName.length < 2) {
      setErrors((currentErrors: FormError) => {
        currentErrors.firstNameError = 'Moet min. 2 letters zijn'
        return { ...currentErrors }
      })
    } else {
      errorsFirstname = false
      setErrors((currentErrors: FormError) => {
        currentErrors.firstNameError = ''
        return { ...currentErrors }
      })
    }
    if (info.lastName.length < 2) {
      setErrors((currentErrors: FormError) => {
        currentErrors.lastNameError = 'Moet min. 2 letters zijn'
        return { ...currentErrors }
      })
    } else {
      errorsLastname = false
      setErrors((currentErrors: FormError) => {
        currentErrors.lastNameError = ''
        return { ...currentErrors }
      })
    }

    getAllCities(allAmbitionData).forEach((city: string) => {
      if (city.toLowerCase() == info.place.toLowerCase()) {
        errorsPlace = false
      }
    })

    if (errorsPlace) {
      setErrors((currentErrors: FormError) => {
        currentErrors.placeError = 'Deze plaats is niet geldig'
        return { ...currentErrors }
      })
    } else {
      setErrors((currentErrors: FormError) => {
        currentErrors.placeError = ''
        return { ...currentErrors }
      })
    }

    if (!errorsMail && !errorsFirstname && !errorsLastname && !errorsPlace) {
      const dataAmb = getPdfData(allData, typed, 'Vlaams gewest')
      const netlifyData = {
        data: dataAmb,
        place: info.place,
        firstName: info.firstName,
        lastName: info.lastName,
        mail: info.mail,
        newsletter: info.newsletter,
      }
      netlifyFunctions(netlifyData)
    }
  }

  useEffect(() => {
    const timeOutId = setTimeout(
      () => setSuggestions(searchList(allAmbitionData, typed, true)),
      1000,
    )
    return () => clearTimeout(timeOutId)
  }, [typed])

  useEffect(() => {
    if (cmsData.goodPracs) {
      const data: Practice[] = []

      cmsData.goodPracs.forEach((p: goodPractice) => {
        let practice: Practice = {
          titel: '',
          themas: [],
          extra: [],
          paragrafen: [],
          datum: '',
          image: '',
        }

        practice.titel = p.title
        practice.themas = p.themes
        practice.image = p.image

        const datum = new Date(p.date)
        practice.datum = `${datum.getDate()} ${getMonthFromIndex(
          datum.getMonth(),
        )} ${datum.getFullYear()}`

        let titles = p.text.match(/#+ .+\n{2,}/g)
        let paragraphs = p.text.split(/#+ .+\n{2,}/)
        paragraphs.shift()
        let parResults: any = []

        titles?.forEach((title: string, index: number) => {
          //@ts-ignore
          titles[index] = title.replaceAll('#', '').replaceAll('\n', '').trim()
        })

        paragraphs.forEach((paragraaf: string, index: number) => {
          const proBody = paragraaf
            .replace(/\n+$/, '')
            .replace(/^\* /, '• ')
            .replace(/\n\* /g, '\n\n • ')

          let matches = [...proBody.matchAll(/\[.*?\] ?\(.*?\)/g)].concat([
            ...proBody.matchAll(/\<.*?\>/g),
          ])
          const links: any[] = []

          matches.forEach((m: any, index: number) => {
            let result
            if (m[0].includes('[')) {
              const parts = m[0].split(/\] ?\(/)
              let bron: Bron = {
                naam: parts[0].replace(/^\[/, ''),
                url: parts[1]
                  .replace(/^<\*/, '')
                  .replace(/^</, '')
                  .replace(/\)$/, '')
                  .replace(/>$/, ''),
              }

              result = [bron, m[0]]
            } else {
              result = [m[0].replace(/</, ' ').replace(/>/, ' '), m[0]]
            }

            links.push(result)
          })

          let htmlResult = proBody

          links.forEach((link: any) => {
            // htmlResult =
            //   htmlResult.substring(0, link[1]) +
            //   `<a href="${link[0].url}">${link[0].naam}</a>` +
            //   htmlResult.substring(link[1] + link[2])

            if (link[1].includes('[')) {
              htmlResult = htmlResult.replace(
                link[1],
                `<a class="${
                  contextB.dark ? 'text-lightPurpleDesat' : 'text-purple'
                } font-semibold underline js-switchcolor" href="${
                  link[0].url
                }">${link[0].naam.replace(/\\#/, '#')}</a>`,
              )
            } else {
              htmlResult = htmlResult.replace(
                link[1],
                `<a class="${
                  contextB.dark ? 'text-lightPurpleDesat' : 'text-purple'
                } font-semibold underline js-switchcolor" href="${link[0]}">${
                  link[0]
                }</a>`,
              )
            }
          })

          const par: Paragraaf = {
            //@ts-ignore
            header: titles[index],
            body: htmlResult
              .replace(/^\*\*/, ' <strong class="font-semibold">')
              .replace(/\*\*$/, ' </strong>')
              .replace(/ \*\*/g, ' <strong class="font-semibold">')
              .replace(/\n\*\*/g, '\n<strong class="font-semibold">')
              .replace(/\*\*\n/g, ' </strong>\n')
              .replace(/\*\* /g, ' </strong>')
              .replace(/\*\*,/, ' </strong>,')
              .replace(/\*\*\./, ' </strong>.')
              .replace(/\*\*!/, ' </strong>!')
              .replace(/\*\*\?/, ' </strong>?'),
          }
          parResults.push(par)
        })

        practice.paragrafen = parResults

        let regLinks = p.resources.match(/[^(]<.+>/g)
        let hyperLinks = p.resources.match(/\[.+\] ?\n?\(.+\)/g)
        let processedLinks: Bron[] = []

        regLinks?.forEach((link: string) => {
          const bron: Bron = {
            naam: '',
            url: link.replaceAll('\n', '').replace(/^</, '').replace(/>$/, ''),
          }

          processedLinks.push(bron)
        })
        hyperLinks?.forEach((link: string) => {
          const l = link.split(/\] ?\n?\(/)
          let url = ''

          const naam = l[0].replace(/^\[/, '')
          if (l[1]) {
            url = l[1].replace(/\)$/, '').replace(/^</, '').replace(/>$/, '')
          }

          const bron: Bron = {
            naam: naam,
            url: url,
          }

          processedLinks.push(bron)
        })
        practice.extra = processedLinks

        data.push(practice)
      })

      setPractices(data)
    }
  }, [cmsData.goodPracs, contextB])

  useEffect(() => {
    let bronnen: intBron[] = []
    let hoeList: hoeWaarom[] = []
    let waaromList: hoeWaarom[] = []
    let goodPracs: goodPractice[] = []
    let titles: ambitionTitle[] = []

    if (locationShort) {
      for (let item of cms.nodes) {
        if (item.frontmatter.ambitions == null) {
          item.frontmatter.ambitions = ['']
        }
        if (
          item.parent.internal.description.includes('hoeopl') &&
          (item.frontmatter.ambition == locationShort ||
            item.frontmatter.ambitions.includes(locationShort))
        ) {
          hoeList.push({
            text: item.frontmatter.text,
            ambition: item.frontmatter.ambition,
            animation: item.frontmatter.animation,
          })
        } else if (
          item.parent.internal.description.includes('waaromopl') &&
          (item.frontmatter.ambition == locationShort ||
            item.frontmatter.ambitions.includes(locationShort))
        ) {
          waaromList.push({
            text: item.frontmatter.text,
            ambition: item.frontmatter.ambition,
            animation: item.frontmatter.animation,
          })
        } else if (
          item.parent.internal.description.includes('intbron') &&
          (item.frontmatter.ambition == locationShort ||
            item.frontmatter.ambitions.includes(locationShort))
        ) {
          bronnen.push({
            title: item.frontmatter.title,
            link: item.frontmatter.link,
            text: item.frontmatter.text,
          })
        } else if (
          item.parent.internal.description.includes('goodprac') &&
          item.frontmatter.thema.includes(locationShort)
        ) {
          goodPracs.push({
            title: item.frontmatter.title,
            date: item.frontmatter.date,
            themes: item.frontmatter.thema,
            text: item.frontmatter.text,
            extra: item.frontmatter.extra,
            image: item.frontmatter.image,
            resources: item.frontmatter.resources,
          })
        } else if (
          item.parent.internal.description.includes('header') &&
          item.frontmatter.ambition == locationShort
        ) {
          setCmsData((u: cmsInt) => {
            u.header = {
              title: item.frontmatter.title,
              subtitle: item.frontmatter.subtitle,
              image: item.frontmatter.image,
              tag: item.frontmatter.tag,
            }
            return { ...u }
          })
          for (let i of allImages.nodes) {
            if (
              i.gatsbyImageData.images.fallback.src.includes(
                item.frontmatter.image,
              )
            ) {
              setImg(getImage(i))
            }
          }
        } else if (
          item.parent.internal.description.includes('problem') &&
          (item.frontmatter.ambition == locationShort ||
            item.frontmatter.ambitions.includes(locationShort))
        ) {
          setCmsData((u: cmsInt) => {
            u.problem = {
              text: item.frontmatter.text,
              bold: item.frontmatter.boldpart,
            }
            return { ...u }
          })
        } else if (
          item.parent.internal.description.includes('titels') &&
          (item.frontmatter.ambitions.includes('Algemene ambitie') ||
            item.frontmatter.ambitions.includes(locationShort))
        ) {
          titles.push({
            title: item.frontmatter.title,
            subtitle: item.frontmatter.subtitle,
            section: item.frontmatter.section,
            ambitions: item.frontmatter.ambitions,
          })
        }
      }
      setCmsData((u: cmsInt) => {
        u.sectionTitles = titles
        u.hows = hoeList
        u.whys = waaromList
        u.intBron = bronnen
        u.goodPracs = goodPracs
        return u
      })
      setAllData(allAmbitionData)
    }
  }, [locationShort])

  const handleClick = (e: any) => {
    const isOutsideStad = !e.target.closest('#inputStad')
    const isOutsideSelection1 = !e.target.closest('#gemeenteselector1')
    const isOutsideSelection2 = !e.target.closest('#gemeenteselector2')

    if (isOutsideStad) {
      setSuggestions([])
    }
    if (isOutsideSelection1 && isOutsideSelection2) {
      setShowCitySelection([false, false])
    }
  }

  if (!hasMounted) {
    return null
  }

  return (
    <ThemeContext.Consumer>
      {(context) => (
        <main
          className={`font-poppins font-light selection:text-white ${
            context.dark
              ? 'bg-dark selection:bg-pinkDesat '
              : 'selection:bg-pink'
          }`}
        >
          <Topnavigation section="#CallToAction" />
          <div
            className={`absolute top-0 left-0 h-24 w-full tabletportrait:w-1/2 ${
              context.dark ? 'bg-white bg-opacity-[0.08]' : 'bg-purple'
            }`}
          ></div>
          <div
            className={`absolute top-0 right-0 hidden h-24 w-full tabletportrait:block tabletportrait:w-1/2 ${
              context.dark ? 'bg-dark' : 'bg-white'
            }`}
          ></div>
          <div
            className={`absolute top-0 right-0 hidden h-24 w-full tabletportrait:block tabletportrait:w-1/2  ${
              context.dark
                ? 'bg-white bg-opacity-[0.08] columnbreak:bg-dark'
                : 'bg-purple columnbreak:bg-white'
            }`}
          ></div>
          <header
            className={`flex w-full flex-col columnbreak:flex-row columnbreak:items-center ${
              context.dark ? '4K:bg-white 4K:bg-opacity-[0.08]' : '4K:bg-purple'
            }`}
          >
            <section
              className={`h-full w-full p-7 pb-5 columnbreak:w-1/2 columnbreak:p-14 columnbreak:pb-10 ${
                context.dark
                  ? 'bg-white bg-opacity-[0.08] 4K:bg-opacity-0'
                  : 'bg-purple'
              }`}
            >
              <button
                onClick={() => navigate('../')}
                className="mb-11 flex flex-row items-center text-center"
              >
                <ChevronLeft className="mr-6 text-white opacity-70" />
                <p
                  className={`text-lg font-semibold text-opacity-90 columnbreak:text-2xl ${
                    context.dark
                      ? 'text-white hover:text-lightPurpleDesat focus-visible:text-lightPurpleDesat'
                      : 'text-white hover:text-lightGray focus-visible:text-lightGray'
                  }`}
                >
                  naar overzicht ambities
                </p>
              </button>
              <Tag
                text={cmsData.header.tag!}
                classes={
                  context.dark
                    ? 'bg-pinkDesat text-white'
                    : 'bg-pink text-white'
                }
              />
              <h1 className="mb-8 max-w-2xl font-raleway text-3xl font-xxbold leading-tight text-white tabletportrait:text-4xl laptop:text-6xl laptopL:text-7xl">
                {cmsData.header.title}
              </h1>
              <p className="mb-12 max-w-2xl text-xl font-xlight leading-6 text-white opacity-75 laptop:text-2xl">
                {cmsData.header.subtitle}
              </p>
              <p
                className={`mb-2 font-semibold ${
                  context.dark ? 'text-lightPurpleDesat' : 'text-lightPurple'
                }`}
              >
                scroll
              </p>
              <ArrowDown
                className={`animate-bounce ${
                  context.dark ? 'text-lightPurpleDesat' : 'text-lightPurple'
                }`}
              />
            </section>
            <section className="h-full w-full columnbreak:w-1/2">
              <GatsbyImage
                image={img}
                alt="Header image"
                className="h-full w-full"
              />
            </section>
          </header>
          <div
            className={`mx-auto max-w-[104rem]  tabletportrait:mt-[-3.8rem] ${
              context.dark ? 'text-white' : 'text-dark'
            }`}
          >
            <FadeInSection>
              <section
                className="tab mx-4 mt-16 grid grid-cols-1 gap-6 mobile:mx-8 columnbreak:mx-16 columnbreak:gap-12"
                id="Location"
              >
                <div className="flex flex-col">
                  <div className="flex items-center justify-between gap-4">
                    <h2
                      className={`flex h-full flex-col justify-end pb-2 font-raleway text-2xl font-xxbold tabletportrait:text-3xl laptop:text-4xl ${
                        context.dark ? 'opacity-90' : ''
                      }`}
                    >
                      {`Huidige situatie in ${selectedCities[0]}`}
                    </h2>
                    <div className="mr-2 hidden text-sm tabletportrait:flex tabletportrait:flex-col laptopL:text-lg">
                      <div className="rotate-12">
                        <Lottie
                          className="m-auto h-10 w-10 laptopL:h-20 laptopL:w-20"
                          loop={true}
                          animationData={replaceColor(
                            '#000000',
                            '#91959c',
                            lightbulb,
                          )}
                        />
                        <p className="text-center text-[#91959c]">
                          Selecteer hier <br></br> je stad/gemeente
                        </p>
                      </div>
                      <Lottie
                        className="mr-24 h-28 w-28 -rotate-12 laptopL:h-36 laptopL:w-36"
                        loop={true}
                        animationData={replaceColor(
                          '#000000',
                          '#91959c',
                          long_arrow,
                        )}
                      />
                    </div>
                  </div>

                  <div className="flex flex-col pt-6 tabletportrait:flex-row tabletportrait:justify-between">
                    <div className="relative mt-4 flex w-full max-w-xs flex-col tabletportrait:mt-0">
                      <label className="text-lg font-bold  opacity-90">
                        Gemeente of cluster
                      </label>
                      <div className="w-full max-w-sm" id="gemeenteselector1">
                        <div
                          className={`mt-2 flex flex-row items-center justify-between border-[1px]  border-opacity-25 py-2 px-4 ${
                            context.dark
                              ? 'border-lightGray bg-darkGray focus-within:border-pink hover:border-pink'
                              : 'border-dark focus-within:border-pink hover:border-pink'
                          }`}
                          onClick={() => handleCitySelectionShown(0)}
                        >
                          <div className="flex flex-row items-center">
                            <span
                              className={`mr-1 h-4  w-4 rounded-full ${
                                context.dark ? 'bg-pinkDesat' : 'bg-pink'
                              }`}
                            />
                            <input
                              type="text"
                              className={`pointer-events-none text-lg font-medium ${
                                context.dark ? 'bg-darkGray' : ''
                              }`}
                              value={selectedCities[0]}
                              placeholder="Maak een keuze"
                              readOnly
                            />
                          </div>
                          <ChevronDown className="ml-2" />
                        </div>
                        {showCitySelection[0] ? (
                          <div
                            className={`relative z-20 w-full border-[1px] border-t-0  border-opacity-25  pt-1 tabletportrait:absolute ${
                              context.dark
                                ? 'border-lightGray bg-darkGray'
                                : 'border-dark bg-white'
                            }`}
                          >
                            <div
                              className={`m-1 mt-0 flex flex-row border-[1px] border-opacity-25 py-2 px-4 text-lg font-medium focus-within:border-2 focus-within:border-pinkDesat active:border-2 active:border-pinkDesat ${
                                context.dark
                                  ? 'border-lightGray focus-within:border-pink hover:border-pink'
                                  : 'border-dark focus-within:border-pink hover:border-pink'
                              }`}
                            >
                              <input
                                id="gemeente2"
                                type="text"
                                className={`w-full appearance-none outline-none ${
                                  context.dark ? 'bg-darkGray' : ''
                                }`}
                                value={searchQuery}
                                onChange={(e) => {
                                  handleSearch(e.target.value)
                                }}
                              />
                              <label htmlFor="gemeente2">
                                <Search className="ml-2" />
                              </label>
                            </div>
                            <ul className="max-h-80 w-full overflow-y-auto">
                              {filteredCities && filteredCities?.length >= 1
                                ? filteredCities.map((city, index) => (
                                    <li
                                      className={`py-1 px-4 text-lg hover:bg-opacity-10 ${
                                        context.dark
                                          ? 'hover:bg-lightGray'
                                          : 'hover:bg-dark'
                                      }`}
                                      onClick={() =>
                                        handleCitySelected(city, 0)
                                      }
                                      key={city}
                                    >
                                      {city}
                                    </li>
                                  ))
                                : getAllCities(allAmbitionData).map((city) => {
                                    if (
                                      city !== selectedCities[0] &&
                                      city !== selectedCities[1] &&
                                      !searchQuery
                                    ) {
                                      return (
                                        <li
                                          className={`py-1 px-4 text-lg hover:bg-opacity-10 ${
                                            context.dark
                                              ? 'hover:bg-lightGray'
                                              : 'hover:bg-dark'
                                          }`}
                                          onClick={() =>
                                            handleCitySelected(city, 0)
                                          }
                                          key={city}
                                        >
                                          {city}
                                        </li>
                                      )
                                    }
                                  })}
                            </ul>
                          </div>
                        ) : null}
                      </div>
                    </div>
                    <div className="relative mt-4 flex w-full max-w-xs flex-col tabletportrait:mt-0">
                      <label className="text-lg font-bold  opacity-90">
                        Vergelijk met...
                      </label>
                      <div className="w-full max-w-sm" id="gemeenteselector2">
                        <div
                          className={`mt-2 flex flex-row items-center justify-between border-[1px]  border-opacity-25 py-2 px-4 ${
                            context.dark
                              ? 'border-lightGray bg-darkGray focus-within:border-purpleDesat hover:border-purpleDesat'
                              : 'border-dark focus-within:border-purple hover:border-purple'
                          }`}
                          onClick={() => handleCitySelectionShown(1)}
                        >
                          <div className="flex flex-row items-center">
                            <span
                              className={`mr-1 h-4  w-4 rounded-full ${
                                context.dark ? 'bg-purpleDesat ' : 'bg-purple '
                              }`}
                            />
                            <input
                              type="text"
                              className={`pointer-events-none text-lg font-medium ${
                                context.dark ? 'bg-darkGray' : ''
                              }`}
                              value={selectedCities[1]}
                              placeholder="Maak een keuze"
                              readOnly
                            />
                          </div>
                          <ChevronDown className="ml-2" />
                        </div>
                        {showCitySelection[1] ? (
                          <div
                            className={`relative z-20 w-full border-[1px] border-t-0  border-opacity-25  pt-1 tabletportrait:absolute ${
                              context.dark
                                ? 'border-lightGray bg-darkGray '
                                : 'border-dark bg-white'
                            }`}
                          >
                            <div
                              className={`m-1 mt-0 flex flex-row border-[1px] border-opacity-25 py-2 px-4 text-lg font-medium focus-within:border-2 focus-within:border-purple hover:border-purple active:border-2 active:border-purple ${
                                context.dark
                                  ? 'border-lightGray '
                                  : 'border-dark '
                              }`}
                            >
                              <input
                                id="gemeente2"
                                type="text"
                                className={`w-full appearance-none outline-none ${
                                  context.dark ? 'bg-darkGray' : ''
                                }`}
                                value={searchQuery}
                                onChange={(e) => {
                                  handleSearch(e.target.value)
                                }}
                              />
                              <label htmlFor="gemeente2">
                                <Search className="ml-2" />
                              </label>
                            </div>
                            <ul className="max-h-80 w-full overflow-y-auto">
                              {filteredCities && filteredCities?.length >= 1
                                ? filteredCities.map((city, index) => (
                                    <li
                                      className={`py-1 px-4 text-lg hover:bg-opacity-10 ${
                                        context.dark
                                          ? 'hover:bg-lightGray'
                                          : 'hover:bg-dark'
                                      }`}
                                      onClick={() =>
                                        handleCitySelected(city, 1)
                                      }
                                      key={city}
                                    >
                                      {city}
                                    </li>
                                  ))
                                : getAllCities(allAmbitionData).map((city) => {
                                    if (
                                      city !== selectedCities[0] &&
                                      city !== selectedCities[1] &&
                                      !searchQuery
                                    ) {
                                      return (
                                        <li
                                          className={`py-1 px-4 text-lg hover:bg-opacity-10 ${
                                            context.dark
                                              ? 'hover:bg-lightGray'
                                              : 'hover:bg-dark'
                                          }`}
                                          onClick={() =>
                                            handleCitySelected(city, 1)
                                          }
                                          key={city}
                                        >
                                          {city}
                                        </li>
                                      )
                                    }
                                  })}
                            </ul>
                          </div>
                        ) : null}
                      </div>
                    </div>
                  </div>
                </div>
                {graphData && graphData.length >= 1 ? (
                  <section>
                    <label className="font-mono text-base font-xxbold opacity-50 tabletportrait:text-lg laptop:text-xl">
                      HOEVEEL % VAN INWONERS ...
                    </label>
                    <div className="mt-4 flex flex-col gridbreak:grid gridbreak:auto-rows-fr gridbreak:grid-cols-5 gridbreak:items-center">
                      {graphData[0].map((bench: Benchmark, index: number) => {
                        if (
                          bench.label ==
                            'Verplaatsingen vrije tijd: per vervoermiddel' ||
                          bench.label ==
                            'Verplaatsingen woon-werk/woon-school: dominant vervoersmiddel'
                        ) {
                          return null
                        } else {
                          return [
                            <label
                              key={bench.label}
                              className="col-span-1 mt-4 py-4 pr-2 font-medium gridbreak:mt-0"
                            >
                              {getLabelChart(bench.label)}
                            </label>,
                            <div
                              key={bench.data[0]}
                              className={`col-span-4 flex h-full flex-col justify-center border-l-2  border-opacity-50 py-6 ${
                                context.dark
                                  ? 'border-lightGray'
                                  : 'border-dark'
                              }`}
                            >
                              <Barchart
                                benchCity1={bench}
                                benchCity2={graphData[1][index]}
                              />
                            </div>,
                          ]
                        }
                      })}
                    </div>

                    {locationShort == 'actief bewegen' ? (
                      <div className="mt-16">
                        <div className="flex flex-col gridbreak:mb-6 gridbreak:flex-row gridbreak:items-center gridbreak:justify-between">
                          <label className="mb-1 font-mono text-base font-xxbold opacity-50 tabletportrait:text-lg laptop:text-xl">
                            {'VERPLAATSINGEN PER VERVOERSMIDDEL (VAAK/ALTIJD) '}
                          </label>
                          <button
                            className="flex w-full max-w-[24rem] flex-row items-stretch text-sm font-medium focus-within:border-2 mobileM:text-base mobileL:text-lg"
                            onClick={() => {
                              setToggleBenches(!toggleBenches)
                            }}
                          >
                            <span
                              className={`md:w-1/2 flex w-full  max-w-[14rem] flex-col justify-center rounded-l-xl border-2 py-2 ${
                                context.dark
                                  ? toggleBenches
                                    ? 'border-pinkDesat border-opacity-90 bg-pinkDesat bg-opacity-90 text-white'
                                    : 'border-pinkDesat hover:bg-neutral hover:bg-opacity-10 hover:text-pink'
                                  : toggleBenches
                                  ? 'border-pink border-opacity-90 bg-pink bg-opacity-90 text-white'
                                  : 'border-pink hover:bg-neutral hover:text-purple'
                              }`}
                            >
                              Woon-werk/school
                            </span>
                            <span
                              className={`md:w-1/2 flex w-full  max-w-[14rem] flex-col justify-center rounded-r-xl border-2 border-l-0 py-2 ${
                                context.dark
                                  ? !toggleBenches
                                    ? 'border-pinkDesat border-opacity-90 bg-pinkDesat bg-opacity-90 text-white'
                                    : 'border-pinkDesat hover:bg-neutral hover:bg-opacity-10 hover:text-pink'
                                  : !toggleBenches
                                  ? 'border-pink border-opacity-90 bg-pink bg-opacity-90 text-white'
                                  : 'border-pink hover:bg-neutral hover:text-purple'
                              }`}
                            >
                              Vrije tijd
                            </span>
                          </button>
                        </div>
                        <div className="flex flex-col gridbreak:grid gridbreak:auto-rows-fr gridbreak:grid-cols-5 gridbreak:items-center">
                          {graphData[0].map(
                            (bench: Benchmark, index: number) => {
                              if (
                                bench.label ==
                                  'Verplaatsingen vrije tijd: per vervoermiddel' &&
                                !toggleBenches
                              ) {
                                const transportData1: PercentageData[] = []
                                const transportData2: PercentageData[] = []

                                if (bench.data.length >= 1) {
                                  bench.data.forEach(
                                    (item: any, index: number) => {
                                      const p1: PercentageData = {
                                        label: item.item,
                                        percentage: item.vaak_altijd____,
                                      }
                                      transportData1.push(p1)

                                      let p2: PercentageData = {
                                        label: '',
                                        percentage: '',
                                      }
                                      if (
                                        graphData[1].length >= 1 &&
                                        graphData[1][3] &&
                                        graphData[1][3].data.length >= 1
                                      ) {
                                        p2 = {
                                          label:
                                            graphData[1][3].data[index].item,
                                          percentage:
                                            graphData[1][3].data[index]
                                              .vaak_altijd____,
                                        }
                                        transportData2.push(p2)
                                      }
                                    },
                                  )

                                  return transportData1.map(
                                    (p: PercentageData, index: number) => [
                                      <label
                                        key={p.label}
                                        className="col-span-1 mt-4 py-4 pr-2 font-medium gridbreak:mt-0"
                                      >
                                        {p.label}
                                      </label>,
                                      <div
                                        key={p.label + p.percentage}
                                        className={`col-span-4 flex h-full flex-col justify-center border-l-2  border-opacity-50 py-6 ${
                                          context.dark
                                            ? 'border-lightGray'
                                            : 'border-dark'
                                        }`}
                                      >
                                        <Barchartgeneric
                                          percentage1={p.percentage}
                                          percentage2={
                                            transportData2.length ==
                                            transportData1.length
                                              ? transportData2[index].percentage
                                              : null
                                          }
                                        />
                                      </div>,
                                    ],
                                  )
                                } else {
                                  return (
                                    <p key={index}>geen data beschikbaar</p>
                                  )
                                }
                              } else if (
                                bench.label ==
                                  'Verplaatsingen woon-werk/woon-school: dominant vervoersmiddel' &&
                                toggleBenches
                              ) {
                                if (bench.data.length >= 1) {
                                  return [
                                    <label
                                      key={'auto'}
                                      className="col-span-1 mt-4 py-4 pr-2 font-medium gridbreak:mt-0"
                                    >
                                      Auto
                                    </label>,
                                    <div
                                      key={'auto-data'}
                                      className={`col-span-4 flex h-full flex-col justify-center border-l-2  border-opacity-50 py-6 ${
                                        context.dark
                                          ? 'border-lightGray'
                                          : 'border-dark'
                                      }`}
                                    >
                                      <Barchartgeneric
                                        percentage1={bench.data[0].auto____}
                                        percentage2={
                                          graphData[1][1] &&
                                          graphData[1][1].data.length >= 1
                                            ? graphData[1][1].data[0].auto____
                                            : null
                                        }
                                      />
                                    </div>,
                                    <label
                                      key={'openbaarvervoer'}
                                      className="col-span-1 mt-4 py-4 pr-2 font-medium gridbreak:mt-0"
                                    >
                                      Openbaar vervoer
                                    </label>,
                                    <div
                                      key={'openbaarverver-data'}
                                      className={`col-span-4 flex h-full flex-col justify-center border-l-2  border-opacity-50 py-6 ${
                                        context.dark
                                          ? 'border-lightGray'
                                          : 'border-dark'
                                      }`}
                                    >
                                      <Barchartgeneric
                                        percentage1={
                                          bench.data[0].openbaarVervoer____
                                        }
                                        percentage2={
                                          graphData[1][1] &&
                                          graphData[1][1].data.length >= 1
                                            ? graphData[1][1].data[0]
                                                .openbaarVervoer____
                                            : null
                                        }
                                      />
                                    </div>,
                                    <label
                                      key={'fiets'}
                                      className="col-span-1 mt-4 py-4 pr-2 font-medium gridbreak:mt-0"
                                    >
                                      Fiets
                                    </label>,
                                    <div
                                      key={'fiets-data'}
                                      className={`col-span-4 flex h-full flex-col justify-center border-l-2  border-opacity-50 py-6 ${
                                        context.dark
                                          ? 'border-lightGray'
                                          : 'border-dark'
                                      }`}
                                    >
                                      <Barchartgeneric
                                        percentage1={bench.data[0].fiets____}
                                        percentage2={
                                          graphData[1][1] &&
                                          graphData[1][1].data.length >= 1
                                            ? graphData[1][1].data[0].fiets____
                                            : null
                                        }
                                      />
                                    </div>,
                                    <label
                                      key={'tevoet'}
                                      className="col-span-1 mt-4 py-4 pr-2 font-medium gridbreak:mt-0"
                                    >
                                      Te voet
                                    </label>,
                                    <div
                                      key={'tevoet-data'}
                                      className={`col-span-4 flex h-full flex-col justify-center border-l-2  border-opacity-50 py-6 ${
                                        context.dark
                                          ? 'border-lightGray'
                                          : 'border-dark'
                                      }`}
                                    >
                                      <Barchartgeneric
                                        percentage1={bench.data[0].teVoet____}
                                        percentage2={
                                          graphData[1][1] &&
                                          graphData[1][1].data.length >= 1
                                            ? graphData[1][1].data[0].teVoet____
                                            : null
                                        }
                                      />
                                    </div>,
                                    <label
                                      key={'andere'}
                                      className="col-span-1 mt-4 py-4 pr-2 font-medium gridbreak:mt-0"
                                    >
                                      Andere
                                    </label>,
                                    <div
                                      key={'andere-data'}
                                      className={`col-span-4 flex h-full flex-col justify-center border-l-2  border-opacity-50 py-6 ${
                                        context.dark
                                          ? 'border-lightGray'
                                          : 'border-dark'
                                      }`}
                                    >
                                      <Barchartgeneric
                                        percentage1={bench.data[0].andere____}
                                        percentage2={
                                          graphData[1][1] &&
                                          graphData[1][1].data.length >= 1
                                            ? graphData[1][1].data[0].andere____
                                            : null
                                        }
                                      />
                                    </div>,
                                  ]
                                } else {
                                  return (
                                    <p key={index}>geen data beschikbaar</p>
                                  )
                                }
                              } else {
                                return null
                              }
                            },
                          )}
                        </div>
                      </div>
                    ) : null}
                  </section>
                ) : null}
              </section>
            </FadeInSection>
            <FadeInSection>
              <section
                className="mx-4 mt-32 mb-32 flex flex-col items-center text-center font-poppins mobile:mx-8 columnbreak:mx-16"
                id="Problem"
              >
                <h2
                  className={`mb-5 font-raleway text-xl font-bold tabletportrait:text-3xl laptop:text-4xl ${
                    context.dark ? 'opacity-90' : ''
                  }`}
                >
                  Wat is het probleem?
                </h2>
                <p
                  className={`mb-5 text-sm tabletportrait:text-lg laptop:text-xl ${
                    context.dark ? 'opacity-75' : ''
                  }`}
                >
                  {cmsData.problem.text}
                </p>
                <p
                  className={`text-sm font-bold tabletportrait:text-lg laptop:text-xl ${
                    context.dark ? 'opacity-90' : ''
                  }`}
                >
                  {cmsData.problem.bold}
                </p>
              </section>
            </FadeInSection>
            <FadeInSection>
              <section
                className="mx-4 mb-16 mobile:mx-8 columnbreak:mx-16"
                id="Solution"
              >
                {cmsData.sectionTitles.map((item: ambitionTitle) => {
                  if (item.title.includes('Waarom')) {
                    return (
                      <div key={item.title}>
                        <h2
                          className={`mb-4 font-raleway text-xl font-bold tabletportrait:text-3xl laptop:text-4xl ${
                            context.dark ? 'opacity-90' : ''
                          }`}
                        >
                          {item.title}
                        </h2>
                        <p
                          className={`mb-6 text-sm tabletportrait:text-lg laptop:w-4/5 laptop:text-xl ${
                            context.dark ? 'opacity-75' : ''
                          }`}
                        >
                          {item.subtitle}
                        </p>
                      </div>
                    )
                  }
                })}
                <div className="grid grid-cols-1 items-center justify-center gap-8 gap-y-12 tabletportrait:grid-cols-2 tabletportrait:text-lg laptop:grid-cols-3 laptop:text-xl laptopL:grid-cols-3">
                  {cmsData.whys &&
                    cmsData.whys.map((item: any) => (
                      <Textblock
                        text={item.text}
                        key={item.text}
                        classes={
                          context.dark
                            ? 'bg-lightPurpleDesat bg-opacity-[0.08] text-lightPurpleDesat'
                            : 'bg-lightPink text-purple '
                        }
                        animation={replaceColor(
                          '#000000',
                          '#492784',
                          require(`../assets/animations/${item.animation}.json`),
                        )}
                        animationColor="purple"
                      />
                    ))}
                </div>
              </section>
            </FadeInSection>
            <FadeInSection>
              <section className="mx-4 mb-16 mobile:mx-8 columnbreak:mx-16">
                {cmsData.sectionTitles?.map((item: ambitionTitle) => {
                  if (
                    item.title.includes('Hoe') &&
                    (item.ambitions.includes(String(locationShort)) ||
                      item.ambitions.includes('Algemene ambitie'))
                  ) {
                    return (
                      <h2
                        key={item.title}
                        className={`mb-4 font-raleway text-xl font-bold tabletportrait:text-3xl laptop:text-4xl ${
                          context.dark ? 'opacity-90' : ''
                        }`}
                      >
                        {item.title}
                      </h2>
                    )
                  }
                })}
                <div className="grid grid-cols-1 justify-center gap-8 tabletportrait:grid-cols-2 tabletportrait:text-lg laptop:grid-cols-3 laptopL:grid-cols-4">
                  {cmsData.hows &&
                    cmsData.hows.map((item: hoeWaarom) => (
                      <Textblock
                        key={item.text}
                        text={item.text}
                        classes={`font-medium ${
                          context.dark
                            ? 'bg-lightGreen bg-opacity-[0.08] text-lightGreen'
                            : 'bg-lightGreen text-green'
                        }`}
                        animation={replaceColor(
                          '#000000',
                          '#02866C',
                          require(`../assets/animations/${item.animation}.json`),
                        )}
                        animationColor="green"
                      />
                    ))}
                </div>
              </section>
            </FadeInSection>
            <FadeInSection>
              <section
                className={`px-4 pb-16 tabletportrait:px-8 columnbreak:px-16 ${
                  context.dark ? '' : 'bg-neutral'
                }`}
                id="Resources"
              >
                {cmsData.sectionTitles?.map((item: ambitionTitle) => {
                  if (item.title.includes('bronnen')) {
                    return (
                      <div key={item.title}>
                        <div className="flex flex-col tabletportrait:w-full tabletportrait:flex-row tabletportrait:items-center tabletportrait:justify-between">
                          <h2
                            className={`mb-4 pt-4 font-raleway text-xl font-bold tabletportrait:text-3xl laptop:text-4xl ${
                              context.dark ? 'opacity-90' : ''
                            }`}
                          >
                            {item.title}
                          </h2>
                          {cmsData.intBron && cmsData.intBron.length > 4 ? (
                            <button
                              className={`mb-4 text-left text-base font-semibold hover:opacity-75 tabletportrait:mb-0 tabletportrait:text-lg ${
                                context.dark
                                  ? 'text-lightPurpleDesat'
                                  : 'text-purple'
                              }`}
                              onClick={() => setShowMore(!showMore)}
                            >
                              {showMore ? 'Minder weergeven' : 'Meer weergeven'}
                            </button>
                          ) : null}
                        </div>
                        <p
                          className={`mb-6 text-sm tabletportrait:text-lg laptop:w-4/5 laptop:text-xl ${
                            context.dark ? 'opacity-75' : ''
                          }`}
                        >
                          {item.subtitle}
                        </p>
                      </div>
                    )
                  }
                })}
                <div className="grid grid-cols-1 gap-10 text-sm tabletportrait:grid-cols-2 laptop:text-lg laptopL:grid-cols-4">
                  {/* TODO: See more button om alle interessante bronnen te bekijken */}
                  {cmsData.intBron &&
                    cmsData.intBron.map((item: intBron, val: number) => {
                      if (showMore) {
                        return (
                          <Intsrc
                            key={val}
                            title={item.title}
                            text={item.text}
                            link={item.link}
                          />
                        )
                      } else {
                        if (val < 4) {
                          return (
                            <Intsrc
                              key={val}
                              title={item.title}
                              text={item.text}
                              link={item.link}
                            />
                          )
                        } else {
                          return null
                        }
                      }
                    })}
                </div>
              </section>
            </FadeInSection>
            <FadeInSection>
              <section
                className="px-4 pb-16  tabletportrait:px-8 columnbreak:px-16"
                id="Practices"
              >
                <div className="mb-2 flex items-center justify-between pt-24">
                  <h2
                    className={`font-raleway text-xl font-bold tabletportrait:text-3xl laptop:text-4xl ${
                      context.dark ? 'opacity-90' : ''
                    }`}
                  >
                    Relevante praktijkvoorbeelden
                  </h2>
                </div>
                <p
                  className={`mb-6 text-sm tabletportrait:text-lg laptop:text-xl ${
                    context.dark ? 'opacity-75' : ''
                  }`}
                >
                  Je wil je door nog meer praktijkvoorbeelden laten inspireren?
                  Ontdek ze{' '}
                  <Link
                    to="/overviewpagepractices"
                    className={`font-semibold  ${
                      context.dark
                        ? 'text-pinkDesat hover:text-lightPurpleDesat focus:text-lightPurpleDesat'
                        : 'text-pink underline hover:text-purple focus:text-purple'
                    }`}
                  >
                    hier
                  </Link>
                </p>
                <div className="grid grid-cols-1 gap-16 text-sm tabletportrait:grid-cols-2 tabletportrait:text-lg laptop:text-xl">
                  {practices &&
                    practices.length >= 1 &&
                    practices.map((item: Practice, val: number) => {
                      if (val < 2) {
                        return (
                          <RevPrac
                            key={val}
                            leftTagText={cmsData.header.tag!}
                            leftTagColorBg="pink"
                            leftTagColorText="black"
                            practice={item}
                          />
                        )
                      } else {
                        return null
                      }
                    })}
                </div>
              </section>
            </FadeInSection>
          </div>
          <FadeInSection>
            <section
              className={`flex items-center justify-center py-8 px-4 ${
                context.dark ? 'bg-white bg-opacity-[0.08]' : 'bg-mediumPurple'
              }`}
              id="CallToAction"
            >
              <StaticImage
                src="../images/calltoaction.png"
                alt="Picture of girls riding a bike"
                className="ml-14 hidden h-auto laptopL:block"
              />
              <div className="h-auto p-8 text-white">
                <h2
                  className={`pb-4 font-raleway text-xl font-bold tabletportrait:text-2xl ${
                    context.dark ? 'opacity-90' : ''
                  }`}
                >
                  Benieuwd naar de beweegvriendelijkheid van jouw stad of
                  gemeente?
                </h2>
                <h4
                  className={`pb-4 font-raleway text-lg font-semibold text-pink tabletportrait:text-xl ${
                    context.dark ? 'text-pinkDesat opacity-90' : 'text-pink'
                  }`}
                >
                  Download hier jouw rapport
                </h4>
                <p
                  className={`pb-4 text-sm tabletportrait:text-lg ${
                    context.dark ? 'opacity-90' : ''
                  }`}
                >
                  Vul onderstaande gegevens in en ontvang in jouw mailbox het
                  rapport.
                </p>

                <div
                  className="z-0 grid grid-cols-1 gap-4 pb-3 text-sm tabletportrait:grid-cols-3 tabletportrait:grid-rows-3 tabletportrait:text-lg laptopL:grid-cols-3"
                  id="autoComplete"
                >
                  <div className="flex max-w-min flex-col" id="#inputStad">
                    <label htmlFor="Stad">Naam gemeente *</label>
                    <input
                      type="text"
                      id="Stad"
                      className={`peer w-48 rounded border-2  px-2 py-1 outline-none  ${
                        context.dark
                          ? 'border-lightGray bg-dark text-white focus-within:border-lightPurpleDesat hover:border-lightPurpleDesat active:border-lightPurpleDesat'
                          : ' border-lightPink text-dark focus-within:border-pink hover:border-pink active:border-pink'
                      }`}
                      placeholder="Stad/gemeente"
                      value={typed}
                      onChange={(ev: any) => {
                        setTyped(ev.target.value)
                      }}
                      onInput={(e: React.FormEvent<HTMLInputElement>) =>
                        setInfo((u: PersonalInfo) => {
                          //@ts-ignore
                          u.place = e.target.value
                          return { ...u }
                        })
                      }
                    />
                    {error.placeError && (
                      <p className="text-sm font-semibold text-red">
                        {error.placeError}
                      </p>
                    )}
                    <ul className="absolute z-40 mt-16">
                      {suggestions?.map((val: string, index: number) => {
                        if (index < 7) {
                          return (
                            <li
                              key={val}
                              className={`:not(:hover):hidden z-50 w-48 border border-lightGray px-2 py-1  hover:cursor-pointer  ${
                                context.dark
                                  ? 'border-opacity-50 bg-darkGray text-white hover:bg-[#3F3F3F]'
                                  : 'bg-white text-dark hover:bg-neutral'
                              }`}
                              onClick={() => {
                                changeTyped(val)
                                setInfo((u: PersonalInfo) => {
                                  //@ts-ignore
                                  u.place = val
                                  return { ...u }
                                })
                              }}
                            >
                              {val}
                            </li>
                          )
                        }
                      })}
                    </ul>
                  </div>
                  <div className="flex max-w-min flex-col">
                    <Input
                      label="Voornaam *"
                      callback={(e: React.FormEvent<HTMLInputElement>) =>
                        setInfo((u: PersonalInfo) => {
                          //@ts-ignore
                          u.firstName = e.target.value
                          return { ...u }
                        })
                      }
                    />
                    {error.firstNameError && (
                      <p className="text-sm font-semibold text-red">
                        {error.firstNameError}
                      </p>
                    )}
                  </div>
                  <div className="flex max-w-min flex-col">
                    <Input
                      label="Naam *"
                      callback={(e: React.FormEvent<HTMLInputElement>) =>
                        setInfo((u: PersonalInfo) => {
                          //@ts-ignore
                          u.lastName = e.target.value
                          return { ...u }
                        })
                      }
                    />
                    {error.lastNameError && (
                      <p className="text-sm font-semibold text-red">
                        {error.lastNameError}
                      </p>
                    )}
                  </div>
                  <div className="flex max-w-min flex-col tabletportrait:col-span-3">
                    <Input
                      label="E-mail *"
                      callback={(e: React.FormEvent<HTMLInputElement>) =>
                        setInfo((u: PersonalInfo) => {
                          //@ts-ignore
                          u.mail = e.target.value
                          return { ...u }
                        })
                      }
                    />
                    {error.mailError && (
                      <p className="text-sm font-semibold text-red">
                        {error.mailError}
                      </p>
                    )}
                  </div>

                  <div className="flex items-center gap-3 tabletportrait:col-span-3">
                    <input
                      className="sr-only float-left"
                      type="checkbox"
                      name="credentials"
                      id="credentials"
                      onChange={() => {
                        if (btnRapport == false) {
                          setBtnRapport(true)
                        } else {
                          setBtnRapport(false)
                        }
                      }}
                    />
                    <label
                      className="text-[12px] tabletportrait:text-sm"
                      htmlFor="credentials"
                    >
                      <span
                        className={`flex h-4 w-4 items-center justify-center rounded bg-white ${
                          btnRapport ? 'bg-pink' : ''
                        }`}
                      >
                        <svg
                          className={`block scale-75 fill-white opacity-100 ${
                            btnRapport ? '' : 'opacity-0'
                          }`}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 9 6.75"
                        >
                          <path
                            d="M4.75,9.5a1,1,0,0,1-.707-.293l-2.25-2.25A1,1,0,1,1,3.207,5.543L4.75,7.086,8.793,3.043a1,1,0,0,1,1.414,1.414l-4.75,4.75A1,1,0,0,1,4.75,9.5"
                            transform="translate(-1.5 -2.75)"
                          />
                        </svg>
                      </span>
                      <div className="ml-7 -mt-[18px]">
                        Ik ga akkoord dat Vital Cities mijn persoonsgegevens in
                        haar databanken opneemt om mij de gevraagde informatie
                        te bezorgen via e-mail en dit op te volgen. *
                      </div>
                    </label>
                  </div>
                  <div className="flex items-center gap-3 tabletportrait:col-span-3">
                    <input
                      className="sr-only float-left"
                      type="checkbox"
                      name="news"
                      id="news"
                      onChange={(e: React.FormEvent<HTMLInputElement>) => {
                        setInfo((u: PersonalInfo) => {
                          //@ts-ignore
                          u.newsletter = e.target.value
                          return { ...u }
                        })

                        if (checkNews == false) {
                          setCheckNews(true)
                        } else {
                          setCheckNews(false)
                        }
                      }}
                    />

                    <label
                      className="text-[12px] tabletportrait:text-sm"
                      htmlFor="news"
                    >
                      <span
                        className={`flex h-4 w-4 items-center justify-center rounded bg-white ${
                          checkNews ? 'bg-pink' : ''
                        }`}
                      >
                        <svg
                          className={`block scale-75 fill-white opacity-100 ${
                            checkNews ? '' : 'opacity-0'
                          }`}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 9 6.75"
                        >
                          <path
                            d="M4.75,9.5a1,1,0,0,1-.707-.293l-2.25-2.25A1,1,0,1,1,3.207,5.543L4.75,7.086,8.793,3.043a1,1,0,0,1,1.414,1.414l-4.75,4.75A1,1,0,0,1,4.75,9.5"
                            transform="translate(-1.5 -2.75)"
                          />
                        </svg>
                      </span>
                      <div className="ml-7 -mt-[18px]">
                        Ja! Bezorg mij inhoudelijke inspiratie en houd mij op de
                        hoogte van nieuws via e-mail.
                      </div>
                    </label>
                  </div>

                  <div className="flex items-center">
                    <button
                      id="BtnRapport"
                      className={`z-0 mt-8 rounded border-2 px-2 py-1 text-white  focus:font-semibold ${
                        context.dark
                          ? 'border-pinkDesat bg-pinkDesat hover:bg-opacity-0 hover:text-pinkDesat focus-visible:bg-white focus-visible:bg-opacity-0 focus-visible:text-pinkDesat'
                          : 'border-pink bg-pink hover:bg-white hover:text-pink focus-visible:bg-white focus-visible:text-pink'
                      } ${
                        btnRapport
                          ? 'border-pink bg-pink'
                          : 'pointer-events-none border-gray bg-gray text-lightGray'
                      }`}
                      onClick={() => checkInfo()}
                    >
                      Maak rapport
                    </button>
                    <div className="z-10 mt-8 ml-8">
                      {netlifyError.changed == true &&
                        netlifyError.google == false && (
                          <Lottie
                            className="m-auto h-4 w-4 laptopL:h-8 laptopL:w-8"
                            loop={false}
                            animationData={erroranim}
                          />
                        )}
                      {netlifyError.changed == true &&
                        netlifyError.google == true && (
                          <Lottie
                            className="m-auto h-4 w-4 laptopL:h-8 laptopL:w-8"
                            loop={false}
                            animationData={complete}
                          />
                        )}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </FadeInSection>
          <Contactsection />
          <Footer />
        </main>
      )}
    </ThemeContext.Consumer>
  )
}
