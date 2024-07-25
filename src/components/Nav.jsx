import React from 'react'
import { Link } from 'react-router-dom';
import { isLogged } from '../lib/auth.js';

const Nav = () => {
  return (
    <ul className='navbar'>
        <li><Link to="/">Accueil</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/blogs">Blogs</Link></li>
        {isLogged() ?
          (<li><Link to="/logout">Logout</Link></li>)
          :
          (<li><Link to="/login">Login</Link></li>)
        }
    </ul>
  );
};

export default Nav;