import React from "react"
import styled from 'styled-components'
import { Link, graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Container from '../components/container'
import Property from '../components/property/single/index'


const Section = styled.section`
    background-color:#f1f1f1;
`
const SecondPage = () => {
    const { wordpressWpProperties } = useStaticQuery(graphql`
        query propertySingle {
            wordpressWpProperties {
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
                }
            } 
        }
    `)
    
return (
    <Layout>
    <SEO title="Page two" />
        <Section>
            <Property 
                data={wordpressWpProperties}
            />
        </Section>
    </Layout>
)
}

export default SecondPage
