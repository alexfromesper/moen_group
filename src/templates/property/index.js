import React from "react"
import styled from 'styled-components'
import { graphql } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Property from '../../components/property/single/index'

const Section = styled.section`
    background-color:#f0f3f5;
`
const SecondPage = ({ data }) => {
return (
    <Layout>
    <SEO title="Page two" />
        <Section>
            <Property 
                data={data.wordpressWpProperties}
            />
        </Section>
    </Layout>
)
}

export default SecondPage

export const query = graphql`
    query propertySingleQuery($slug: String!) {
        wordpressWpProperties(slug: { eq: $slug }) {
            title
            type
            acf {
                city
                state
                property_type
                property_description
                street_address
                zip_code
                unit_details {
                    unit_amenities
                    unit_availability
                    unit_bathroom
                    unit_bedroom
                    unit_cooling
                    unit_laundry
                    unit_heating
                    unit_name
                    unit_parking
                    unit_pets
                    unit_price
                    floor_plans {
                        id
                        localFile {
                            childImageSharp {
                                fluid(maxHeight:250) {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                    }
                }
                featured_image {
                    localFile {
                        childImageSharp {
                            fluid(maxHeight:250) {
                                ...GatsbyImageSharpFluid
                            }
                        }
                    }
                }
                gallery_images {
                    id
                    title
                    localFile {
                        childImageSharp {
                            fluid(maxHeight:250) {
                                ...GatsbyImageSharpFluid
                            }
                        }
                    }
                }
            }
        } 
    }
`
