import React, { useContext } from 'react'
import styled from 'styled-components'

// Global Theme
import Theme from '../../../context/theme'

// Styled Components
const List = styled.ul`
    list-style:none;
    margin:0;
    padding:0;
    display:grid;
    margin-top:3rem;
    position:relative;
    @media (min-width:992px) {
        grid-template-columns:1fr 1fr 1fr;
    }
    :before {
        content: '';
        position:absolute;
        top:50%;
        width:100%;
        height:1px;
        background-image: linear-gradient(90deg,transparent,#c5c9e0,transparent);
        z-index:2;
    }
`
const Item = styled.li`
    padding:1.5rem;
    :first-child, :nth-child(2) {
        border-right: 1px solid;
        border-image: linear-gradient(0deg,#c5c9e0,transparent) 1 100%;
    }
    :nth-child(4), :nth-child(5) {
        border-right: 1px solid;
        border-image: linear-gradient(180deg,#c5c9e0,transparent) 1 100%;
    }
`
const Title = styled.h3`
    font-size:1.25rem;
`
const Description = styled.p`
    font-size:0.85rem;
`
const Subtitle = styled.span`
    font-size:0.75rem;
    color:${props => props.theme.color.primary};
`

export default () => {
    const theme = useContext(Theme)
    const list = [
        {
            name: 'Jim Lawman',
            position: 'Satisfied Customer',
            testimonial: 'Pro ne repudiare vituperata. Zril consulatu posidonium mei ut. Has cu munere gubergren pertinacia, nostro causae dissentiet per an. Per duis simul te.'
        }, {
            name: 'Jim Lawman',
            position: 'Satisfied Customer',
            testimonial: 'Pro ne repudiare vituperata. Zril consulatu posidonium mei ut. Has cu munere gubergren pertinacia, nostro causae dissentiet per an. Per duis simul te.'
        }, {
            name: 'Jim Lawman',
            position: 'Satisfied Customer',
            testimonial: 'Pro ne repudiare vituperata. Zril consulatu posidonium mei ut. Has cu munere gubergren pertinacia, nostro causae dissentiet per an. Per duis simul te.'
        }, {
            name: 'Jim Lawman',
            position: 'Satisfied Customer',
            testimonial: 'Pro ne repudiare vituperata. Zril consulatu posidonium mei ut. Has cu munere gubergren pertinacia, nostro causae dissentiet per an. Per duis simul te.'
        }, {
            name: 'Jim Lawman',
            position: 'Satisfied Customer',
            testimonial: 'Pro ne repudiare vituperata. Zril consulatu posidonium mei ut. Has cu munere gubergren pertinacia, nostro causae dissentiet per an. Per duis simul te.'
        }, {
            name: 'Jim Lawman',
            position: 'Satisfied Customer',
            testimonial: 'Pro ne repudiare vituperata. Zril consulatu posidonium mei ut. Has cu munere gubergren pertinacia, nostro causae dissentiet per an. Per duis simul te.'
        }, 
    ]
    return (
        <List>
            {list.map(({
                name,
                position,
                testimonial
            }, index) => (
                <Item key={index}>
                    <Title>{name}</Title>
                    <Subtitle theme={theme}>{position}</Subtitle>
                    <Description>{testimonial}</Description>
                </Item>
            ))}
        </List>
    )
}