import React, { useState } from 'react'
import styled from 'styled-components'

// Components
import Wrapper from '../detailsWrapper'
import Header from './header'
import Footer from './footer'
import Modal from '../modal/index'

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
    const [isOpen, toggleModal] = useState(false)
    const [activeUnit, handleActiveUnit] = useState(false)
    const handleClose = () => {
        return toggleModal(false)
    }
    return (
        <React.Fragment>
        <Wrapper
            title={`Property Units`}
        >
            <List>
                {units.map((unit, index) => (
                    <Item key={index}>
                        <Button onClick={() => {
                            toggleModal(!isOpen)
                            handleActiveUnit(unit)
                        }}>
                            <Header
                                title={unit.unit_name}
                                status={unit.unit_availability}
                            />
                            <Footer
                                price={unit.unit_price}
                                bed={unit.unit_bathroom}
                                bath={unit.unit_bedroom}
                            />
                        </Button>
                    </Item>
                ))}
            </List>
        </Wrapper>
        <Modal
            isOpen={isOpen}
            title={`test`}
            handleClose={handleClose}
            unit={activeUnit}
        />
        </React.Fragment>
    )
}