import React from 'react'
import styled from 'styled-components'

// Components
import Container from '../../components/container'
import Title from '../../components/title/subpage'
import Form from './form/index'
import Sidebar from './sidebar/index'

// Styled Components
const Section = styled.section`
    background-image: linear-gradient(180deg,#f5f5fa,#ebebf0);
`

export default () => {
    return (
        <React.Fragment>
            <Title
                title={`Contact Us`}
            />
            <Section>
                <Container
                    sm={`
                        padding-top:3rem;
                        padding-bottom:3rem;
                        display:grid;
                        grid-row-gap:1.5rem;
                    `}
                    lg={`
                        grid-template-columns: 8fr 4fr;
                        grid-column-gap:4.5rem;
                        padding-top:4.5rem;
                        padding-bottom:4.5rem;
                    `}
                >
                    <Form/>
                    <Sidebar/>
                </Container>
            </Section>
        </React.Fragment>
    )
}