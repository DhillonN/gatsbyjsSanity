/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require("path")

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
    {
      allSanityRoute {
        edges {
          node {
            page {
              ... on SanityGallery {
                id
                _type
              }
              ... on SanityPage {
                id
                _type
              }
            }
            slug {
              current
            }
          }
        }
      }
    }
  `).then(pages => {
    pages.data.allSanityRoute.edges.forEach(({ node }) => {
      console.warn(node.slug.current)
      if (node.page._type == "page" && node.slug.current != "/") {
        createPage({
          path: node.slug.current,
          component: path.resolve("./src/templates/pages.js"),
          context: {
            id: node.page.id,
          },
        })
      } else if (node.page._type == "gallery" && node.slug.current != "/") {
        createPage({
          path: node.slug.current,
          component: path.resolve("./src/templates/galleries.js"),
          context: {
            id: node.page.id,
          },
        })
      }
    })
  })
}
