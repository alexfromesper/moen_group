import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Content from '../templates/contact/index'

export default () => (
    <Layout>
        <SEO
            title="Contact Us"
            description="Iowa City Commerical and Residential Rental Properties"
        />
        <Content/>
    </Layout>
)