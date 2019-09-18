import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql, Link } from 'gatsby'

// Components
import Container from '../../components/container'
import Card from '../../components/property/card/index'

// Styled Components
const Title = styled.h1`

`
const Description = styled.p`

`
const List = styled.ul`
    margin:0;
    padding:0;
    list-style:none;
    display:grid;
    grid-template-columns:1fr;
    grid-row-gap: 1.5rem;
    @media (min-width:768px) {
        grid-template-columns:1fr 1fr;
        grid-column-gap: 1.5rem;
    }
    @media (min-width:992px) {
        grid-template-columns:1fr 1fr 1fr;
    }
`
const Item = styled.li`

`
const ItemLink = styled(Link)`

`

export default ({
    title,
    description
}) => {
    const { allWordpressWpProperties } = useStaticQuery(graphql`
        query featuredPropertyQuery {
            allWordpressWpProperties(limit: 6) {
                nodes {
                    id
                    slug
                    title
                    acf {
                        street_address
                        city
                        state
                        zip_code
                        property_type
                        unit_details {
                            unit_availability
                            unit_price
                          }
                        featured_image {
                            id
                            localFile {
                                childImageSharp {
                                    fluid(maxWidth:375) {
                                        ...GatsbyImageSharpFluid
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }      
    `)
    const { nodes } = allWordpressWpProperties
    return (
        <section>
            <Container>
                <Title>{title}</Title>
                <Description>{description}</Description>
                <List>
                    {nodes.map((property) => (
                        <Item>
                            <ItemLink to={`/${property.slug}`}>
                                <Card property={property}/>
                            </ItemLink>
                        </Item>
                    ))}
                </List>
            </Container>
        </section>
    )
}