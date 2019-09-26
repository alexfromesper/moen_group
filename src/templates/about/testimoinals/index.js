import React from 'react'
import styled from 'styled-components'

// Components
import Container from '../../../components/container'
import Content from './content'
import Testimonials from './testimonials'

// Styled Components
const Section = styled.section`
`

export default () => {
    return (
        <Section>
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
                <Content/>
                <Testimonials/>
            </Container>
        </Section>
    )
}