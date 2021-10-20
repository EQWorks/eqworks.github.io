const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

// new releases pages, case study pages
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const response = await graphql(`
    {
      caseStudies: allContentfulCaseStudy {
        nodes {
          id
          slug
        }
      }
      newsReleases: allContentfulPost {
        nodes {
          slug
          id
        }
      }
    }
  `)

  //create news release pages
  response.data.newsReleases.nodes.forEach((node) => {
    createPage({
      path: `/company/news-releases/${node.slug}`,
      component: path.resolve('./src/templates/news-release.js'),
      context: {
        slug: node.slug
      }
    })
  })

  //create news release pages
  response.data.caseStudies.nodes.forEach((node) => {
    createPage({
      path: `/learn/case-studies/${node.slug}`,
      component: path.resolve('./src/templates/case-study.js'),
      context: {
        slug: node.slug
      }
    })
  })
}

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === 'build-html') {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /@mapbox|mapbox-gl/,
            use: loaders.null()
          }
        ]
      }
    })
  }
}

// exports.onCreateNode = ({ node, actions, getNode }) => {
//   const { createNodeField } = actions

//   if (node.internal.type === `MarkdownRemark`) {
//     const value = createFilePath({ node, getNode })

//     createNodeField({
//       name: `slug`,
//       node,
//       value,
//     })
//   }
// }

// exports.createSchemaCustomization = ({ actions }) => {
//   const { createTypes } = actions

//   // Explicitly define the siteMetadata {} object
//   // This way those will always be defined even if removed from gatsby-config.js

//   // Also explicitly define the Markdown frontmatter
//   // This way the "MarkdownRemark" queries will return `null` even when no
//   // blog posts are stored inside "content/blog" instead of returning an error
//   createTypes(`
//     type SiteSiteMetadata {
//       author: Author
//       siteUrl: String
//       social: Social
//     }

//     type Author {
//       name: String
//       summary: String
//     }

//     type Social {
//       twitter: String
//     }

//     type MarkdownRemark implements Node {
//       frontmatter: Frontmatter
//       fields: Fields
//     }

//     type Frontmatter {
//       title: String
//       description: String
//       date: Date @dateformat
//     }

//     type Fields {
//       slug: String
//     }
//   `)
// }
