import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Content from '../templates/properties/index'

export default () => (
    <Layout>
        <SEO
            title="Our Properties"
            description="Iowa City Commerical and Residential Rental Properties"
        />
        <Content/>
    </Layout>
)

