import React from 'react';

function ContactForm() {

    return (
        <section>
            <h1>Contact Me!</h1>
            <form>
                <div>
                <label htmlFor='name'>Name:</label>
                <input type="text" name='name' />
                </div>
                <div>
                <label htmlFor='email'>Email address:</label>
                <input type="text" name="email"/>
                </div>
                <div>
                <label htmlFor='message'>Message:</label>
                <textarea name='message' rows="5" placeholder='Leave a message!'></textarea>
                </div>
                <button type="submit"></button>
            </form>
        </section>
    );
}

export default ContactForm;