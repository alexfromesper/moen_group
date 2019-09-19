import React from 'react'

import Intro from './intro'
import About from './about'
import Properties from './properties'
import Features from './features'


export default ({

}) => (
    <React.Fragment>
        <Intro
            intro="Iowa City's Premium"
            title="Residential & Commercial Properties"
            description="Lorem ipsum dolor sit amet, duo ad choro appareat. Case erroribus eu eos Veri nullam in ius. Lorem ipsum dolor sit amet, duo ad choro appareat.        "
            ctaLink="/"
            ctaText="Start Your Search"
            subtitle="Trusted Locally By"
        />
        <About
            
        />
        <Properties
            title="Our Featured Properties"
            description="With over 8 years of experience crafting award winning digital solutions, find out how our web design and digital marketing solutions attract, engage, and convert the perfect audience."
        />
        <Features
            title="Experiences that matter to your business"
        />
    </React.Fragment>
)