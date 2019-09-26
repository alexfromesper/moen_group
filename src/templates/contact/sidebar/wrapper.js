import React, { useContext } from 'react'
import styled from 'styled-components'

// Global Theme
import Theme from '../../../context/theme'

// Styled Components
const Wrapper = styled.div`
    border:0.25rem solid #d3dbe2;
    border-radius:0.25rem;
    padding: 0.75rem 0;
`
const Title = styled.h2`
    border-left:0.25rem solid ${props => props.theme.color.primary};
    padding-left:0.75rem;
    margin-left:-0.25rem;
    margin-bottom:0.75rem;
    font-size:2rem;
`

export default ({
    title,
    children
}) => {
    const theme = useContext(Theme)
    return (
        <Wrapper>
            <Title theme={theme}>{title}</Title>
            {children}
        </Wrapper>
    )
}