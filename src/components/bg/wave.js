import React, { useContext, createRef } from 'react'
import styled from 'styled-components'
import { lighten, darken } from 'polished'

// Global Theme
import Theme from '../../context/theme'

// Conditional Imports
let SineWaves
if (typeof window !== 'undefined') {
    SineWaves = require('sine-waves')
}

// Styled Components
const Wrapper = styled.div`
    background: linear-gradient(45deg, ${props => lighten(0.1, props.theme.color.primary)}, ${props => darken(0.15, props.theme.color.primary)} 100%);
    position:absolute;
    width:100%;
    height:100%;
    top:0;
    bottom:0;
    right:0;
    left:0;
`
const Content = ({ wrapper }) => {
    const theme = useContext(Theme)
    return (
        <Wrapper theme={theme}>
            <canvas ref={wrapper}></canvas>
        </Wrapper>
    )
}
class WavesBg extends React.Component {
    constructor(props) {
        super(props)
        this.wrapper = createRef()
    }
    componentDidMount() {
        if (typeof window !== 'undefined') {
            this.createWaves()
        }
    }
    createWaves = () => {
        const waves = new SineWaves({
            el: this.wrapper.current,
            speed: 2,
            rotate: 0,
            ease: 'SineInOut',
            waveWidth: '100%',
            width: this.wrapper.current.parentElement.clientWidth,
            height: this.wrapper.current.parentElement.clientHeight,
            waves: [
                {
                    timeModifier: 1,
                    lineWidth: 5,
                    amplitude: -50,
                    wavelength: 100
                }, {
                    timeModifier: 1.25,
                    lineWidth:3,
                    amplitude: -150,
                    wavelength: 100,
                }, {
                    timeModifier: .75,
                    lineWidth: 4,
                    amplitude: -100,
                    wavelength: 100
                }, {
                    timeModifier: 2,
                    lineWidth: 2,
                    amplitude: -125,
                    wavelength: 100
                }
            ],
            initialize: function (){},
            resizeEvent: function() {
            let gradient = this.ctx.createLinearGradient(0, 0, this.width, 0);
            gradient.addColorStop(0,"rgba(255, 255, 255, 0)");
            gradient.addColorStop(0.5,"rgba(255, 255, 255, 0.65)");
            gradient.addColorStop(1,"rgba(255, 255, 255, 0)");
        
            let index = -1;
            let length = this.waves.length;
                while(++index < length){
                this.waves[index].strokeStyle = gradient;
            }
            }
        })
    }
    render() {
        return (
            <Content wrapper={this.wrapper}/>
        )
    }
}


export default WavesBg