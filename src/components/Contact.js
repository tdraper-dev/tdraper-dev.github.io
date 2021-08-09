import React, { useState } from 'react'
import IconTitle from './IconTitle'

function ContactForm() {
  const [content, setContent] = useState('')
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('you want to email me!')
  }

  return (
    <>
    <div className="contactRow row">
      <IconTitle title="Contact Me" margin="mb-5" />
        <form className="col-11 emailForm" onSubmit={handleSubmit}>
          <label htmlFor="emailInput" className="mt-4 formLabel">Email Address<span className="accent">:</span></label>
          <input
          id="emailInput"
          className="emailInput"
          value={email}
          type='text'
          onChange={({ target }) => setEmail(target.value)}
          required
          />
          <label htmlFor="contentInput" className="mt-4 formLabel">Message<span className="accent">:</span></label>
          <textarea
          id="contentInput"
          style={{ resize: 'none' }}
          type="text"
          className="contentArea "
          value={content}
          onChange={({ target }) => setContent(target.value)}
          placeholder="How can I help you?"
          >
          </textarea>
          <button type="submit" className="formSubmitButton mt-4">Send</button>
        </form>
    </div>
    </>
  )
}

export default ContactForm