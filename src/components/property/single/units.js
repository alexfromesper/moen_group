import React from 'react'
import styled from 'styled-components'

// Components
import Wrapper from './detailsWrapper'

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
    padding:0;
    -webkit-appearance:none;
    outline:0;
    border:none;
    background-color:transparent;
    cursor:pointer;
    width:100%;
`
const Header = styled.div`

`
const Footer = styled.div`

`
const Status = styled.span`
    font-size: 0.75rem;
    border-radius: 0.25rem;
    padding: 0.25rem;
    font-weight: bold;
    line-height: 1;
    background-color: #c1f2e2;
    color: #1b805f;
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
                    unit_price,
                    unit_availability,
                    unit_bathroom,
                    unit_bedroom
                }, index) => (
                    <Item key={index}>
                        <Button>
                            <Header>
                                {unit_name}
                            </Header>
                            <Footer>
                            
                            </Footer>
                        </Button>
                    </Item>
                ))}
            </List>
        </Wrapper>
    )
}