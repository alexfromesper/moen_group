import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql, Link } from 'gatsby'

// Components
import Container from '../../components/container'
import Card from '../../components/property/card/index'
import Title from '../../components/title/subpage'

// Styled Components
const Section = styled.section`
    background-color:#f0f3f5;
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
    const data = useStaticQuery(graphql`
        query AllPropertyQuery {
            allWordpressWpProperties {
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
            file(relativeDirectory: {eq: "placeholders"}, name: {eq: "bg"}) {
                childImageSharp {
                    fluid(maxHeight:250) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }      
    `)
    const { nodes } = data.allWordpressWpProperties
    return (
        <React.Fragment>
            <Title
                title={`Our Properties`}
            />
            <Section>
                <Container
                    sm={`
                        padding-top:3rem;
                        padding-bottom:3rem;
                    `}
                    lg={`
                        padding-top:4.5rem;
                        padding-bottom:4.5rem;
                    `}
                >
                    <List>
                        {nodes.map((property) => (
                            <Item key={property.id}>
                                <ItemLink to={`/${property.slug}`}>
                                    <Card property={property}/>
                                </ItemLink>
                            </Item>
                        ))}
                    </List>
                </Container>
            </Section>
        </React.Fragment>
    )
}