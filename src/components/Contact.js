import { valueToNode } from '@babel/types';
import React, { useState, useRef } from 'react'
import { useForm } from 'react-hook-form';
import IconTitle from './IconTitle'
import { init, sendForm } from 'emailjs-com'
init('user_vD4eEJLC3HZB2ZNi1Eehq')

function ContactForm() {
  const [contactNumber, setContactNumber] = useState('000000')
  const [statusMessage, setStatusMessage] = useState('Message')

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    const form = document.getElementById('contactMeForm')
    const statusMessage = document.getElementById('statusMessage')
    generateContactNumber();

    sendForm('default_service', 'template_ktdvhxs', '#contactMeForm')
      .then(response => {
        form.reset();
        setStatusMessage("Message sent!");
        statusMessage.className = "status-message success";
        setTimeout(()=> {
          statusMessage.className = 'status-message'
        }, 5000)
      })
      .catch(error => {
        setStatusMessage("Failed to send message! Please try again later.");
        statusMessage.className = "status-message failure";
        setTimeout(()=> {
          statusMessage.className = 'status-message'
        }, 5000)
      })
  }

  const generateContactNumber = () => {
    const numStr = "000000" + (Math.random() * 1000000 | 0);
    setContactNumber(numStr.substring(numStr.length - 6));
  }
 
  return (
    <>
    <div className="contactRow row">
      <IconTitle title="Contact Me" margin="mb-3" />
      <p id="statusMessage" className="status-message">{statusMessage}</p>
        <form id="contactMeForm" className="col-11 emailForm" onSubmit={handleSubmit(onSubmit)}>
          <input 
            type="hidden"
            name="contact_number"
            value={contactNumber}
          />

          {errors.username && errors.username.type === "required" && (
            <div className="issue mt-4 " role="alert">Name is required</div>
          )}
          {errors.username && errors.username.type === "minLength" && (
          <div className="issue mt-4 " role="alert">Please use full name</div>
          )}
          <label htmlFor="username" className="mt-4 formLabel">Name<span className="accent">:</span></label>
          <input
          name="username"
          id="username"
          className="usernameInput"
          type='text'
          {...register("username", {
            required: true,
            minLength: '5'
          })}  
          />

          {errors.email && errors.email.type === "required" && (
            <div className="issue mt-4 " role="alert">Email is required</div>
          )}
          {errors.email && errors.email.type === "validate" && (
            <div className="issue mt-4 " role="alert">Please enter valid email</div>
          )}
          <label htmlFor="emailInput" className="mt-4 formLabel">Email Address<span className="accent">:</span></label>
          <input
          name="email"
          id="emailInput"
          className="emailInput"
          {...register("email", {
            required: true,
            validate: value => /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(value)
          })}
          />

          {errors.emailContent && errors.emailContent.type === "required" && (
            <div className="issue mt-4 " role="alert">Please write a message</div>
          )}
          {errors.emailContent && errors.emailContent.type === "minLength" && (
            <div className="issue mt-4 " role="alert">Please write more</div>
          )}
          <label htmlFor="contentInput" className="mt-4 formLabel">Message<span className="accent">:</span></label>
          <textarea
          name="emailContent"
          id="contentInput"
          style={{ resize: 'none' }}
          type="text"
          className="contentArea "
          placeholder="How can I help you?"
          {...register("emailContent", {
            required: true,
            minLength: '10'
          })}
          >
          </textarea>

          <button type="submit" className="formSubmitButton mt-4">Send</button>
        </form>
    </div>
    </>
  )
}

export default ContactForm