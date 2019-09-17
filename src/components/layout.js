import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

import './layout.css'

import Header from './header/index'

const Main = styled.main`
  margin-top:4rem;
`

const Layout = ({ children }) => {
    const data = useStaticQuery(graphql`
        query SiteTitleQuery {
            site {
                siteMetadata {
                    title
                    menuLinks {
                      name
                      link
                    }
                }
            }
        }
    `)
    return (
      <React.Fragment>
        <Header menuLinks={data.site.siteMetadata.menuLinks}/>
        <Main>
          {children}
        </Main>
      </React.Fragment>
    )
}


export default Layout
