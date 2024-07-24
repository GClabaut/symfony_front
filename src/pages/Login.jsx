import { React, useState } from 'react';
import login from '../styles/login.css';


const Login = () => {

  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [usernameError, setUsernameError] = useState();
  const [passwordError, setPasswordError] = useState();

  const onButtonClick = () => {
    // loginCheck();
  }

  return (
    <form className={'mainContainer'}>
      <div className={'titleContainer'}>
        <p>Connexion</p>
      </div>
      <br />
      <div className={'inputContainer'}>
        <input value={username} type="text" placeholder="Saisir votre adresse mail" onChange={(ev) => setUsername(ev.target.value)} className={'inputBox'} autoComplete="username" />
        <label className="errorLabel">{usernameError}</label>
      </div>
      <br />
      <div className={'inputContainer'}>
        <input value={password} type="password" placeholder="Saisir votre mot de passe" onChange={(ev) => setPassword(ev.target.value)} className={'inputBox'} autoComplete="current-password" />
        <label className="errorLabel">{passwordError}</label>
      </div>
      <br />
      <div className={'inputContainer'}>
        <input className={'inputButton'} type="button" onClick={onButtonClick} value={'Se connecter'} />
      </div>
    </form>
  );
};

export default Login;