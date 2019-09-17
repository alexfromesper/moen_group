import React, { useContext } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { lighten } from 'polished'

// Global Theme
import Theme from '../context/theme'

const Button = styled.a`
    display:inline-block;
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
`
const ButtonLink = styled(Link)`
    display:inline-block;
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
`

export default ({
    type,
    content,
    link
}) => {
    const theme = useContext(Theme)
    return (
        type === "Link" ? 
            <ButtonLink to={link} theme={theme}>{content}</ButtonLink>
        :
            <Button href={link} theme={theme}>{content}</Button>
    )
}