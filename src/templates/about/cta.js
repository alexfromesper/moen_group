import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

// Components
import Container from '../../components/container'
import WavesBg from '../../components/bg/wave'

// Styled Components
const Title = styled.h2`
    font-size:2rem;
    color:#fff;
    text-shadow:0 1px 3px rgba(0,0,0,.18);
    text-align:center;
    @media (min-width:992px) {
        text-align:left;
        font-size:3rem;
    }
`
const Button = styled(Link)`
    border-radius:3rem;
    text-align:center;
    padding: 1rem 0;
    font-size:1rem;
    font-weight:bold;
    background: -webkit-gradient(linear,left top,left bottom,from(#fff),to(#e4e4e9)) no-repeat;
    background: linear-gradient(#fff,#e4e4e9) no-repeat;
    box-shadow: 0 7px 13px -3px rgba(115,158,211,.3), 0 2px 4px 0 rgba(115,158,211,.4), inset 0 -2px 0 0 #cfd1e3;
    max-width:340px;
    width:100%;
    margin:0 auto;
    @media (min-width:992px) {
        max-width:initial;
        padding: 1.5rem 0;
        font-size:1.5rem;
    }
`

export default ({
    ctaLink,
    ctaText,
    title
}) => (
    <section>
        <WavesBg/>
        <Container
            sm={`
                padding-top:3rem;
                padding-bottom:3rem;
                display:grid;
                grid-template-columns: 1fr;
                grid-row-gap:1.5rem;
            `}
            lg={`
                align-items:center;
                padding-top:4.5rem;
                padding-bottom:4.5rem;
                grid-template-columns: 1.5fr 1fr;
                grid-column-gap: 3rem;
            `}
        >
            <Title>{title}</Title>
            <Button to={ctaLink}>{ctaText}</Button>
        </Container>
    </section>
)