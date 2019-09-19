import React from 'react'
import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';

// Styled Components
const ParallaxWrapper = styled(Parallax)`
    position:absolute;
    top:0;
    left:0;
    right:0;
    bottom:0;
    z-index:-1;
    &:before {
        content: '';
        background-color:#000;
        opacity:0.4;
        top:0;
        left:0;
        right:0;
        bottom:0;
        position:absolute;
        z-index:1;
    }
    .parallax-inner {
        height:100%;
        width:100%;
    }
`
const Background = styled(BackgroundImage)`
    height:100%;
    width:100%;
`

export default ({
    bg
}) => (
    <ParallaxProvider>
        <ParallaxWrapper y={[-20, 20]}>
            <Background fluid={bg}/>
        </ParallaxWrapper>
    </ParallaxProvider>
)