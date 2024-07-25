import { React, useState } from 'react';
import login from '../styles/login.css';
import { fetchData } from '../lib/fetchData.js';
import { jwtDecode } from 'jwt-decode';
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [usernameError, setUsernameError] = useState();
  const [passwordError, setPasswordError] = useState();
  const [identifiantsError, setIdentifiantsError] = useState();
  const navigate = useNavigate();

  // Connexion et stockage du token
  const loginCheck = () => {

    fetchData({
      route : '/login_check',
      options : {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({username, password})
      },
    })
    .then((r) => {
      const payload = jwtDecode(r.token);
      const { exp, roles, usernmae } = payload;
      sessionStorage.setItem('user', JSON.stringify({ exp, roles, username, token: r.token }))
      navigate('/blogs');
    })
    .catch((e) => {
      setIdentifiantsError("Mauvais email ou mot de passe");
    })

  }

  // Validation des entrées
  const onButtonClick = () => {
    if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(username)) {
      setUsernameError('Veuillez saisir une adresse mail valide ex: john-doe@monsite.fr');
      return;
    }
    // if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$.!%*?&])[A-Za-z\d@$!%*.?&]{9,}$/.test(password)) {
    //   setPasswordError('Veuillez saisir un mot de passe valide');
    //   return;
    // }
    loginCheck();
  };

  return (
    <form className={'mainContainer'}>
      <div className={'titleContainer'}>
        <p>Connexion</p>
      </div>
      <br />
      <div className={'inputContainer'}>
      <label className="errorLabel">{identifiantsError}</label>
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