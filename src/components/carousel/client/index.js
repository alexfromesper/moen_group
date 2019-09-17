import React from 'react'
import Slider from 'react-slick'
import styled from 'styled-components'
import Image from 'gatsby-image'
import { useStaticQuery, graphql } from 'gatsby'

// Utils
import { sanitize } from '../utils/index'

// Styled Components
const Carousel = styled(Slider)`
    width:100%;
    text-align:center;
    @media (min-width:992px) {
        text-align:right;
    }
`
const Slide = styled(Image)`
    max-width:calc(100% - 1rem);
    max-height: 65px;
`

export default () => {
    const { allFile } = useStaticQuery(graphql`
        query clientCarouselQuery {
            allFile(filter: {relativeDirectory: {eq: "clients"}}) {
                nodes {
                    id
                    name
                    childImageSharp {
                        fluid(maxHeight:65) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        }
    `)
    const data = allFile.nodes

    const settings = {
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false,
        lazyLoad: true,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2
                }
            }
        ]
    }
    return (
        <Carousel {...settings}>
            {data.map(({ id, name, childImageSharp }) => (
                <Slide key={id} fluid={childImageSharp.fluid} alt={`Client: ${sanitize(name)}`}/>
            ))}
        </Carousel>
    )
}