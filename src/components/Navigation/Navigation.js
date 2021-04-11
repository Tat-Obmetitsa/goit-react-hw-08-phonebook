import React from 'react';
import { NavLink } from 'react-router-dom';
// import s from './Navigation.module.css';
import {routes} from '../../routes';


const Navigation = () => (
  <nav>
    <NavLink to={routes.home} exact >
      Home
    </NavLink>

    <NavLink
      to={routes.contacts}
      exact
      // className={s.link}
      // activeСlassName={s.activeLink}
    >
      Contacts
    </NavLink>
  </nav>
);

export default Navigation;