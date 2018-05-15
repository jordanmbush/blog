import React from 'react';
import '../styles/buttons.css';

const Button = ({disabled, onClick, btnText}) => {

  return (
    <button className='submit-button' disabled={disabled} onClick={onClick}>
      {btnText || 'Submit'}
    </button>
  )
}

export default Button;