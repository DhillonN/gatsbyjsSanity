import { useStaticQuery, graphql } from "gatsby"
export const useMenuData = () => {
  const { allSanitySiteConfig } = useStaticQuery(
    graphql`
      query MenuData {
        allSanitySiteConfig {
          edges {
            node {
              mainNavigation {
                slug {
                  current
                }
                page {
                  ... on SanityPage {
                    id
                    title
                  }
                }
              }
              logo {
                asset {
                  url
                }
              }
              title
            }
          }
        }
      }
    `
  )
  return allSanitySiteConfig.edges[0].node
}