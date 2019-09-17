import React, { useContext } from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

// Global Theme
import Theme from '../../context/theme'

// Styled Components
const List = styled.ul`
    margin:0;
    padding:0;
    list-style:none;
    text-align:center;
    display:none;
    @media (min-width:992px) {
        display:block;
    }
`
const Item = styled.li`
    margin:0 1rem 0 0;
    padding:0;
    display:inline-block;
    height:100%;
    &:last-child {
        margin-right:0;
    }
`
const ItemLink = styled(Link)`
    height:100%;
    display:block;
    line-height:4rem;
    font-size:0.75rem;
    font-weight:bold;
    text-transform:uppercase;
    padding:0 0.5rem;
    &:hover {
        box-shadow:inset 0 -4px 0 0 ${props => props.theme.color.primary};
    }
`

export default ({
    menuLinks
}) => {
    const theme = useContext(Theme)
    return (
        <List>
            {menuLinks.map(({ name, link }) => (
                <Item key={name}>
                    <ItemLink 
                        to={link} 
                        theme={theme}
                    >
                        {name}
                    </ItemLink>
                </Item>
            ))}
        </List>
    )
}