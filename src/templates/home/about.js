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
    text-align:center;
    @media (min-width:992px) {
        grid-column: 2;
        text-align:left;
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
    font-size:0.85rem;
    text-transform:uppercase;
    font-weight:300;
    font-style:italic;
    line-height: 1;
    text-align:center;
    justify-content:center;
    &:after, &:before {
        content: '';
        display:inline-block;
        background-color: ${props => props.theme.color.primary};
        height:1px;
        width:1.25rem;
        margin-top:1px;
    }
    &:after {
        margin-left:0.75rem;
    }
    &:before {
        margin-right:0.75rem;
    }
    @media (min-width:992px) {
        font-size:1rem;
        &:before {
            display:none;
        }
        &:before, &:after {
            width:2rem;
        }
        justify-content:flex-start;
    }
`
const Description = styled.p`
    font-size:0.9rem;
    margin:1.5rem 0;
    @media (min-width:992px) {
        line-height:2;
    }
`

export default ({
    intro,
    title,
    description
}) => {
    const theme = useContext(Theme)
    return (
        <section>
            <Container
                sm={`
                    display:grid;
                    align-items:center;
                    padding-top:3rem;
                    padding-bottom:3rem;
                    grid-template-columns: 100%;
                    grid-row-gap: 1.5rem;
                `}
                lg={`
                    grid-template-columns: calc(50% - 1.5rem) calc(50% - 1.5rem);
                    grid-column-gap: 3rem;
                    padding-top:4.5rem;
                    padding-bottom:4.5rem;
                    grid-auto-flow: dense;
                `}
            >
                <Content>
                    <Title>{title}</Title>
                    <Subtitle theme={theme}>{intro}</Subtitle>
                    <Description>{description}</Description>
                    <Button 
                        type="Link"
                        content={"Discover More About Us"}
                        link={"/about"}
                    />
                </Content>
                <Carousel/>
            </Container>
        </section>
    )
}