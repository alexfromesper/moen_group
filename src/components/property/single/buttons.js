import React, { useContext } from 'react'
import styled from 'styled-components'

// Global Theme
import Theme from '../../../context/theme'

// Styled Components
const Wrapper = styled.div`
    display:grid;
    grid-template-columns:1fr 1fr;
    grid-column-gap: 0.75rem;
    text-align:center;
`
const Question = styled.a`
    color: ${props => props.theme.color.primary};
    border: 2px solid ${props => props.theme.color.primary};
    padding: 0.5rem 0;
    border-radius:0.25rem;
    font-weight:bold;
    line-height:1;
`
const Call = styled.a`
    background-color: ${props => props.theme.color.primary};
    color:#fff;
    padding: 0.5rem 0;
    border-radius:0.25rem;
    font-weight:bold;
    line-height:1;
`

export default () => {
    const theme = useContext(Theme)
    return (
        <Wrapper>
            <Question theme={theme} href="#">Ask a Question</Question>
            <Call theme={theme} href="#">Give Us a Call</Call>
        </Wrapper>
    )
}