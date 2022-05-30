import { graphql, useStaticQuery } from "gatsby";
import * as React from 'react'

export function queryAmb5 () {
    const data = useStaticQuery(
        graphql`
            query {
                cms: allMarkdownRemark(filter: {frontmatter: {ambition: {eq: "Stad & buurt als speelplein"}}}) {
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
                  ambitie5bench1: allGsVitalCitiesDataCuS24(
                    filter: {jaar: {eq: 2020}, item: {eq: "Voldoende geschikte plekken voor jeugd"}}
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
                  ambitie5bench2: allGsVitalCitiesDataCuS24(
                    filter: {jaar: {eq: 2020}, item: {eq: "Voldoende speelvoorzieningen voor kinderen en jongeren"}}
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
                  ambitie5bench3: allGsVitalCitiesDataCuS21(filter: {jaar: {eq: 2020}}) {
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