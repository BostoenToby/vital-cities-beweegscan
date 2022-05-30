import { graphql, useStaticQuery } from "gatsby";
import * as React from 'react'

export function queryAmb6 () {
    const data = useStaticQuery(
        graphql`
            query {
                cms: allMarkdownRemark(filter: {frontmatter: {ambition: {eq: "Stad & buurt als ontmoetingsplein"}}}) {
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
                  ambitie6bench1: allGsVitalCitiesDataSaS18(filter: {jaar: {eq: 2020}}) {
                    edges {
                      node {
                        eens____
                        neutraal____
                        oneens____
                      }
                    }
                  }
                  ambitie6bench2: allGsVitalCitiesDataSaS17(
                    filter: {jaar: {eq: 2020}, item: {eq: "Voldoende ontmoetingsplekken"}}
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
                  ambitie6bench3: allGsVitalCitiesDataSaS17(
                    filter: {jaar: {eq: 2020}, item: {eq: "Voldoende rustplekken"}}
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
                  ambitie6bench4: allGsVitalCitiesDataSaS19(
                    filter: {jaar: {eq: 2020}, item: {eq: "Onveiligheidsgevoel buurt/wijk"}}
                  ) {
                    nodes {
                      afEnToe____
                      nooit_zelden____
                      vaak_altijd____
                      item
                    }
                  }
                  ambitie6bench5: allGsVitalCitiesDataSaS19(
                    filter: {jaar: {eq: 2020}, item: {eq: "Onveiligheidsgevoel gemeente/stad"}}
                  ) {
                    nodes {
                      afEnToe____
                      nooit_zelden____
                      vaak_altijd____
                      item
                    }
                  }
            }
        `
    )
    return(
      <div></div>
  )
}