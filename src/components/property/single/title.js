import React from 'react'
import styled from 'styled-components'

// Styled Components
const Title = styled.h1`
    font-size:1.25rem;
`

export default ({
    children
}) => {
    return (
        <Title>{children}</Title>
    )
}