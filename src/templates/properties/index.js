import React, { useState } from 'react'
import styled from 'styled-components'

// Components
import Container from '../../components/container'
import Title from '../../components/title/subpage'
import List from './list'

// Styled Components
const Section = styled.section`
    background-image: linear-gradient(180deg,#f5f5fa,#ebebf0);
`

export default ({
    title,
    description
}) => {
    const [ filter, setFilter ] = useState(null)
    return (
        <React.Fragment>
            <Title
                title={`Our Properties`}
            />
            <Section>
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
                    <List filter={filter}/>
                </Container>
            </Section>
        </React.Fragment>
    )
}