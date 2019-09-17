import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
    display:block;
    justify-self:flex-end;
    width: 2.5rem;
    height: 1.5rem;
    cursor:pointer;
    outline:0;
    padding:0;
    border:none;
    margin:0;
    transform: rotate(0deg);
    transition: .5s ease-in-out;
    background-color:transparent;
    span {
        display: block;
        position: absolute;
        transform-origin: left center;
        height:0.25rem;
        width:100%;
        background-color:#739ed3;
        border-radius:0.5rem;
        opacity:1;
        left:0;
        transform: rotate(0deg);
        transition: all .2s;
    }
    span:nth-child(1) {
        top: 0;
    }
    span:nth-child(2) {
        top: 50%
    }
    span:nth-child(3) {
        top: 100%;
    }
    ${props => props.open && `
        span:nth-child(1) {
            transform: rotate(37deg);
            top: 0;
            left: 0;
        }
        span:nth-child(2) {
            width: 0%;
            opacity: 0;
        }
        span:nth-child(3) {
            transform: rotate(-37deg);
            top:100%;
            left:0;
        }
    `}
    @media (min-width:992px) {
        display:none;
    }
`

export default ({
    open,
    handleClick
}) => (
    <Button 
        onClick={handleClick}
        open={open}
    >
        <span></span>
        <span></span>
        <span></span>
    </Button>
)