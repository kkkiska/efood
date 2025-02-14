import { useState } from 'react';
import Button from '../UI/Button';

const SignUpForm = ({ authState }) => {
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');
  const [authUser, setAuthUser] = authState;
  const submitForm = (e) => {
    e.preventDefault();
    console.log(`login: ${mail}, password: ${password}`);
    setAuthUser(mail);
    localStorage.setItem('authUser', mail);
  };

  const logOut = () => {
    setAuthUser('');
    localStorage.setItem('authUser', '');
  };
  return (
    <>
      {authUser === '' && (
        <form className="modal__form" onSubmit={submitForm}>
          <input
            className="modal__input"
            type="email"
            placeholder="Your email addres"
            value={mail}
            onChange={(e) => setMail(e.target.value)}
            required
          />
          <input
            className="modal__input"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Button className="modal__button">Sign in</Button>
        </form>
      )}
      {authUser && (
        <>
          <div className="modal__description">
            you are logged in under your account {authUser}
          </div>
          <Button className="modal__button" onClick={logOut}>
            Log out
          </Button>
        </>
      )}
    </>
  );
};

export default SignUpForm;
