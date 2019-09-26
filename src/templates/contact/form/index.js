import React from 'react'
import ReCAPTCHA from 'react-google-recaptcha';

// Components
import Content from './content'

class Contact extends React.Component {
    state = {
        form: {
            name: ``,
            email: ``,
            phone: ``,
            message: ``,
        },
        warning: {
            success: false,
            message: null
        },
        verified: false 
    }
    constructor(props) {
        super(props)
        this.state = {
            form: {
                name: ``,
                email: ``,
                phone: ``,
                message: ``,
            },
            warning: {
                success: false,
                message: null
            },
            verified: false 
        }
        this.recaptchaRef = React.createRef()
    }
    handleSubmit = async (e) => {
        // Prevent Default Actions        
        e.preventDefault()
        
        // Email Server Url
        const URL = `${process.env.GATSBY_CONTACT_URL}/property` 

        const recaptchaValue = this.recaptchaRef.current.getValue()

        // Captcha Validation
        if (!recaptchaValue) {
            return this.setState({
                warning: {
                    success: false,
                    message: `You must complete the captcha.`
                }
            })
        }

        const body = {
            ...this.state.form,
            property: this.props.property
        }

        const response = await fetch(URL, {
            method: 'Post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
        })

        // If Invalid Response, Return Error
        if (!response || response.status !== 200) {
            return this.setState({
                warning: {
                    success: false,
                    message: `Your message could not be sent at this time.`
                }
            })
        }

        // If Successful, Reset Fields and Display Success Message
        this.setState({
            form: {
                name: ``,
                email: ``,
                phone: ``,
                message: ``,
            },
            warning: {
                success: true,
                message: `Your message has been sent! A customer service representative will get back to you within 24 hours regarding your inquiry.`
            }
        })
    }
    handleChange = (e) => {
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        })
    }
    render() {
        const { name, email, phone, message } = this.state.form
        return (
            <Content
                name={name}
                email={email}
                phone={phone}
                message={message}
                warning={this.state.warning}
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
            >
                <ReCAPTCHA
                    ref={this.recaptchaRef}
                    sitekey={`${process.env.GATSBY_RECAPTCHA_KEY}`}
                />
            </Content>
        )
    }
}

export default Contact