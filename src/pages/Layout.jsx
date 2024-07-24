import React from 'react'
import { Outlet } from 'react-router-dom';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

// rafc/rafce/rafcp pour créer le composant fonctionnel en entier
const Layout = () => {
  return (
    <>
        <Nav />
        <Outlet />
        <Footer />
    </>
  );
};

export default Layout;