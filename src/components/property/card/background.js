import React from 'react'
import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'
import { useStaticQuery, graphql } from 'gatsby'

// Styled Components
const Background = styled(BackgroundImage)`
    height:100%;
    border-radius: 0.5rem 0.5rem 0 0;
    overflow: hidden;
    &:before {
        box-shadow: inset 0 -75px 31px -21px rgba(0,0,0,.85);
    }
`

export default ({
    bg
}) => {
    const { file } = useStaticQuery(graphql`
        query propertyCardBgPlaceholder {
            file(relativeDirectory: {eq: "placeholders"}, name: {eq: "bg"}) {
                childImageSharp {
                    fluid(maxHeight:250) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)
    const { childImageSharp } = file
    return (
        <Background 
            fluid={
                bg ? bg : childImageSharp.fluid
            }
        />
    )
}