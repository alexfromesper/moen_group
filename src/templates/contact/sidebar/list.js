import React, { useContext } from 'react'
import styled from 'styled-components'

// Global Theme
import Theme from '../../../context/theme'

// Styled Components
const List = styled.ul`
    list-style:none;
    margin:0;
    padding:0 0.75rem;
`
const Item = styled.li`
    font-size:0.9rem;
    margin-bottom:0.5rem;
    :last-child {
        margin-bottom:0; 
    }
`
const Link = styled.a`
    ${props => props.strong && `
        color: ${props.theme.color.primary};
    `}
`

const ContentWrapper = ({
    link,
    strong,
    children
}) => {
    const theme = useContext(Theme)
    return (
        link ? 
        <Link 
            href={link}
            strong={strong}
            theme={theme}
        >
            {children}
        </Link>
    :
        children
    )
}

export default ({
    items
}) => {
    return (
        <List>
            {items.map((item, index) => (
                <Item key={index}>
                    <strong>{`${item.label}: `}</strong>
                    <ContentWrapper 
                        link={item.link} 
                        strong={item.strong ? item.strong : false}
                    >
                        {item.value}
                    </ContentWrapper>
                </Item>
            ))}
        </List>
    )
}