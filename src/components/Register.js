import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import Header from './Header';

const Register = ({ handleRegister }) => {
  const history = useHistory();  
  const [userEmail, setUserEmail] = React.useState('');
  const [userPassword, setUserPassword] = React.useState(''); 

  const handleChange = (e) => {
    e.target.name === "email" ? setUserEmail(e.target.value) : setUserPassword(e.target.value);
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
      <Header link="/signin" linkText="Log in"></Header>
      <div className="modal__form_container">
        <form className="modal__form" onSubmit={handleSubmit} >
          <h3 className="modal__form_heading">Sign up</h3>
          <input className="modal__form_input" placeholder="Email" type="Email" name="Email" minLength={2} maxLength={200} value={userEmail} onChange={handleChange} required />
          <input className="modal__form_input" placeholder="Password" type="Password" name="Password" minLength={2} maxLength={200} value={userPassword} onChange={handleChange} required />
          <button className="modal__form_submit" type="submit" aria-label="register">Sign Up</button>
          <Link className="modal__link" to="/signin">Already a member? Log in here!</Link>
        </form>
      </div>  
    </>
  );
       
}

export default Register;