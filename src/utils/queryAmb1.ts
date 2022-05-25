import { graphql, useStaticQuery } from "gatsby";

export function queryAmb1 () {
    const data = useStaticQuery(
        graphql`
            query {
                cms: allMarkdownRemark {
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
                ambitie1: allGsVitalCitiesDataZoS03(filter: {jaar: {eq: 2020}}) {
                    edges {
                      node {
                        dagelijks____
                        meerdereKerenPerMaand____
                        minstensWekelijks____
                        nooit_minderDan1KeerPerMaand____
                        jaar
                      }
                    }
                  }
            }
        `
    )
    return data
}