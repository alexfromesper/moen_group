import React from 'react'

// Components
import Wrapper from './wrapper'
import List from './list'

// Styled Components

export default () => {
    const list = [
        {
            label: `Fax Number`,
            value: `(319) 358-6778`
        }, {
            label: `Office Number`,
            value: `(319) 351-3900`,
            link: `tel:3193513900`
        }, {
            label: `Email Address`,
            value: `hello@moengroup.com`,
            link: `tel:3193513900`,
            strong: true
        }, {
            label: `Address`,
            value: `221 E. College Street Iowa City, IA 52240`,
            link: `https://www.google.com/maps?q=${encodeURIComponent(`221 E. College Street Iowa City, IA 52240`)}`
        }
    ]
    return (
        <Wrapper
            title={`Get in Touch`}
        >
            <List items={list}/>
        </Wrapper>
    )
}