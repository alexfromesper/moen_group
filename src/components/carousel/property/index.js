import React from 'react'
import styled from 'styled-components'
import Slider from 'react-slick'
import Img from 'gatsby-image'

// Utils
import { sanitize } from '../utils/index'

// Components
import Controls from './controls'
import Wrapper from './wrapper'

// Styled Components
const CarouselWrapper = styled(Slider)`
    width:100%;
    height:250px;
    background-color: #eaeef1;
    display:grid;
    @media (min-width:992px) {
        height:350px;
    }
`
const Slide = styled(Img)`
    height:250px;
    @media (min-width:992px) {
        height:350px;
    }
`

export default class Carousel extends React.Component {
    state = {
        slideIndex: 0,
        updateCount: 0
    }
    previous = () => {
        this.slider.slickPrev()
    }
    next = () => {
        this.slider.slickNext()
    }
    goTo = (slide) => {
        this.slider.slickGoTo(slide)
    }
    render() {
        const settings = {
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            lazyLoad: true,
            autoplay: true,
            autoplaySpeed: 2000,
            fade: true,
            afterChange: () =>
            this.setState(state => ({ updateCount: state.updateCount + 1 })),
            beforeChange: (current, next) => this.setState({ slideIndex: next })
        }
        return (
            <Wrapper>
                <CarouselWrapper ref={c => (this.slider = c)} {...settings}>
                    {this.props.slides.map(({ title, localFile }, index) => (
                        <Slide key={index} fluid={localFile.childImageSharp.fluid} alt={`Client: ${sanitize(title)}`}/>
                    ))}
                </CarouselWrapper>
                <Controls
                    data={this.props.slides}
                    previous={this.previous}
                    next={this.next}
                    goTo={this.goTo}
                    slideIndex={this.state.slideIndex}
                />
            </Wrapper>
        )
    }
}