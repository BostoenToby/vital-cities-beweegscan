import { graphql, useStaticQuery } from "gatsby";
import * as React from 'react'

export function queryAmb2 () {
    const data = useStaticQuery(
        graphql`
            query {
                cms: allMarkdownRemark(filter: {frontmatter: {ambition: {eq: "Verbonden stadskern"}}}) {
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
                  benchmark1: allGsVitalCitiesDataMoS17(filter: {jaar: {eq: 2020}}) {
                    edges {
                      node {
                        minstensMaandelijks____
                        minstensWekelijks____
                        nooit_eenUitzonderlijkeKeer____
                      }
                    }
                  }
                  benchmark2: allGsVitalCitiesDataMoS04(filter: {jaar: {eq: 2020}}) {
                    edges {
                      node {
                        neutraal____
                        oneens____
                        eens____
                      }
                    }
                  }
                  benchmark3: allGsVitalCitiesDataMoS09(
                    filter: {jaar: {eq: 2020}, item: {eq: "Autoluwe en autovrije zones"}}
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
                  benchmark4: allGsVitalCitiesDataMoS09(
                    filter: {jaar: {eq: 2020}, item: {eq: "Deelsystemen"}}
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
            }
        `
    )
    return(
      <div></div>
  )
}