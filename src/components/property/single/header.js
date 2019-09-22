import React from 'react'
import styled from 'styled-components'

// Components
import Background from './background'
import Meta from './meta'
import Title from './title'
import Address from './address'
import Price from './price'
import Buttons from './buttons'

// Styled Components
const Wrapper = styled.div`
    box-shadow: 0 2px 4px 0 rgba(14,30,37,.12);
    padding: 0.75rem;
    background-color: #fff;
    border-radius: 0.25rem;
    display:grid;
    @media (min-width:992px) {
        grid-template-columns: 1fr 2fr;
        grid-column-gap: 0.75rem;
    }
`
const Content = styled.div`
    display:grid;
    grid-template-columns:1fr;
    grid-row-gap:0.75rem;
`

export default ({
    bg,
    title,
    units,
    type,
    city,
    state,
    address,
    zip
}) => {
    return (
        <Wrapper>
            <Background
                bg={bg}
            />
            <Content>
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
                <Price
                    units={units}
                />
                <Buttons />
            </Content>
        </Wrapper>
    )
}