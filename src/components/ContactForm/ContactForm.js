import React, { useState } from 'react'
import { CircularProgress } from '@material-ui/core'
import { Error, Check } from '@material-ui/icons'
import axios from 'axios'

import './ContactForm.css'

const ContactForm = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [error, setError] = useState(null)
    const [success, setSuccess] = useState(null)
    const [loading, setLoading] = useState(false)

    const clearFields = () => {
        setError('')
        setName('')
        setEmail('')
        setMessage('')
    }

    //https://genetech-backend.herokuapp.com/contact
    //http://localhost:5000/contact
    const handleSubmit = (e) => {
        e.preventDefault()
        setLoading(true)
        axios.post('https://genetech-backend.herokuapp.com/contact', { name, email, message})
            .then(res => {
                setLoading(false)
                clearFields()
                setSuccess(res.data)
            })
            .catch(err => {
                setLoading(false)
                setSuccess('')
                if(err.response) {
                    setError(err.response.data)
                } else {
                    setError('Network too slow or inactive')
                }
                
            })
    }

    return (
        <form className='contactForm' method='POST' onSubmit={handleSubmit}>
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

            {error&& <p className='contactForm__error'><Error />{error}</p>}
            {success&& <p className='contactForm__success'><Check />{success}</p>}

            <button>SUBMIT {loading&& <CircularProgress size={16} />}</button>
        </form>
    )
}

export default ContactForm
