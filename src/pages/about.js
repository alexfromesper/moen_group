import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Content from '../templates/about/index'

export default () => (
    <Layout>
        <SEO
            title="About Us"
            description="Iowa City Commerical and Residential Rental Properties"
        />
        <Content/>
    </Layout>
)
