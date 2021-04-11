import React from 'react';
import { NavLink } from 'react-router-dom';
import {routes} from '../../routes'
// import s from './AuthNav.module.css'
const AuthNav = () => (
    <div>
      <NavLink
        to={routes.register}
        exact
        // className={s.link}
        // activeСlassName={s.activeLink}
      >
        Registration
      </NavLink>
      <NavLink
        to={routes.login}
        exact
        // className={s.link}
        // activeСlassName={s.activeLink}
      >
        Login
      </NavLink>
    </div>
  );
  
  export default AuthNav;