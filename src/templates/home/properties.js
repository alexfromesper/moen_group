import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql, Link } from 'gatsby'

// Components
import Container from '../../components/container'
import Card from '../../components/property/card/index'
import ParallaxBg from '../../components/bg/parallax'

// Styled Components
const Title = styled.h2`
    text-align:center;
    grid-area: title;
    color:#fff;
    text-shadow: 0 1px 3px rgba(0,0,0,.18);
    text-transform:uppercase;
    font-size:2rem;
    @media (min-width:992px) {
        font-size:2.5rem;
        text-align:left;
    }
`
const Description = styled.p`
    text-align:center;
    grid-area: description;
    color:#fff;
    text-shadow: 0 1px 3px rgba(0,0,0,.18);
    @media (min-width:992px) {
        font-size: 1.25rem;
        line-height: 1.35;
        text-align:left;   
    }
`
const List = styled.ul`
    grid-area: list;
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
    const bg = data.file.childImageSharp
    return (
        <section>
            <ParallaxBg bg={bg.fluid}/>
            <Container
                sm={`
                    padding-top:3rem;
                    padding-bottom:3rem;
                    display:grid;
                    grid-template-columns: 1fr;
                    grid-row-gap:1.5rem;
                    grid-template-areas: 
                        "title"
                        "description"
                        "list"
                    ;
                `}
                lg={`
                    grid-template-columns: 1.5fr 3fr;
                    grid-column-gap:1.5rem;
                    align-items:center;
                    grid-template-areas:
                        "title description"
                        "list list"
                    ;
                    grid-row-gap: 1.5rem;
                    padding-top:4.5rem;
                    padding-bottom:4.5rem;
                `}
            >
                <Title>{title}</Title>
                <Description>{description}</Description>
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
        </section>
    )
}