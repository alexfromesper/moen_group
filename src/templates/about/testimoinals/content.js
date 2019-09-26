import React from 'react'
import styled from 'styled-components'

// Styled Components
const Title = styled.h2`
    text-align:center;
    margin-bottom:0.5rem;
`
const Description = styled.p`
    text-align:center;
`

export default () => {
    return (
        <React.Fragment>
            <Title>We’re a Company Built on Integrity and Innovation</Title>
            <Description>
                Lorem ipsum dolor sit amet, docendi mandamus ne eum. Verear oportere conclusionemque mel et.
            </Description>
        </React.Fragment>
    )
}