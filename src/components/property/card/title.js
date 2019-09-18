import React from 'react'
import styled from 'styled-components'

// Styled Components
const Title = styled.h3`
    font-size:1.15rem;
`

export default ({
    children
}) => {
    return (
        <Title>{children}</Title>
    )
}