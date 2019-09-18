import React from 'react'
import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'
import { useStaticQuery, graphql } from 'gatsby'

// Components

// Styled Components
const Background = styled(BackgroundImage)`
    height:100%;
    border-radius: 0.5rem 0.5rem 0 0;
    overflow: hidden;
    &:before {
        content: "";
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        z-index: 1;
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