import React from 'react'
import styled from 'styled-components'
import Slider from 'react-slick'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

// Utils
import { sanitize } from '../utils/index'

// Components

// Styled Components
const Wrapper = styled.div`
`
const CarouselWrapper = styled(Slider)`
`
const Slide = styled(Img)`
    height:250px;
    @media (min-width:992px) {
        height:350px
    }
`
const Controls = styled.div`
    display: flex;
    justify-content:space-between;
    position: relative;
    width: calc(100% - 2rem);
    margin: 0 auto;
    height: 60px;
    bottom: 30px;
    background-color: #767683;
    border-radius: 45px;
    box-shadow: 0 12px 20px -10px rgba(115,158,211,.28), 0 4px 20px 0 rgba(0,0,0,.12), 0 7px 8px -5px rgba(147,201,227,.2);
    overflow: hidden;
`
const Arrow = styled.button`
    cursor: pointer;
    position: relative;
    z-index: 2;
    fill: #fff;
    border-radius: 0;
    outline: 0;
    margin: 0;
    height: 100%;
    width: 3rem;
    border: none;
    line-height: calc(100% - 9px);
    background-color: transparent;
    box-shadow: 0 0 11px 0 rgba(0,0,0,.35);
`
const ThumbnailList = styled.div`
    width:calc(100% - 6rem);
`
const Thumbnail = styled.button`
    padding:0;
    margin:0;
    outline:0;
    border:none;
    position:relative;
    -webkit-appearance:none;
    width:33.33%;
    height:100%;
    cursor:pointer;
    &:before {
        content:'';
        display:block;
        position:absolute;
        width:100%;
        height:100%;
        background-color:#1a1a1d;
        transition: all .2s;
        opacity:0.65;
        z-index: 2;
    }
    &.active:before {
        opacity:0;
    }
`
const ThumbnailImage = styled(Img)`
    height:100%;
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
            autoplay: false,
            autoplaySpeed: 2000,
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
                                fluid(maxHeight:300) {
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
                    <Controls>
                            <Arrow onClick={this.previous}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"></path></svg>
                            </Arrow>
                            <ThumbnailList>
                                {data.allFile.nodes.map(({ childImageSharp }, index) => (
                                    <Thumbnail key={index} onClick={() => this.goTo(index)} className={
                                        this.state.slideIndex === index && `active`
                                    }>
                                        <ThumbnailImage fluid={childImageSharp.fluid} alt=""/>
                                    </Thumbnail>
                                ))}
                            </ThumbnailList>
                            <Arrow onClick={this.next}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"></path></svg>
                            </Arrow>
                    </Controls>
                </Wrapper>
            )}
            />
        )
    }
}