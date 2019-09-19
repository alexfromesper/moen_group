import React, { useContext } from 'react'
import styled from 'styled-components'

// Global Theme
import Theme from '../../context/theme'

// Assets
import Webm from '../../images/banner.webm'
import Mp4 from '../../images/banner.mp4'

// Components
import Container from '../../components/container'
import VideoBg from '../../components/bg/video'
import Button from '../../components/button'
import Carousel from '../../components/carousel/client/index'

// Styled Components
const Intro = styled.span`
    display:block;
    font-size:1rem;
    font-weight:400;
    margin-bottom:0.25rem;
    @media (min-width:992px) {
        font-size:1.75rem;
    }
`
const Title = styled.h1`
    color:#fff;
    text-transform:uppercase;
    font-size:1.75rem;
    @media (min-width:992px) {
        max-width:75%;
        font-size:3.5rem;
    }
`
const Separator = styled.hr`
    background-color:${props => props.theme.color.primary};
    height:4px;
    margin: 1rem 0;
    max-width:7rem;
`
const Description = styled.p`
    max-width:75%;
    color:#fff;
    font-size:1rem;
    margin-bottom:1rem;
    @media (min-width:992px) {
        font-size:1.35rem;
    }
`
const Clients = styled.div`
    width:100%;
    background-color:rgba(255,255,255,0.25);
`
const Subtitle = styled.h2`
    color:#fff;
    font-style:italic;
    font-weight:400;
    text-shadow: 0 1px 3px rgba(0,0,0,.18);
    text-align:center;
    @media (min-width:992px) {
        text-align:left;
        font-size:2rem;
    }
`

export default ({
    intro,
    title,
    description,
    ctaLink,
    ctaText,
    subtitle
}) => {
    const theme = useContext(Theme)
    return (
        <section>
            <Container
                sm={`
                    padding-top:3rem;
                    padding-bottom:3rem;
                `}
                lg={`
                    padding-top:6rem;
                    padding-bottom:6rem;
                `}
            >
                <Title>
                    <Intro>{`${intro} `}</Intro>
                    {title}
                </Title>
                <Separator theme={theme}/>
                <Description>{description}</Description>
                <Button 
                    type="Link"
                    content={ctaText}
                    link={ctaLink}
                />
            </Container>
            <Clients>
                <Container
                    sm={`
                        display:grid;
                        grid-template-columns: 100%;
                        grid-row-gap: 1.5rem;
                        align-items:center;
                        padding-top:1.5rem;
                        padding-bottom:1.5rem;
                    `}
                    lg={`
                        grid-template-columns: 30% 70%;
                        padding-top:2rem;
                        padding-bottom:2rem;
                    `}
                >
                    <Subtitle>{subtitle}</Subtitle>
                    <Carousel/>
                </Container>
            </Clients>
            <VideoBg webm={Webm} mp4={Mp4}/>
        </section>
    )    
}