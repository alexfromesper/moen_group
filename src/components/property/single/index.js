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
    return (
        <Container
            sm={`
                padding-top:3rem;
                padding-bottom:3rem;
            `}
            lg={`
                display:grid;
                align-items: start;
                grid-column-gap:1.5rem;
                grid-template-columns: 7fr 5fr;
            `}
        >
            <Wrapper>
                <Header
                    bg={false}
                    title={title}
                    city={acf.city}
                    state={acf.state}
                    address={acf.street_address}
                    zip={acf.zip_code}
                    type={acf.property_type}
                    units={acf.unit_details}
                />
                <Carousel/>
            </Wrapper>
            <Wrapper>
                <Overview
                    description={acf.property_description}
                />
                <Units
                    units={acf.unit_details}
                />
                <Contact property={title}/>
            </Wrapper>
        </Container>
    )
}