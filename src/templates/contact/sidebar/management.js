import React from 'react'
import styled from 'styled-components'

// Components
import Wrapper from './wrapper'
import List from './list'

// Styled Components
const Separator = styled.hr`
    margin:0.75rem auto;
    width:calc(100% - 1.5rem);
    background-color: #d3dbe2;
`

export default () => {
    const bobby = [
        {
            label: `Name`,
            value: `Bobby Jet`
        }, {
            label: `Phone Number`,
            value: `(319) 430-8386`,
            link: `tel:3194308386`
        }, {
            label: `Email Address`,
            value: `bobby@moengroup.com`,
            link: `mailto:bobby@moengroup.com`,
            strong: true
        }
    ]
    const marc = [
        {
            label: `Name`,
            value: `Marc Moen`
        }, {
            label: `Phone Number`,
            value: `(319) 430-3010`,
            link: `tel:3194303010`
        }, {
            label: `Email Address`,
            value: `marc@moengroup.com`,
            link: `mailto:marc@moengroup.com`,
            strong: true
        }
    ]
    return (
        <Wrapper
            title={`Management`}
        >
            <List items={bobby}/>
            <Separator/>
            <List items={marc}/>
        </Wrapper>
    )
}