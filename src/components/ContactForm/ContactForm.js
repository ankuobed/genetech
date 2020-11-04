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
            <input
                type='text'
                placeholder='name'
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <input
                type='email'
                placeholder='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <textarea
                placeholder='message'
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            />      

            <button>SUBMIT</button>
        </form>
    )
}

export default ContactForm
