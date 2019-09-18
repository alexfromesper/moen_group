import React from 'react'
import styled from 'styled-components'

// Utils
import { propertyPrice } from '../utils/index'

// Styled Components
const Price = styled.span`
    position:absolute;
    z-index:1;
    bottom:0.25rem;
    left:0.25rem;
    color:#fff;
    font-size:1rem;
    line-height:1.1;
    strong {
        display:block;
        font-size:125%;
    }
`

export default ({
    units
}) => {
    const price = propertyPrice(units)
    return (
        <Price>
            Prices Starting at <strong>${price} Per Month</strong>
        </Price>
    )
}