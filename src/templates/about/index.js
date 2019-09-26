import React from 'react'

// Components
import Header from './header'
import Features from './features/index'
import Testimoinals from './Testimoinals/index'
import Cta from './cta'

export default () => {
    return (
        <React.Fragment>
            <Header/>
            <Features/>
            <Testimoinals/>
            <Cta
                title={`Ready to Get Started?`}
                ctaLink={`/properties`}
                ctaText={`Start Your Search`}
            />
        </React.Fragment>
    )
}