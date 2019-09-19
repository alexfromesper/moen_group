import React from 'react'
import styled from 'styled-components'

// Components
import Container from '../container'
import Logo from './logo'
import Cta from './cta'
import Menu from './menu'
import MobileMenu from './mobileMenu'
import Hamburger from './hamburger'

// Styled Components
const Wrapper = styled.header`
    height: 4rem;
    position: fixed;
    width:100%;
    background-color:#fff;
    box-shadow: 0 2px 4px rgba(0,0,0,.1);
    z-index:9;
    top:0;
`

class Header extends React.Component {
    state = {
        open: false,
    }
    handleClick = () => {
        this.setState((prevState) => ({
            open: !prevState.open
        }))
    }
    render() {
        return (
            <Wrapper>
                <Container
                    sm={`
                        display:grid;
                        grid-template-columns: 2fr 1fr;
                        height:100%;
                        align-items:center; 
                    `}
                    lg={`
                        grid-template-columns: 1fr 2fr 1fr;
                        height:100%;
                        align-items:center;
                    `}
                >
                    <Logo/>
                    <Menu menuLinks={this.props.menuLinks}/>
                    <Cta />
                    <Hamburger 
                        open={this.state.open}
                        handleClick={this.handleClick}
                    />
                </Container>
                <MobileMenu menuLinks={this.props.menuLinks}/>
            </Wrapper>
        )        
    }
}

export default Header