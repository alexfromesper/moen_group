import React, { useContext } from 'react'
import styled from 'styled-components'

// Global Theme
import Theme from '../../../context/theme'

// Components
import Container from '../../../components/container'
import Item from './item'

// Styled Components
const Section = styled.section`
    position:relative;
    z-index:2;
    overflow: visible;
`
const Title = styled.h2`
    font-size:2.25rem;
    font-weight:normal;
    line-height:1.15;
`
const Strong = styled.strong`
    color:${props => props.theme.color.primary};
`

export default () => {
    const theme = useContext(Theme)
    const items = [
        {
            title: 'Location',
            description: 'Everything You Need Close By'
        }, {
            title: 'Amenities',
            description: 'Enjoy Access to Premium Amenities'
        }, {
            title: 'Security',
            description: 'Safe, Secure, and Modern Security'
        }, 
    ]
    return (
        <Section>
            <Container
                sm={`
                    background-color:#fff;
                    box-shadow: 0 4px 11px 0 rgba(37,44,97,.15), 0 1px 3px 0 rgba(93,100,148,.2);
                    padding:1.5rem;
                    margin-top:-1.5rem;
                    display:grid;
                    grid-template-columns:1fr;
                    border-radius: 0.25rem;
                `}
                lg={`
                    grid-template-columns:1.5fr 1fr 1fr 1fr;
                    grid-column-gap:1.5rem;
                    align-items: center;
                    padding:3rem;
                    margin-top:-7rem;
                `}
            >
                <Title>Everything that <Strong theme={theme}>matters</Strong> to your business.</Title>
                {items.map(({ title, description }) => (
                    <Item
                        title={title}
                        description={description}
                    />
                ))}
            </Container>
        </Section>
    )
}