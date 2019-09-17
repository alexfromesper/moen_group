import React from 'react'
import styled from 'styled-components'

// Components
import Container from '../../components/container'
import Button from '../../components/button'
import Carousel from '../../components/carousel/about/index'

// Styled Components
const Content = styled.div`

`
const Title = styled.h1`

`
const Subtitle = styled.figure`

`
const Description = styled.p`

`

export default ({

}) => {
    return (
        <section>
            <Container
                sm={`
                    display:grid;
                    padding-top:2rem;
                    padding-bottom:2rem;
                    grid-template-columns: 100%;
                    grid-row-gap: 1rem;
                `}
                md={`
                    grid-template-columns: calc(50% - 1rem) calc(50% - 1rem);
                    grid-column-gap: 2rem;
                    padding-top:4rem;
                    padding-bottom:4rem;
                `}
            >
                <Carousel/>
                <Content>
                    <Title>About Us</Title>
                    <Subtitle>Discover Our Story</Subtitle>
                    <Description>
                        Our locally owned firm brings together a seasoned group of REALTORS® who have decades of experience in the Corridor. All of our agents are equal owners who share a common vision and a great respect for one another. This translates into a direct benefit for our clients who have the support, resources, and expertise of our entire team behind every transaction. It also means our clients have the added advantage of only working with owners of the company.
                    </Description>
                    <Button 
                        type="Link"
                        content={"Discover More About Us"}
                        link={"/"}
                    />
                </Content>
            </Container>
        </section>
    )
}