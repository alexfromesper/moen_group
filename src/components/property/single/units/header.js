import React from 'react'
import styled from 'styled-components'
import { lighten } from 'polished'

// Styled Components
const Wrapper = styled.div`
    display:flex;
    align-items:center;
`
const Title = styled.h4`
    margin-right:0.75rem;
`
const Status = styled.span`
    font-size: 0.75rem;
    border-radius: 0.25rem;
    padding: 0.25rem;
    font-weight: bold;
    line-height: 1;
    ${props => props.color && `
        background-color:${lighten(0.55, props.color)};
        color:${props.color};
    `}
`

export default ({
    status,
    title
}) => {
    return (
        <Wrapper>
            <Title>{title}</Title>
            <Status color={status === "Available" ? "#1b805f" : "#b20020"}>{status}</Status>
        </Wrapper>
    )
}