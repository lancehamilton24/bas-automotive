import { useState } from 'react'
import { formatPhoneNumber } from './phone'

const contactEmail = 'developerhamilton@outlook.com'

export function ContactForm() {
  const [phoneNumber, setPhoneNumber] = useState('')
  return <form className="contact-form" action={`https://formsubmit.co/${contactEmail}`} method="POST" aria-labelledby="contact-form-title">
    <div><h3 id="contact-form-title">Contact us</h3><p>Tell us how we can help. Only name and phone number are required.</p></div>
    <input type="hidden" name="_subject" value="New contact from BA’s Automotive website" />
    <input type="hidden" name="_template" value="table" />
    <div className="contact-form-row">
      <label htmlFor="contact-name">Name (required)<input id="contact-name" name="name" autoComplete="name" required maxLength={100} pattern=".*\S.*" /></label>
      <label htmlFor="contact-phone">Phone number (required)<input id="contact-phone" name="phone" type="tel" inputMode="tel" autoComplete="tel-national" value={phoneNumber} onChange={event => setPhoneNumber(formatPhoneNumber(event.target.value))} placeholder="(000) 000-0000" required maxLength={14} pattern="\([0-9]{3}\) [0-9]{3}-[0-9]{4}" /></label>
    </div>
    <label htmlFor="contact-email">Email (optional)<input id="contact-email" name="email" type="email" autoComplete="email" maxLength={254} pattern="[^\s@]+@[^\s@]+" /></label>
    <label htmlFor="contact-subject">Subject (optional)<input id="contact-subject" name="subject" maxLength={200} /></label>
    <label htmlFor="contact-message">Message (optional)<textarea id="contact-message" name="message" rows={5} maxLength={5000} /></label>
    <div className="contact-form-actions"><button className="button primary" type="submit">Send message</button></div>
  </form>
}
