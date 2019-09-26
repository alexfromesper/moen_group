import React from 'react'
import styled from 'styled-components'

// Components
import Management from './management'
import Contact from './contact'

// Styled Components
const Wrapper = styled.div`
    display:grid;
    grid-template-columns:1fr;
    grid-row-gap:1.5rem;
    align-content: start;
`

export default ({

}) => {
    return (
        <Wrapper>
            <Contact/>
            <Management/>
        </Wrapper>
    )
}