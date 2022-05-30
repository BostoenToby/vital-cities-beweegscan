import { graphql, useStaticQuery } from "gatsby";
import * as React from 'react'

export function queryAmb3 () {
    const data = useStaticQuery(
        graphql`
            query {
                cms: allMarkdownRemark(filter: {frontmatter: {ambition: {eq: "Aantrekkelijke & veilige wandel- & fietsroutes"}}}) {
                    nodes {
                      frontmatter {
                        title
                        link
                        text
                        ambition
                        text
                      }
                      parent {
                        internal {
                          description
                        }
                      }
                    }
                  }
                  ambitie3bench1: allGsVitalCitiesDataMoS01(
                    filter: {jaar: {eq: 2020}, item: {eq: "Fietspaden in goede staat"}}
                  ) {
                    edges {
                      node {
                        eens____
                        neutraal____
                        oneens____
                        item
                      }
                    }
                  }
                  ambitie3bench2: allGsVitalCitiesDataMoS01(
                    filter: {jaar: {eq: 2020}, item: {eq: "Straten en pleinen in goede staat"}}
                  ) {
                    edges {
                      node {
                        eens____
                        neutraal____
                        oneens____
                        item
                      }
                    }
                  }
                  ambitie3bench3: allGsVitalCitiesDataMoS01(
                    filter: {jaar: {eq: 2020}, item: {eq: "Voetpaden in goede staat"}}
                  ) {
                    edges {
                      node {
                        eens____
                        neutraal____
                        oneens____
                        item
                      }
                    }
                  }
                  ambitie3bench4: allGsVitalCitiesDataMoS03(filter: {jaar: {eq: 2020}}) {
                    edges {
                      node {
                        eens____
                        neutraal____
                        oneens____
                      }
                    }
                  }
                  ambitie3bench5: allGsVitalCitiesDataMoS09(
                    filter: {jaar: {eq: 2020}, item: {eq: "Fietsinfrastructuur"}}
                  ) {
                    edges {
                      node {
                        eens____
                        neutraal____
                        oneens____
                        item
                      }
                    }
                  }
                  ambitie3bench6: allGsVitalCitiesDataMoS02(filter: {jaar: {eq: 2020}}) {
                    edges {
                      node {
                        eens____
                        neutraal____
                        oneens____
                      }
                    }
                  }
                  ambitie3bench7: allGsVitalCitiesDataMoS06(filter: {jaar: {eq: 2020}}) {
                    edges {
                      node {
                        eens____
                        neutraal____
                        oneens____
                      }
                    }
                  }
            }
        `
    )
    return(
      <div></div>
  )
}