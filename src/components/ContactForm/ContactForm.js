import React, { useState } from 'react'
import './ContactForm.css'
import { CircularProgress } from '@material-ui/core'

const ContactForm = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    //https://genetech-backend.herokuapp.com/contact
    const handleSubmit = (e) => {
        e.preventDefault()
        setLoading(true)
        fetch('http://localhost:5000/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email, message })
        }).then(res => {
            setLoading(false)
            if(res.status === 422) {
                res.json().then(err => setError(err))
            }
          })
          .catch(err => console.log(err));  
    }

    return (
        <form className='contactForm' onSubmit={handleSubmit}>
            <h1>Contact Us</h1>
            {error&& <p className='contactForm__error'>{error}</p>}
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

            <button>SUBMIT {loading&& <CircularProgress size={16} />}</button>
        </form>
    )
}

export default ContactForm
