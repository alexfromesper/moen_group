import React, { useContext } from 'react'
import styled from 'styled-components'
import { lighten } from 'polished'

// Global Theme
import Theme from '../../../context/theme'

// Styled Components
const Wrapper = styled.div`
`
const Svg = styled.svg`
    background-color:${props => lighten(0.25, props.theme.color.primary)};
    height:3rem;
    width:3rem;
    padding:1rem;
    border-radius:50%;
    fill:${props => props.theme.color.primary};
`
const Title = styled.h3`
    font-weight:normal;
    margin:0.75rem 0 ;

`
const Description = styled.p`

`

export default ({
    title,
    description
}) => {
    const theme = useContext(Theme)
    return (
        <Wrapper>
            <Svg viewBox="0 0 27 20" theme={theme}>
                <path d="M24.42.45,9,16.35,2.58,9.73A1.5,1.5,0,0,0,.42,11.82l7.5,7.72a1.5,1.5,0,0,0,2.16,0l16.5-17A1.5,1.5,0,0,0,24.42.45Z"></path>
            </Svg>
            <Title>{title}</Title>
            <Description>{description}</Description>
        </Wrapper>
    )
}