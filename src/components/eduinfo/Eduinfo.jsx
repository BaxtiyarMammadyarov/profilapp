import React from 'react'
import "./style.css"

function Eduinfo(props) {
  return (
    <div className='eduinfo'>
    <h3>{props.title}</h3>
    <p>{props.subtitle}</p>
    <span>{props.year}</span>
    </div>
  )
}

export default Eduinfo