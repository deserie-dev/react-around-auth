import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import Header from './Header';

const Register = ({ handleRegister }) => {
  const history = useHistory();  
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState(''); 

  const handleSubmit = (e) => {
    e.preventDefault();
    handleRegister(email, password);

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
          <input className="modal__form_input" placeholder="Email" type="email" name="email" minLength={2} maxLength={200} value={email} onChange={e => setEmail(e.target.value)} required />
          <input className="modal__form_input" placeholder="Password" type="password" name="password" minLength={2} maxLength={200} value={password} onChange={e => setPassword(e.target.value)} required />
          <button className="modal__form_submit" type="submit" aria-label="register">Sign Up</button>
          <Link className="modal__link" to="/signin">Already a member? Log in here!</Link>
        </form>
      </div>  
    </>
  );
       
}

export default Register;