import React from 'react'
import Contact from '../contact/Contact'
import Rinfo from '../Info/Rinfo'
import "./style.css"

function Title() {
  return (
    <div className='title-s'>
      <Rinfo/>
      <Contact/>
    </div>
  )
}

export default Title
