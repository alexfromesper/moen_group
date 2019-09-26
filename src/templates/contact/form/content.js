import React, { useContext } from 'react'
import styled from 'styled-components'
import { lighten } from 'polished'

// Global Theme
import Theme from '../../../context/theme'

// Styled Components
const Wrapper = styled.div`

`
const Title = styled.h2`
    font-size: 2rem;
`
const Description = styled.p`
    font-size:1rem;
    margin: 0.25rem 0 0.75rem 0;
`
const Form = styled.form`
`
const Input = styled.input`
    -webkit-appearance:none;
    background-color:#d3dbe2};
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
    background-color:#d3dbe2;
    padding:0.5rem;
    border:none;
    outline:0;
    border-radius:0.25rem;
    min-width:100%;
    width:100%;
    max-width:100%;
    min-height:9rem;
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
    margin-top:0.75rem;
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

export default ({
    children,
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
        <Wrapper>
            <Title>Give Us Some Details</Title>
            <Description>Have questions or concerns regarding our services? Fill out the form below (or give us a ring), and a customer service representative will reach out to you shortly.</Description>
            <Form onSubmit={handleSubmit}>
                { warning.message && <Message theme={theme} success={warning.success}>{ warning.message }</Message> }
                <Input type="text" name="name" value={name} onChange={handleChange} placeholder="Name" required/>
                <Input type="email" name="email" value={email} onChange={handleChange} placeholder="Email" required/>
                <Input type="tel" name="phone" value={phone} onChange={handleChange} placeholder="Phone" required/>
                <Textarea name="message" value={message} onChange={handleChange} placeholder="Message" required/>
                {children}
                <Button theme={theme}>Send Message</Button>
            </Form>
        </Wrapper>
    )
}