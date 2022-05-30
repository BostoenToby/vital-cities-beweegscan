import { graphql, useStaticQuery } from "gatsby";
import * as React from 'react'

export function queryAmb4 () {
    const data = useStaticQuery(
        graphql`
            query {
                cms: allMarkdownRemark(filter: {frontmatter: {ambition: {eq: "Stad & buurt als sportplein"}}}) {
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
                  ambitie4bench1: allGsVitalCitiesDataCuS11(filter: {jaar: {eq: 2020}}) {
                    edges {
                      node {
                        minstensMaandelijks____
                        minstensWekelijks____
                        nooit_eenUitzonderlijkeKeer____
                      }
                    }
                  }
                  ambitie4bench2: allGsVitalCitiesDataCuS10(
                    filter: {jaar: {eq: 2020}, item: {eq: "Sporten in eigen gemeente"}}
                  ) {
                    edges {
                      node {
                        _12KeerOfMinder____
                        meerDan12Keer____
                        nooit____
                        item
                      }
                    }
                  }
                  ambitie4bench3: allGsVitalCitiesDataCuS10(
                    filter: {jaar: {eq: 2020}, item: {eq: "Sporten in andere gemeente"}}
                  ) {
                    edges {
                      node {
                        _12KeerOfMinder____
                        meerDan12Keer____
                        nooit____
                        item
                      }
                    }
                  }
                  ambitie4bench4: allGsVitalCitiesDataCuS13(filter: {jaar: {eq: 2020}}) {
                    edges {
                      node {
                        eens____
                        neutraal____
                        oneens____
                      }
                    }
                  }
                  ambitie4bench5: allGsVitalCitiesDataCuS12(
                    filter: {jaar: {eq: 2020}, item: {eq: "Tevredenheid over sportvoorzieningen"}}
                  ) {
                    edges {
                      node {
                        neutraal____
                        ontevreden____
                        tevreden____
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