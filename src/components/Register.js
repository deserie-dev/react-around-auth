import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import Header from './Header';

const Register = ({ handleRegister }) => {
  const history = useHistory();  
  const [userEmail, setUserEmail] = React.useState('');
  const [userPassword, setUserPassword] = React.useState(''); 

  const handleChange = (e) => {
    e.target.name === 'email' ? setUserEmail(e.target.value) : setUserPassword(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    handleRegister(userEmail, userPassword);

    if(localStorage.getItem('jwt')) {
      history.push('/signin');
    }
  }  
  
  return (
    <>
    <Header link='/signin' linkText='Log in'></Header>
    <form className='modal modal_dark' onSubmit={handleSubmit} >
      <input className='modal__form-control login__form-email' placeholder='Email' type='email' name='email' minLength={2} maxLength={200} value={userEmail} onChange={handleChange} required />
      <input className='modal__form-control login__form-password' placeholder='Password' type='password' name='password' minLength={2} maxLength={200} value={userPassword} onChange={handleChange} required />
      <button className='modal__form-submit' type='submit' aria-label='register'>Sign Up</button>
    </form>
    <Link className='modal__link' to='/signin'>Already a member? Log in here!</Link>
    </>
  );
       
}

export default Register;