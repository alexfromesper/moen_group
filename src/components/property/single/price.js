import React from 'react'
import styled from 'styled-components'

// Utils
import { propertyPrice } from '../utils/index'

// Styled Components
const Price = styled.span`
    font-size: 1rem;
    line-height:1.1;
    color: #888894;
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