import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Content from '../templates/properties/index'

const IndexPage = () => (
    <Layout>
        <SEO
            title="Our Properties"
            description="Iowa City Commerical and Residential Rental Properties"
        />
        <Content/>
    </Layout>
)

export default IndexPage
