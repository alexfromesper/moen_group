import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    position:relative;
    width:100%;
    box-shadow: 0 2px 4px 0 rgba(14,30,37,.12);
    border-radius:0.25rem;
    overflow:hidden;
    position:sticky;
    top:100px;
`

export default ({
    children
}) => {
    return (
            <Wrapper>
                {children}
            </Wrapper>
    )
}