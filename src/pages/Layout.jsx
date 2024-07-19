import React from 'react'
import { Outlet } from 'react-router-dom';
import Nav from '../components/Nav';

// rafc/rafce/rafcp pour créer le composant fonctionnel en entier
const Layout = () => {
  return (
    <>
        <Nav />
        <Outlet />
    </>
  );
};

export default Layout;