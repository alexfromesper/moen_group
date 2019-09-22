import React, { useContext } from 'react'
import styled from 'styled-components'
import { lighten } from 'polished'
import ReCAPTCHA from "react-google-recaptcha";

// Global Theme
import Theme from '../../../context/theme'

// Components
import Wrapper from './detailsWrapper'

// Styled Components
const Form = styled.form`
    padding: 0.75rem;
`
const Input = styled.input`
    -webkit-appearance:none;
    background-color:#eaeef1;
    padding:0.5rem;
    border:none;
    outline:0;
    width:100%;
    margin-bottom:0.75rem;
    border-radius:0.25rem;
`
const Textarea = styled.textarea`
    display:block;
    width:100%;
    margin-bottom:0.75rem;
    background-color:#eaeef1;
    padding:0.5rem;
    border:none;
    outline:0;
    border-radius:0.25rem;
`
const Button = styled.button`
    -webkit-appearance:none;
    border:none;
    outline:0;
    background-color: ${props => props.theme.color.primary};
    color:#fff;
    display:block;
    padding:0.75rem;
    border-radius:0.25rem;
    cursor:pointer;
    font-weight:bold;
    text-transform:uppercase;
`
const Message = styled.p`
    margin-bottom:0.75rem;
    padding:0.75rem;
    border-radius:0.25rem;
    ${props => props.success ? `
        background-color: ${lighten(0.55, "#1b805f")}}
        color:#1b805f;
    ` : `
        background-color: ${lighten(0.55, "#b20020")}}
        color:#b20020;
    `}
`

const Content = ({
    name,
    email,
    phone,
    message,
    warning,
    handleSubmit,
    handleChange
}) => {
    const theme = useContext(Theme)
    return (
        <Wrapper title={`Ask a Question`}>
            <Form onSubmit={handleSubmit}>
                { warning.message && <Message theme={theme} success={warning.success}>{ warning.message }</Message> }
                <Input type="text" name="name" value={name} onChange={handleChange} placeholder="Name" required/>
                <Input type="email" name="email" value={email} onChange={handleChange} placeholder="Email" required/>
                <Input type="tel" name="phone" value={phone} onChange={handleChange} placeholder="Phone" required/>
                <Textarea name="message" value={message} onChange={handleChange} placeholder="Message" required/>
                <Button theme={theme}>Send Message</Button>
            </Form>
        </Wrapper> 
    )
}

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
        }
    }

    handleSubmit = async (e) => {
        const url = process.env.CONTACT_URL ? 
            `${process.env.CONTACT_URL}/property` 
        : 
            `https://moen-email-server.herokuapp.com/property`
        
        e.preventDefault()
        
        const body = {
            ...this.state.form,
            property: this.props.property
        }

        const response = await fetch(url, {
            method: 'Post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
        })

        if (!response || response.status !== 200) {
            return this.setState({
                warning: {
                    success: false,
                    message: `Your message could not be sent at this time.`
                }
            })
        }

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
            />
        )
    }
}

export default Contact