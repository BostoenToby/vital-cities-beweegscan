import { graphql, useStaticQuery } from "gatsby";
import * as React from 'react'

export function queryAmb7 () {
    const data = useStaticQuery(
        graphql`
            query {
                cms: allMarkdownRemark(filter: {frontmatter: {ambition: {eq: "Bruikbaar, gevarieerd & voldoende groen"}}}) {
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
                  ambitie7bench1: allGsVitalCitiesDataKlS01(
                    filter: {jaar: {eq: 2020}, item: {eq: "Bezoek park, bos, groenzone in andere gemeente"}}
                  ) {
                    edges {
                      node {
                        meerDan12Keer____
                        nietAanwezigInDeEigenGemeente____
                        nooit____
                        tot12Keer____
                        item
                      }
                    }
                  }
                  ambitie7bench2: allGsVitalCitiesDataKlS01(
                    filter: {jaar: {eq: 2020}, item: {eq: "Bezoek park, bos, groenzone in eigen gemeente"}}
                  ) {
                    edges {
                      node {
                        meerDan12Keer____
                        nietAanwezigInDeEigenGemeente____
                        nooit____
                        tot12Keer____
                        item
                      }
                    }
                  }
                  ambitie7bench3: allGsVitalCitiesDataKlS02(filter: {jaar: {eq: 2020}}) {
                    edges {
                      node {
                        neutraal____
                        ontevreden____
                        tevreden____
                      }
                    }
                  }
                  ambitite7bench4: allGsVitalCitiesDataKlS03(filter: {jaar: {eq: 2020}}) {
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