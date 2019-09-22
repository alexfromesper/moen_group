import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import image from '../../images/logo/logo.jpg'

const Logo = styled.img`
    display:block;
    margin:0;
    padding:0;
    max-width: 290px;
    width:100%;
`

export default ({

}) => (
    <Link to="/">
        <Logo src={image} />
    </Link>
)