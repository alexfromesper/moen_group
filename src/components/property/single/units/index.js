import React from 'react'
import styled from 'styled-components'

// Components
import Wrapper from '../detailsWrapper'
import Header from './header'
import Footer from './footer'

// Styled Components
const List = styled.ul`
    margin:0;
    padding:0;
    list-style:none;
`
const Item = styled.li`
    :hover {
        background-color:#f0f3f5;
    }
    :nth-child(even) {
        background-color:#eaeef1;
        :hover {
            background-color:#e0e6eb;
        }
    }
`
const Button = styled.button`
    display:grid;
    margin:0;
    padding:0.75rem;
    -webkit-appearance:none;
    outline:0;
    border:none;
    background-color:transparent;
    cursor:pointer;
    width:100%;
`

export default ({
    units
}) => {
    return (
        <Wrapper
            title={`Property Units`}
        >
            <List>
                {units.map(({
                    unit_name,
                    unit_availability,
                    unit_price,
                    unit_bathroom,
                    unit_bedroom
                }, index) => (
                    <Item key={index}>
                        <Button>
                            <Header
                                title={unit_name}
                                status={unit_availability}
                            />
                            <Footer
                                price={unit_price}
                                bed={unit_bathroom}
                                bath={unit_bedroom}
                            />
                        </Button>
                    </Item>
                ))}
            </List>
        </Wrapper>
    )
}