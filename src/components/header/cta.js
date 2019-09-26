import React, { useContext } from 'react'
import styled from 'styled-components'
import { lighten, darken } from 'polished'

// Global Theme
import Theme from '../../context/theme'

const Button = styled.a`
    display:none;
    padding: 0.5rem 1rem;
    font-size:0.75rem;
    font-weight:bold;
    border-radius:3rem;
    text-transform:uppercase;
    background: linear-gradient(${props => `
        ${lighten(0.1, props.theme.color.primary)}, 
        ${props.theme.color.primary}`}) no-repeat;
    text-align:center;
    justify-self: flex-end;
    color:#fff;
    text-shadow: 0 1px 3px rgba(0,0,0,.18);
    box-shadow: 0 7px 14px -3px rgba(45,35,66,.3), 0 2px 4px 0 rgba(93,100,148,.4), inset 0 -2px 0 0 ${props => darken(0.10, props.theme.color.primary)};
    @media (min-width:992px) {
        display:inline-block;
    }
`

export default () => {
    const theme = useContext(Theme)
    return (
        <Button href="tel:3193513900" theme={theme}>Call Us (319) 351-3900</Button>
    )
}