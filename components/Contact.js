import React from 'react';
import { Button } from 'react-bootstrap';
import styles from './scss/Contact.module.scss'
const Contact = () => {
  return (
    <article className={`${styles.contact_wrapper} mx-auto px-5`} id="Contact">
        <h3 className='fw-bold text-center'>CONTACT US</h3>
        <p className='m-5'>
            If you have any question regarding products, email us or call 
            1-123-456-789 (toll free). We'll be right there with you.
        </p>
        <form className='d-flex flex-column'>
            
            <div className='row justify-content-between align-items-center my-4'>
                <div className='col-4 bg-dark text-white p-3'>
                    <label>Name:</label>
                </div>
                <div className='col-8'>
                    <input className='form-control p-3' type='text' placeholder='Name goes here...'></input>
                </div>
            </div>
            <div className='row justify-content-between align-items-center my-4'>
                <div className='col-4 bg-dark text-white p-3'>
                    <label>Email:</label>
                </div>
                <div className='col-8'>
                    <input className='form-control p-3' type='text' placeholder='Email goes here...'></input>
                </div>
            </div>
            <div className='row justify-content-between align-items-center my-4'>
                <div className='col-4 bg-dark text-white p-3'>
                    <label>Subject:</label>
                </div>
                <div className='col-8'>
                    <input className='form-control p-3' type='text' placeholder='Subject goes here...'></input>
                </div>
            </div>
            <div className='row justify-content-between align-items-start my-4'>
                <div className='col-4 bg-dark text-white p-3'>
                    <label>Subject:</label>
                </div>
                <div className='col-8'>
                    <textarea className='form-control p-3' rows="7" type='text' placeholder='Message goes here...'></textarea>
                </div>
            </div>
            <div className='d-flex justify-content-end'>
                <button type='button' className={`${styles.contact_btn} btn-lg btn-warning text-white col-2`}>
                    Send
                </button>
            </div>
            
            
        </form>
    </article>
  );
};

export default Contact;
