import React from 'react'
import styled from 'styled-components'

// Components
import Container from '../../container'
import Header from './header'
import Overview from './overview'
import Units from './units/index'
import Contact from './form/index'
import Carousel from '../../carousel/property/index'

// Styled Components
const Wrapper = styled.div`
    display:grid;
    grid-template-columns:1fr;
    grid-row-gap:1.5rem;
`


export default ({
    data
}) => {
    const { acf, title } = data
    console.log(data)
    return (
        <Container
            sm={`
                padding-top:3rem;
                padding-bottom:3rem;
                display:grid;
                grid-row-gap:1.5rem;
            `}
            lg={`
                align-items: start;
                grid-column-gap:1.5rem;
                grid-template-columns: 7fr 5fr;
            `}
        >
            <Wrapper>
                <Header
                    bg={acf.featured_image.localFile ? acf.featured_image.localFile.childImageSharp.fluid : false}
                    title={title}
                    city={acf.city}
                    state={acf.state}
                    address={acf.street_address}
                    zip={acf.zip_code}
                    type={acf.property_type}
                    units={acf.unit_details}
                />
                <Carousel 
                    slides={acf.gallery_images ? acf.gallery_images : false}
                />
            </Wrapper>
            <Wrapper>
                <Overview
                    description={acf.property_description}
                />
                <Units
                    units={acf.unit_details}
                />
                <Contact
                    property={title}
                />
            </Wrapper>
        </Container>
    )
}