import React from 'react'

import Intro from './intro'
import About from './about'
import Properties from './properties'
import Features from './features'
import Cta from './cta'


export default () => (
    <React.Fragment>
        <Intro
            intro={`Iowa City's Premium`}
            title={`Residential & Commercial Properties`}
            description={`Lorem ipsum dolor sit amet, duo ad choro appareat. Case erroribus eu eos Veri nullam in ius. Lorem ipsum dolor sit amet, duo ad choro appareat.`}
            ctaLink={`/`}
            ctaText={`Start Your Search`}
            subtitle={`Trusted Locally By`}
        />
        <About
            title={`About Us`}
            intro={`Discover Our Story`}
            description={`Our locally owned firm brings together a seasoned group of REALTORS® who have decades of experience in the Corridor. All of our agents are equal owners who share a common vision and a great respect for one another. This translates into a direct benefit for our clients who have the support, resources, and expertise of our entire team behind every transaction. It also means our clients have the added advantage of only working with owners of the company.`}
        />
        <Properties
            title={`Our Featured Properties`}
            description={`With over 8 years of experience crafting award winning digital solutions, find out how our web design and digital marketing solutions attract, engage, and convert the perfect audience.`}
        />
        <Features
            title={`Experiences that matter to your business`}
        />
        <Cta
            title={`Ready to Get Started?`}
            ctaLink={`/`}
            ctaText={`Start Your Search`}
        />
    </React.Fragment>
)