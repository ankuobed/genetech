import React, { useState } from 'react'
import { CircularProgress, Input, TextField, Snackbar, SnackbarContent } from '@material-ui/core'
import { Error, Check } from '@material-ui/icons'
import axios from 'axios'

import './ContactForm.css'

const ContactForm = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [error, setError] = useState(null)
    const [networkError, setNetworkError] = useState('')
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
                    setNetworkError('network too slow or inactive')
                }
                
            })
    }

    return (
        <div>
            <form className='contactForm' method='POST' onSubmit={handleSubmit}>
                <h1>Contact Us</h1>

                <label>Name <span>*</span></label>
                <Input
                    type='text'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    color='secondary'
                />

                <label>Email <span>*</span></label>
                <Input
                    type='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    color='secondary'
                />

                <label>Message <span>*</span></label>
                <TextField
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    multiline={true}
                    rows='10'
                    color='secondary'
                />      

                {error&& <p className='contactForm__error'><Error />{error}</p>}

                <button>{loading? <CircularProgress size={17} /> : 'SUBMIT'}</button>
            </form>

            <Snackbar
            open={success}
            onClose={() => setSuccess('')}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center'
            }}
            autoHideDuration={3000}>
                <p className='success'>{success}</p>
            </Snackbar>

            <Snackbar
            open={networkError}
            onClose={() => setNetworkError('')}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center'
            }}
            autoHideDuration={3000}>
                <p className='netError'>{networkError}</p>
            </Snackbar>
        </div>
    )
}

export default ContactForm