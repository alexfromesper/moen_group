import React from 'react'
import styled from 'styled-components'
import Slider from 'react-slick'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

// Utils
import { sanitize } from '../utils/index'

// Components
import Controls from './controls'
import Wrapper from './wrapper'

// Styled Components
const CarouselWrapper = styled(Slider)`
    width:calc(100% - 3rem);
    height:250px;
    box-shadow: -2px 8px 22px 0 rgba(0,0,0,.15);
    background-color: #999;
    @media (min-width:992px) {
        width:calc(100% - 8rem);
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
            <StaticQuery query={graphql`
                query aboutCarouselQuery {
                    allFile(filter: {relativeDirectory: {eq: "about-carousel"}}) {
                        nodes {
                            id
                            name
                            childImageSharp {
                                fluid(maxHeight:250) {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                    }
                }
            `}
            render={data => (
                <Wrapper>
                    <CarouselWrapper ref={c => (this.slider = c)} {...settings}>
                        {data.allFile.nodes.map(({ name, childImageSharp }, index) => (
                            <Slide key={index} fluid={childImageSharp.fluid} alt={`Client: ${sanitize(name)}`}/>
                        ))}
                    </CarouselWrapper>
                    <Controls
                        data={data}
                        previous={this.previous}
                        next={this.next}
                        goTo={this.goTo}
                        slideIndex={this.state.slideIndex}
                    />
                </Wrapper>
            )}
            />
        )
    }
}