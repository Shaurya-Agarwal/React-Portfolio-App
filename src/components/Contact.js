import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'

const Contact = () => {
    return (
        <>
        <section className="contact" id="contact">
            <h1>CONTACT</h1>
            <div className="container">
                <div className="contact-container">
                        <div className="icon-phone">
                        <FontAwesomeIcon icon={faPhone} />                        
                        </div>
                        <div className="contact-text">
                        <b>Contact No: 7017223077</b><br/>
                        <b>Email: shaurya170401@gmail.com</b>
                        </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default Contact
