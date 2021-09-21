import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import Header from './Header';

const Login = ({ handleLogin }) => {
  const history = useHistory();  
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState(''); 

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(email, password);

    if(localStorage.getItem('jwt')) {
      history.push('/');
    }
  }  
  
  return (
    <>
      <Header link="/signup" linkText="Sign up"></Header>
      <div className="modal__form_container">
        <form className="modal__form" onSubmit={handleSubmit} >
          <h3 className="modal__form_heading">Log in</h3>
          <input className="modal__form_input" placeholder="Email" type="email" name="email" minLength={2} maxLength={200} value={email} onChange={e => setEmail(e.target.value)} required />
          <input className="modal__form_input" placeholder="Password" type="password" name="password" minLength={2} maxLength={200} value={password} onChange={e => setPassword(e.target.value)} required />
          <button className="modal__form_submit" type="submit">Log In</button>
          <Link className="modal__link" to="/signup">Not a member yet? Sign up here!</Link>
        </form>
      </div>
    </>
  );
       
}

export default Login;