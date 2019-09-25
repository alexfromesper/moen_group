import React, { useState } from 'react'
import styled from 'styled-components'

// Components
import Wrapper from '../detailsWrapper'
import Header from './header'
import Footer from './footer'
import Modal from '../modal/index'
import { EDEADLK } from 'constants'

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
    position:relative;
    display:grid;
    margin:0;
    padding:0.75rem 1.5rem 0.75rem 0.75rem;
    -webkit-appearance:none;
    outline:0;
    border:none;
    background-color:transparent;
    cursor:pointer;
    width:100%;
`
const Svg = styled.svg`
    fill:;
    position:absolute;
    transform:rotate(-90deg);
    top:calc(50% - 5px);
    height:10px;
    right:0.75rem;
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
                            <Svg x="0px" y="0px" viewBox="-296 391 18 12">
                                <path d="M-292.9,391.7l5,4.6c0.5,0.4,1.2,0.4,1.7,0l5-4.6l3.1,2.9l-8.1,7.5c-0.5,0.4-1.2,0.4-1.7,0l-8.1-7.5
                                L-292.9,391.7z"/>
                           </Svg>
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