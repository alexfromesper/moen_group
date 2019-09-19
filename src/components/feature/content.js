import React, { useContext } from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

// Global Theme
import Theme from '../../context/theme'

// Styled Components
const Wrapper = styled.div`
    @media(min-width:992px) {
        direction: ltr;
    }
`
const Intro = styled.figure`
    font-weight:bold;
    color: ${props => props.theme.color.primary};
    margin-bottom:0.25rem;
`
const Subtitle = styled.h3`
    font-size:1.5rem;
    font-weight:400;
    @media (min-width:992px) {
        font-size:1.75rem;
    }
`
const Description = styled.p`
    margin:1rem 0;
    @media (min-width:992px) {
        line-height:2;
    }
`
const Button = styled(Link)`
    display:flex;
    align-items:center;
    color:${props => props.theme.color.primary};
    font-weight:bold;
    text-transform:uppercase;
    line-height:1;
    width:fit-content;
    &:before, &:after {
        content: '';
        display:block;
    }
    &:before {
        background-color: #739ed3;
        width: 20px;
        height: 1px;
        margin-top: 1px;
        margin-right: 10px;
        -webkit-transition: width .1s ease;
        transition: width .1s ease;
    }
    &:hover:before {
        width:30px;
    }
    &:after {
        width: 0;
        height: 0;
        margin-left: 10px;
        margin-top: 2.5px;
        border-top: 5px solid transparent;
        border-bottom: 5px solid transparent;
        border-left: 5px solid #739ed3;
    }
`

export default ({
    intro,
    title,
    description,

}) => {
    const theme = useContext(Theme)
    return (
        <Wrapper>
            <Intro theme={theme}>{intro}</Intro>
            <Subtitle>{title}</Subtitle>
            <Description>{description}</Description>
            <Button theme={theme} to="/">Learn More</Button>
        </Wrapper>
    )
}