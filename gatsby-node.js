/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require('path')

module.exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions

    const propertyTemplate = path.resolve('./src/templates/property/index.js')

    const result = await graphql(`
    {
        allWordpressWpProperties {
            edges {
                node {
                    slug
                }
            }
        }
    }
    `)

    // Check for any errors
    if (result.errors) {
        throw new Error(result.errors)
    }

    const { allWordpressWpProperties } = result.data

    allWordpressWpProperties.edges.forEach((edge) => {
        createPage({
            component: propertyTemplate,
            path: edge.node.slug,
            context: {
                slug: edge.node.slug
            }
        })
    })

}