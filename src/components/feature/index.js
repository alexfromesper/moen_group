import React from 'react'

// Components
import Content from './content'
import Banner from './banner'

export default ({
    intro,
    title,
    description,
    bg,
    logo
}) => {
    return (
        <React.Fragment>
            <Content
                intro={intro}
                title={title}
                description={description}
            />
            <Banner
                bg={bg}
                logo={logo}
            />
        </React.Fragment>
    )
}