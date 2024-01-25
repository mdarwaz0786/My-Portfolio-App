import './FormStyle.css';
import React from 'react';

const Form = () => {
    return <div className='form'>
        <form>
            <label>Your Name</label>
            <input type='text' placeholder='enter your name'></input>
            <label>Email</label>
            <input type='email' placeholder='enter your email'></input>
            <label>Subject</label>
            <input type='text' placeholder='enter your subject'></input>
            <label>Message</label>
            <textarea rows='6' placeholder='type your message here'></textarea>
            <button className='btn' onClick={(event) => { event.preventDefault(); alert("Submitted successfully") }}>Submit</button>
        </form>
    </div>
};

export default Form;
