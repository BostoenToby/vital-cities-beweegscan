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
                  ambitie2: allGsVitalCitiesDataMoS12(filter: {jaar: {eq: "2020"}}) {
                    edges {
                      node {
                        andere____
                        auto____
                        fiets____
                        openbaarVervoer____
                        teVoet____
                      }
                    }
                  }
                  ambitie3: allGsVitalCitiesDataMoS07(filter: {jaar: {eq: 2020}}) {
                    edges {
                      node {
                        eens____
                        neutraal____
                        oneens____
                      }
                    }
                  }
                  ambitie4: allGsVitalCitiesDataMoS11(filter: {jaar: {eq: 2020}}) {
                    edges {
                      node {
                        afEnToe____
                        nooit_zelden____
                        vaak_altijd____
                      }
                    }
                  }
            }
        `
    )
    return data
}