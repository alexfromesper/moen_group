import React from 'react'
import styled from 'styled-components'

// Styled Components
const List = styled.ul`
    display:flex;
    margin:0;
    padding:0;
    list-style:none;
`
const Item = styled.li`
    font-size:0.8rem;
    margin-right:0.75rem;
    :last-child {
        margin-right:0;
    }
`

export default ({
    price,
    bed,
    bath
}) => (
    <List>
        <Item>Price: ${price}</Item>
        {bed &&<Item>Bedrooms: {bed}</Item>}
        {bath &&<Item>Bathrooms: {bath}</Item>}
    </List>
)