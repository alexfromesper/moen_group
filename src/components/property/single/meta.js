import React from 'react'
import styled from 'styled-components'
import { lighten } from 'polished'

// Utils
import { propertyAvailability } from '../utils/index'

const List = styled.ul`
    margin:0;
    padding:0;
    list-style:none;
    display:flex;
    grid-row: 1;
    align-items:center;
`
const Item = styled.li`
    font-size:0.75rem;
    border-radius:0.25rem;
    padding:0.25rem;
    font-weight:bold;
    line-height:1;
    ${props => props.color && `
        background-color:${lighten(0.55, props.color)};
        color:${props.color};
    `}
    margin-right:0.5rem;
    &:last-child {
        margin-right:0;
    }
`

export default ({
    units,
    type
}) => {
    const available = propertyAvailability(units)
    return (
        <List>
            <Item color="#4d6276">
                {type === "commercial" ? "Commercial" : "Residential"}
            </Item>
            <Item available={available} color={available ? "#1b805f" : "#b20020"}>
                {available ? "Available" : "Rented Out"}
            </Item>
        </List>
    )
}