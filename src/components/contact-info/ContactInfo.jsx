import React from 'react'
import "./style.css"
function ContactInfo(props) {
  
    return (
        <div className='contact-info'>
            <div className="input-field">
            <label>{props.lab}</label>
            <button name={props.lab}>{props.val}</button>
            </div>
        </div>
    )
}

export default ContactInfo
