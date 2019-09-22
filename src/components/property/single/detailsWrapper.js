import React, { useContext } from 'react'
import styled from 'styled-components'

// Global Theme
import Theme from '../../../context/theme'

// Styled Components
const Wrapper = styled.div`
    box-shadow: 0 2px 4px 0 rgba(14,30,37,.12);
    background-color: #fff;
    border-radius: 0.25rem;
    border-top:0.25rem solid ${props => props.theme.color.primary};
`
const Title = styled.h3`
    border-bottom: 1px solid #dae1e7;
    padding:0.75rem;
    font-weight:normal;
`
export default ({
    title,
    children
}) => {
    const theme = useContext(Theme)
    return (
        <Wrapper theme={theme}>
            <Title theme={theme}>{title}</Title>
            {children}
        </Wrapper>
    )
}