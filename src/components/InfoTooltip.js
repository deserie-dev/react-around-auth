import React from 'react';
import successIcon from '../images/successIcon.svg';
import errorIcon from '../images/errorIcon.svg';

function InfoTooltips(isOpen, onClose, isSuccessful ) {
  return (
    <div className={`modal modal_type_tooltip ${ isOpen && 'modal_opened'}`} >
      <div className='modal__container modal__type_tooltip'>
        <img className='modal__icon' src={isSuccessful ? successIcon : errorIcon} alt='success' />
        <p className='modal__message' >{isSuccessful ? 'Success! You have now been registered.' : 'Oops, something went wrong! Please try again.'}</p>  
        <button className='modal__close-button' type='button' aria-label='close button' onClick={onClose}></button>
      </div>
    </div>
  )
}

export default InfoTooltips;