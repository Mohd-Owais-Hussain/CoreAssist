import React from 'react'
import "./Contact.css"

function Contact() {
    return (
        <div className='Contact' id='contact-us'>
            <div className="contact-content">
                <h2 className='contact-heading'>Contact Us</h2>
                <p className='contact-subheading'>Have a project in mind? Let’s talk. We’re here to help you grow and succeed online.</p>
            </div>

            <form className="contact-form">
                <label className='label' htmlFor="name">Name</label>
                <input className='input' id='name' type="text" name="name" placeholder="Your Name" required />

                <label className='label' htmlFor="email">Email</label>
                <input className='input' id='email' type="email" name="email" placeholder="Your Email" required />

                <textarea  className='message-input' name="message" placeholder="Your Message" required></textarea>
                <button className='submit-btn' type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Contact