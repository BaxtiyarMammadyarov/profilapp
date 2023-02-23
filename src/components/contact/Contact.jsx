import React from 'react'
import ContactInfo from '../contact-info/ContactInfo'
import "./style.css"


function Contact() {
  let list = [
    {
        label: "Email",
        val: "baxtiyar.mammadyarov@gmail.com"
    },
    {
        label: "Phone",
        val: "+994-55-200-92-61"
    }, {
        label: "Country",
        val: "Baki Azərbaycan"
    }
    , {
        label: "linkedn",
        val: "https://www.linkedin.com/in/baxtiyarmammadyarov"
    },
    {
        label: "Github",
        val: "github.com/BaxtiyarMammadyarov"
    }
]
  return (
    <div className='contact'>
    {
      list.map((item) => 
        <ContactInfo  lab = {item.label }  val ={item.val} />
        )

    }
    
       
    </div>
  )
}

export default Contact
