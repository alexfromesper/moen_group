import React from 'react'
import styled from 'styled-components'

// Styled Components
const List = styled.ul`

`
const Item = styled.li`

`
const Button = styled.button`

`

export default ({
    filter,
    setFilter
}) => {
    return (
        <List>
            <Item>
                <Button onClick={() => setFilter(null)}>All Properties</Button>
            </Item>
            <Item>
                <Button onClick={() => setFilter(`commercial`)}>Commercial</Button>
            </Item>
            <Item>
                <Button onClick={() => setFilter(`residential`)}>All Properties</Button>
            </Item>
        </List>
    )
}