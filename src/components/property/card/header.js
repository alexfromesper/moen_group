import React from 'react'
import styled from 'styled-components'

// Components
import Background from './background'
import Price from './price'

// Styled Components
const Wrapper = styled.div`
    height:200px;
    position: relative;
    grid-row: 1;
    border:0.25rem solid #fff;
    border-bottom:none;
`

export default ({
    bg,
    units
}) => {
    return (
        <Wrapper>
            <Price units={units}/>
            <Background bg={bg}/>
        </Wrapper>
    )
}