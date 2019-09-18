import React, { useContext } from 'react'
import styled from 'styled-components'

// Global Theme
import Theme from '../../context/theme'

// Components
import Container from '../../components/container'
import Button from '../../components/button'
import Carousel from '../../components/carousel/about/index'

// Styled Components
const Content = styled.div`
    @media (min-width:992px) {
        grid-column: 2;
    }
`
const Title = styled.h1`
    text-transform:uppercase;
    font-size:2rem;
    margin-bottom:0.5rem;
    @media (min-width:992px) {
        font-size:2.5rem;
        letter-spacing:2px;
    }
`
const Subtitle = styled.figure`
    display:flex;
    align-items:center;
    font-size:1rem;
    text-transform:uppercase;
    font-weight:300;
    font-style:italic;
    line-height: 1;
    &:after {
        content: '';
        display:inline-block;
        background-color: ${props => props.theme.color.primary};
        height:1px;
        width:2rem;
        margin-top:1px;
        margin-left:0.75rem;
    }
`
const Description = styled.p`
    margin:1rem 0;
    font-size:0.9rem;
    line-height:1.25;
    @media (min-width:992px) {
        margin:1rem 0;
        line-height:2;
    }
`

export default ({

}) => {
    const theme = useContext(Theme)
    return (
        <section>
            <Container
                sm={`
                    display:grid;
                    align-items:center;
                    padding-top:2rem;
                    padding-bottom:2rem;
                    grid-template-columns: 100%;
                    grid-row-gap: 1rem;
                `}
                lg={`
                    grid-template-columns: calc(50% - 1rem) calc(50% - 1rem);
                    grid-column-gap: 2rem;
                    padding-top:4rem;
                    padding-bottom:4rem;
                    grid-auto-flow: dense;
                `}
            >
                <Content>
                    <Title>About Us</Title>
                    <Subtitle theme={theme}>Discover Our Story</Subtitle>
                    <Description>
                        Our locally owned firm brings together a seasoned group of REALTORS® who have decades of experience in the Corridor. All of our agents are equal owners who share a common vision and a great respect for one another. This translates into a direct benefit for our clients who have the support, resources, and expertise of our entire team behind every transaction. It also means our clients have the added advantage of only working with owners of the company.
                    </Description>
                    <Button 
                        type="Link"
                        content={"Discover More About Us"}
                        link={"/"}
                    />
                </Content>
                <Carousel/>
            </Container>
        </section>
    )
}