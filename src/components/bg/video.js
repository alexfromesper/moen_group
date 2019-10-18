import React, { useEffect, useState, createRef } from 'react'
import styled from 'styled-components'
import ReactPlayer from 'react-player'

const Wrapper = styled.div`
    position:absolute;
    height: 100%;
    min-width: 100%;
    top:0;
    z-index: -1;
`

const Video = styled(ReactPlayer)`
    position:absolute;
    padding-top: 56.25%;
    height: 100%;
    min-width: 100%;
    top:0;
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
    webm,
    mp4
}) => {
    const wrapper = createRef()

    const [play, togglePlay] = useState(true)

    useEffect(() => {
        const height = wrapper.current.clientHeight

        if (typeof window !== 'undefined') {
            if (window.pageYOffset > height - 80 && play !== false) {
                togglePlay(false)
            }
            window.addEventListener('scroll', () => {
                if (window.pageYOffset > height - 80) {
                    return togglePlay(false)
                }
                return togglePlay(true)
            })
        }
    }, [wrapper, play])
    return (
        <Wrapper
            ref={wrapper}
        >
            <Video
                volume={0} 
                muted 
                loop
                playing={play}
                url={[
                    mp4 && { src: mp4, type: 'video/mp4' },
                    webm && { src: webm, type: 'video/webm' },
                ]}
                width="auto"
                height=""
            />        
        </Wrapper>
    )
}