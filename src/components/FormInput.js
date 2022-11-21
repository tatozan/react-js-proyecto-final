import React from 'react'
import Col from 'react-bootstrap/Col';
import '../css/FormInput.css'

export default function FormInput(props) {

  const {label, onChange, ...inputData} = props

  

  return (
    <Col className='col-input'>
        <label>{label}</label>
        <input className='form-input' {...inputData} onChange={onChange} />
    </Col>
  )
}
