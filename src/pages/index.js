import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Content from '../templates/home/index'

export default () => (
  <Layout>
    <SEO title="Home"/>
    <Content/>
  </Layout>
)