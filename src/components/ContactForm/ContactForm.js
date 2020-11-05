import React, { useState } from 'react'
import './ContactForm.css'

const ContactForm = () => {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [message, setMessage] = useState()

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <form className='contactForm' onSubmit={handleSubmit}>
            <h1>Contact Us</h1>
            <label>Name <span>*</span></label>
            <input
                type='text'
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <label>Email <span>*</span></label>
            <input
                type='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <label>Message <span>*</span></label>
            <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            />      

            <button>SUBMIT</button>
        </form>
    )
}

export default ContactForm
