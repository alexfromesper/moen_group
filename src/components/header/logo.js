import React from 'react'
import styled from 'styled-components'

import image from '../../images/logo/logo.jpg'

const Logo = styled.img`
    display:block;
    margin:0;
    padding:0;
    max-width: 290px;
`

export default ({

}) => (
    <Logo src={image} />
)