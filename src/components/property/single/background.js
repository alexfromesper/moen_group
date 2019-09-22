import React from 'react'
import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'
import { useStaticQuery, graphql } from 'gatsby'

// Styled Components
const Background = styled(BackgroundImage)`
    height:100%;
    width:100%;
    border-radius: 0.25rem;
    overflow:hidden;
`

export default ({
    bg
}) => {
    const { file } = useStaticQuery(graphql`
        query propertySingleBgPlaceholder {
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