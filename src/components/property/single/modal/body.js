import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { useStaticQuery, graphql } from 'gatsby'

const Body = styled.div`
    height:calc(100% - 4rem);
    padding:0 0.75rem 0.75rem 0.75rem;
    overflow:auto;
`
const Title = styled.h5`
    font-size:1.15rem;
    font-weight:normal;
    padding-bottom:0.75rem;
    padding-top:0.75rem;
    border-bottom:1px solid #dae1e7;
`
const List = styled.ul`
    list-style:none;
    margin:0;
    padding:0;
`
const Item = styled.li`
    font-size:0.9rem;
    padding:0.5rem;
    line-height:1;
    :nth-child(even) {
        background-color:#f0f3f5;
    }
`
const Image = styled(Img)`

`

export default ({
    features,
    amenities,
    floorPlans
}) => {
    return (
        <Body>
            <Title>Facts and Features</Title>
            <List>
                {features.map((feature, index) => (
                    Object.values(feature)[0] &&
                    <Item key={index}>
                        <strong>{Object.keys(feature)[0]}</strong>: {Object.values(feature)[0]}
                    </Item>
                ))}
            </List>
            <Title>Amenities</Title>
            <List>
                {amenities.map((amenitiy, index) => (
                    <Item key={index}>
                        {amenitiy}
                    </Item>
                ))}
            </List>
            {floorPlans &&
                <React.Fragment>
                    <Title>Floor Plans</Title>
                    {floorPlans.map((floorPlan) => (
                        <Image fluid={floorPlan.localFile.childImageSharp.fluid}/>
                    ))}
                </React.Fragment>
            }
        </Body>
    )
}