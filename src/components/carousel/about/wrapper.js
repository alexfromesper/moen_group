import React, { useContext } from 'react'
import styled from 'styled-components'
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import { lighten } from 'polished'

// Global Theme
import Theme from '../../../context/theme'

const Border = styled(Parallax)`
    z-index:-1;
    .parallax-inner {
        display: block;
        height: 4rem;
        width: 1.5rem;
        box-shadow: 0 12px 20px -10px rgba(115,158,211,.28), 0 4px 20px 0 rgba(0,0,0,.12), 0 7px 8px -5px rgba(147,201,227,.2);
        @media (min-width:992px) {
            height: 8rem;
            width: 4rem;
        }
    }
    &.left {
        .parallax-inner {
            background-color: ${props => lighten(0.15, props.theme.color.primary)};
        }
    }
    &.right {
        align-self: flex-end;
        .parallax-inner {
            background-color: ${props => props.theme.color.primary};
        }
    }
`
const Wrapper = styled.div`
    display:flex;
    position:relative;
    padding-bottom: 1.5rem;
`

export default ({
    children
}) => {
    const theme = useContext(Theme)
    return (
        <ParallaxProvider>
            <Wrapper>
                <Border
                    className="left"
                    y={[0, 50]}
                    tagOuter="figure"
                    theme={theme}
                />
                {children}
                <Border
                    className="right" 
                    y={[0, -50]}
                    tagOuter="figure"
                    theme={theme}
                />
            </Wrapper>
        </ParallaxProvider>
    )
}