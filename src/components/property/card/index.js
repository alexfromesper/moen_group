import React from 'react'
import styled from 'styled-components'

// Components
import Header from './header'
import Body from './body'

// Styled Components
const Article = styled.article`
    display:grid;
    grid-template-columns: 1fr;
    grid-auto-flow: dense;
    background-color: #fff;
    box-shadow: 0 2px 4px 0 rgba(14,30,37,.12);
    transition: all .15s linear;
    border-radius: 0.5rem;
    overflow: hidden;
    position: relative;
    top:0;
    height: 100%;
    &:hover {
        top:-7px;
        box-shadow: -2px 8px 22px 0 rgba(0,0,0,.15);
    }
`

export default ({ property }) => {
    const { acf, title } = property
    return (
        <Article>
            <Body
                title={title}
                city={acf.city}
                state={acf.state}
                address={acf.street_address}
                zip={acf.zip_code}
                type={acf.property_type}
                units={acf.unit_details}
            />
            <Header
                units={acf.unit_details}
                bg={acf.featured_image.localFile ? acf.featured_image.localFile.childImageSharp.fluid : false}
            />
        </Article>
    )
}