import React from 'react'
import styled from 'styled-components'

const Header = styled.div`
    border-top:0.25rem solid #739ed3;
    box-shadow: 0 12px 8px -10px rgba(0,0,0,.15);
`
const Title = styled.h4`
    padding:0.75rem;
    font-size: 1.38316rem;
    font-weight:normal;
`

export default ({
    title
}) => {
    return (
        <Header>
            <Title>{title}</Title>
        </Header>
    )
}