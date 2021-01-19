import React from 'react'
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className='footer-container'>
            <section className='footer-subscription'>
                <p className='footer-subscription-heading'>
                    Join the Dark Side
                </p>
                <p className='footer-subscription.text'>
                    We have cookies
                </p>
                <div className='input-areas'>
                    <form>
                        <input type='email' name='email' placeholder='Email' className='footer-input'/>
                        <Button buttonStyle='btn--outline'>Subscribe</Button>
                    </form>
                </div>
            </section>
            <div className="footer-links">
                <div className="footer-links-wrapper">
                    <div className="footer-link-items">
                        <h2>About Us</h2>
                        <Link to="/">How it works</Link>
                        <Link to="/">Testimonials</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
