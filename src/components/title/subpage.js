import React from 'react'
import styled from 'styled-components'

// Components
import WavesBg from '../bg/wave'
import Container from '../container'

// Styled Components
const Title = styled.h1`
    color:#fff;
    text-align:center;
    text-shadow: 0 1px 3px rgba(0,0,0,.18);
    text-transform:uppercase;
    font-size:2rem;
    @media (min-width:992px) {
        font-size:2.5rem;
    }
`

export default ({
    title
}) => {
    return (
        <section>
            <WavesBg/>
            <Container
                sm={`
                    padding-top:3rem;
                    padding-bottom:3rem;
                `}
                lg={`
                    padding-top:4.5rem;
                    padding-bottom:4.5rem;
                `}
            >
                <Title>{title}</Title>
            </Container>
        </section>
    )
}