import React from 'react'
import styled from 'styled-components'

// Components
import Container from '../../components/container'
import Feature from '../../components/feature'

// Styled Components
const Title = styled.h2`
    text-align:center;
    font-size:2rem;
    font-weight:normal;
    margin-bottom:3rem;
    @media (min-width:992px) {
        font-size:2.5rem;
        margin-bottom:4.5rem;
    }
`
const List = styled.ul`
    margin:0;
    padding:0;
    list-style:none;
    display:grid;
    grid-column-template: 1fr;
    grid-row-gap:3rem;
    @media (min-width:992px) {
        grid-row-gap:3rem;
    }
`
const Item = styled.li`
    display:grid;
    grid-template-columns: 1fr;
    grid-row-gap:1.5rem;
    @media (min-width:992px) {
        grid-template-columns: 1.25fr 1fr;
        grid-auto-flow: column;
        grid-column-gap: 3rem;
        align-items:center;
        &:nth-child(even) {
            direction: rtl;
        }
    }
`

export default ({
    title
}) => {
    return (
        <section>
            <Container
                sm={`
                    padding-top:3rem;
                    padding-bottom:3rem;
                `}
                lg={`
                    padding-top:4.5rem;
                    padding-bottom:4.5rem;
                `}
            >
            <Title>{title}</Title>
            <List>
                {tempData.map(({
                    feature_intro,
                    feature_title,
                    feature_description
                }, index) => (
                    <Item key={index}>
                        <Feature
                            intro={feature_intro}
                            title={feature_title}
                            description={feature_description}
                            bg={false}
                            logo={false}
                        />
                    </Item>
                ))}
            </List>
            </Container>
        </section>
    )
}

const tempData = [
    {
        feature_intro: `Location`,
        feature_title: `Everything You Need Close By`,
        feature_description: `Get an instant valuation for your home, and let us find your potential buyers who are searching for properties just like yours. Start with an automated valuation for a rough home valuation estimate, then speak with one of our local real estate experts!`
    },
    {
        feature_intro: `Amenities`,
        feature_title: `Enjoy Access to Premium Amenities`,
        feature_description: `Get an instant valuation for your home, and let us find your potential buyers who are searching for properties just like yours. Start with an automated valuation for a rough home valuation estimate, then speak with one of our local real estate experts!`
    },
    {
        feature_intro: `Security`,
        feature_title: `Safe, Secure, and Modern Security`,
        feature_description: `Get an instant valuation for your home, and let us find your potential buyers who are searching for properties just like yours. Start with an automated valuation for a rough home valuation estimate, then speak with one of our local real estate experts!`
    }
]