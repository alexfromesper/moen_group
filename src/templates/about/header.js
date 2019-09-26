import React, { useContext } from 'react'
import styled from 'styled-components'
import { darken } from 'polished'

// Global Theme
import Theme from '../../context/theme'

// Assets
import Bg from '../../images/about-bg-2.svg'

// Styled Components
const Section = styled.section`
    box-shadow: inset 0px -85px 30px -71px rgba(255,255,255,1);
    background-image:url(${Bg});
    background-size: 100% auto;
    background-repeat: no-repeat;
    background-position-y: bottom;
    background-position-x: center;
    text-align:center;
    padding-top:3rem;
    padding-bottom:3rem;
    position:relative;
    :before {
        content:'';
        position:absolute;
        z-index:-1;
        left:0;
        right:0;
        bottom:0;
        top:0;
        background-image: linear-gradient(180deg,#f5f5fa,#ebebf0)
    }
    @media (min-width:992px) {
        padding-top:6rem;
        padding-bottom:13rem;
    }
`
const Title = styled.h1`
    font-size:3.5rem;
    font-weight:900;
    text-transform:uppercase;
    color:${props => darken(0.40, props.theme.color.primary)};
    margin-bottom:1rem;
`
const Description = styled.p`
    font-size:1rem;
    color:${props => darken(0.30, props.theme.color.primary)}
`

export default () => {
    const theme = useContext(Theme)
    return (
        <Section>
            <Title theme={theme}>Discover Our Story</Title>
            <Description theme={theme}>Lorem ipsum dolor sit amet, docendi mandamus ne eum verear oportere.</Description>
        </Section>
    )
}