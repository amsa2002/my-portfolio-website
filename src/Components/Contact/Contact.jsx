// import React, { useRef } from 'react'
// import emailjs from '@emailjs/browser'
// import './Contact.css'

// function Contact() {

//     const form = useRef();

//     const sendEmail = (e) => {
//       e.preventDefault();
  
//       emailjs
//         .sendForm('service_guutpqm', 'template_79d0455', form.current, {
//           publicKey: 'ss0ZIG4J5PBPCkhNl',
//         })
//         .then(
//           () => {
//             console.log('SUCCESS!');
//           },
//           (error) => {
//             console.log('FAILED...', error.text);
//           },
//         );
//     };

//   return (
//     <div className='contact-container'>
//         <h1>Contact</h1>
//         <form ref={form} onSubmit={sendEmail}>
//             <label>Name</label>
//             <input type="text" name="from_name" />
//             <label>Email</label>
//             <input type="email" name="from_email" />
//             <label>Message</label>
//             <textarea name="message" />
//             <input type="submit" value="Send" />
//         </form>
//     </div>
//   )
// }

// export default Contact

import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

function Contact() {
    const form = useRef();
    const [message, setMessage] = useState('');
    const [formData, setFormData] = useState({
        from_name: '',
        from_email: '',
        message: ''
    });

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const sendEmail = (e) => {
        e.preventDefault();

        // Validation
        if (!formData.from_name || !formData.from_email || !formData.message) {
            setMessage('Please fill out all fields!');
            return;
        }

        // Email validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(formData.from_email)) {
            setMessage('Please enter a valid email address!');
            return;
        }

        // Send email
        emailjs.sendForm(import.meta.env.VITE_SERVICE_ID,
            import.meta.env.VITE_TEMPLATE_ID, form.current, {
            publicKey: import.meta.env.VITE_PUBLIC_KEY,
        })
        .then(
            () => {
                setMessage('Email sent successfully!');
                setFormData({ from_name: '', from_email: '', message: '' }); // Clear form
            },
            (error) => {
                setMessage('Failed to send email. Please try again later.');
                console.error('FAILED...', error.text);
            }
        );
    };

    return (
        <div className='contact-container' id='contact'>
            <h1>Contact</h1>
            <div className='contact-form'>
                <h2>Email me</h2>
                {message && <p className="message">{message}</p>}
                <form ref={form} onSubmit={sendEmail}>
                    <div className="mb-3">
                        <label className="form-label">Name</label>
                        <input 
                            type="name" 
                            name="from_name" 
                            value={formData.from_name}
                            onChange={handleChange}
                            className="form-control"
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input 
                            type="email" 
                            name="from_email" 
                            value={formData.from_email}
                            onChange={handleChange}
                            className="form-control"
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label"> Message</label>
                            <textarea 
                                name="message" 
                                value={formData.message}
                                onChange={handleChange}
                                className="form-control"
                            />
                    </div>
                    <div class="fs-button-group">
                        <button className="fs-button" type="submit">
                        Send
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Contact;
