import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import Header from './Header';

const Login = ({ handleLogin }) => {
  const history = useHistory();  
  const [userEmail, setUserEmail] = React.useState('');
  const [userPassword, setUserPassword] = React.useState(''); 

  const handleChange = (e) => {
    e.target.name === 'email' ? setUserEmail(e.target.value) : setUserPassword(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(userEmail, userPassword);

    if(localStorage.getItem('jwt')) {
      history.push('/');
    }
  }  
  
  return (
    <>
    <Header>
      <nav>
        <Link className='nav-menu__link' to='/sign-up'>Sign up</Link>
      </nav>
    </Header>
    <form className='modal modal_dark' onSubmit={handleSubmit} >
      <input className='modal__form-control login__form-email' placeholder='Email' type='email' name='email' minLength={2} maxLength={200} value={userEmail} onChange={handleChange} required />
      <input className='modal__form-control login__form-password' placeholder='Password' type='password' name='password' minLength={2} maxLength={200} value={userPassword} onChange={handleChange} required />
      <button className='modal__form-submit modal__form-submit_login' type='submit'>Log In</button>
    </form>
    <Link className='modal__link' to='/signup'>Not a member yet? Sign up here!</Link>
    </>
  );
       
}

export default Login;

// login user in app.js
  // const handleLogin = (email, password) => {
  //   authorize(email, password)
  //     .then((res) => {
  //       if (!res) {
  //         console.log(res.error);
  //         setIsSuccessful(false);
  //         setIsInfoTooltipOpen(true);
  //       } if (res.err) {
  //         console.log(res.error);
  //         setIsSuccessful(false);
  //         setIsInfoTooltipOpen(true);
  //       }
  //       handleTokenCheck();
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       setIsSuccessful(false);
  //       setIsInfoTooltipOpen(true);
  //     })
  // }