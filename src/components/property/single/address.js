import React, { useContext } from 'react'
import styled from 'styled-components'

// Global Theme
import Theme from '../../../context/theme'

// Styled Components
const Address = styled.h2`
    font-size:1rem;
    font-weight:400;
    display:flex;
    color:#888894;
`
const Icon = styled.svg`
    fill: ${props => props.theme.color.primary};
    height:1rem;
    width:1rem;
`
const Link = styled.a`
    padding-bottom:0.25rem;
    border-bottom: 1px solid #dae1e7;
    :hover {
        color:${props => props.theme.color.primary};
        border-bottom-color: ${props => props.theme.color.primary};
    }
`

export default ({
    city,
    state,
    zip,
    address
}) => {
    const fullAddress = `${address}, ${city}, ${state} ${zip}`
    const theme = useContext(Theme)
    return (
        <Address>
            <Icon theme={theme} width="24" height="24" viewBox="0 0 24 24">
                <path d="M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z"/>
            </Icon>
            <Link theme={theme} href={`https://maps.google.com/?q=${encodeURIComponent(fullAddress)}`} target="_blank">{fullAddress}</Link>
        </Address>
    )
}