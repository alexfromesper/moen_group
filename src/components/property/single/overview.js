import React from 'react'
import styled from 'styled-components'

// Components
import Wrapper from './detailsWrapper'

// Styled Components
const Icon = styled.svg`

`
const Description = styled.p`
    padding:0.75rem;
`

export default ({
    description
}) => {
    return (
        <Wrapper
            title={`Overview`}
        >
            <Description dangerouslySetInnerHTML={{ __html: description }}/>
        </Wrapper>
    )
}