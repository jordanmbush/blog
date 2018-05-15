import React from 'react';
import Button from './submitButton';
import '../styles/navigate-posts.css';

const NavigatePosts = ({nextDisabled, previousDisabled, onNextClick, onPreviousClick}) => {

  return(
    <div className='navigation-buttons-container flex-row flex-between'>
      <div><Button disabled={previousDisabled} btnText='Previous' onClick={onPreviousClick}/></div>
      <div><Button disabled={nextDisabled} btnText='Next' onClick={onNextClick}/></div>
    </div>
  )
}

export default NavigatePosts;