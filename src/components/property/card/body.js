import React from 'react'
import styled from 'styled-components'

// Components
import Meta from './meta'
import Title from './title'
import Address from './address'

// Styled Components
const Wrapper = styled.div`
    padding: 0.5rem;
    display:grid;
    grid-row-gap:0.5rem;
`

export default ({
    city = "",
    state = "",
    address = "",
    zip = "",
    title,
    type,
    units
}) => {
    return (
        <Wrapper>
            <Title>{title}</Title>
            <Meta 
                units={units}
                type={type}
            />
            <Address
                city={city}
                state={state}
                address={address}
                zip={zip}
            />
        </Wrapper>
    )
}