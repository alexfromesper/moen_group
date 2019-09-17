import React from 'react'
import styled from 'styled-components'
import ReactPlayer from 'react-player'

const Video = styled(ReactPlayer)`
    position:absolute;
    padding-top: 56.25%;
    height: 100%;
    min-width: 100%;
    top:0;
    z-index: -1;
    &:before {
        content:'';
        display:block;
        position:absolute;
        top:0;
        bottom:0;
        left:0;
        right:0;
        width:100%;
        background-color:#000;
        opacity:0.5;
        z-index:2;
    }
    video {
        position:absolute;
        top:0;
        min-width:100%;
        min-height:100%;
    }
`

export default({
    url
}) => (
    <Video 
        volume={0} 
        muted 
        loop
        playing 
        url={url}
        width="auto"
        height=""
    />
)