import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { graphql, useStaticQuery } from 'gatsby'

// Components
import Overlay from './overlay'

// Styled Components
const Wrapper = styled.div`
    position:relative;
    height:300px;
    overflow:hidden;
    border-radius:1rem;
    box-shadow: 0 5px 15px 0 rgba(37,44,97,.15), 0 2px 4px 0 rgba(93,100,148,.2);
`
const Background = styled(Img)`
    height:100%;
`
const Logo = styled(Img)`
    bottom:1rem;
    right:1rem;
    z-index:2;
    width:120px;
`

export default ({
    bg,
    logo
}) => {
    const { allFile } = useStaticQuery(graphql`
        query featurePlaceholders {
            allFile(filter: {relativeDirectory: {eq: "placeholders"}, name: {in: ["bg", "logo"]}}, sort: {fields: name}) {
                nodes {
                    childImageSharp {
                        fluid(maxHeight:250) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        }
    `)
    const { nodes } = allFile
    return (
        <Wrapper>
            <Background fluid={bg ? bg : nodes[0].childImageSharp.fluid}/>
            <Overlay/>
            <Logo fluid={logo ? logo : nodes[1].childImageSharp.fluid} style={{position: "absolute"}}/>
        </Wrapper>
    )
}